import '../assets/App.css'

import * as FileSaver from 'file-saver'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Button } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import {
  UrlQueryParamTypes,
  UrlUpdateTypes,
  addUrlProps
} from 'react-url-query'
import { fromPairs, sample } from 'lodash'

import Avatar from './avatar'
import AvatarForm from './AvatarForm'
import { OptionContext, allOptions } from './options'

interface Props {
  __render__?: string
  onChangeUrlQueryParams: (params: any, updateType: string) => void
}

const updateType = UrlUpdateTypes.pushIn
const urlPropsQueryConfig = {
  ...fromPairs(
    allOptions.map(option => [
      option.key,
      {
        type: UrlQueryParamTypes.string,
        updateType
      }
    ])
  ),
  __render__: {
    type: UrlQueryParamTypes.string
  }
}

function capitalizeFirstLetter (text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export class Main extends React.Component<Props> {
  static childContextTypes = {
    optionContext: PropTypes.instanceOf(OptionContext)
  }

  private avatarRef: Avatar | null = null
  private canvasRef: HTMLCanvasElement | null = null
  private optionContext: OptionContext = new OptionContext(allOptions)

  getChildContext () {
    return { optionContext: this.optionContext }
  }

  componentWillReceiveProps (nextProps: Props) {
    this.updateOptionContext(nextProps)
  }

  componentWillMount () {
    this.optionContext.addValueChangeListener(this.onOptionValueChange)
    this.updateOptionContext(this.props)
  }

  componentDidMount () {
    const anyWindow = window as any
    setTimeout(() => {
      anyWindow.prerenderReady = true
    }, 500)
  }

  componentWillUnmount () {
    this.optionContext.removeValueChangeListener(this.onOptionValueChange)
  }

  render () {
    const { __render__ } = this.props
    const title = 'Avataaars Generator - Generate your own avataaars!'
    const imageURL = process.env.REACT_APP_IMG_RENDERER_URL + location.search
    return (
      <main role='main'>
        <header className='header clearfix'>
          <h2 style={{ color: '#6A39D7' }}>
            avataaars generator
            <Button
              type='submit'
              bsStyle='secondary'
              style={{ marginLeft: '1rem' }}
              onClick={this.onRandom}>
              <i className='fa fa-random' /> Random
            </Button>
          </h2>
        </header>
        <Helmet>
          <meta property='og:title' content={title} />
          <meta property='og:site_name' content='Avataaars Generator' />
          <meta property='og:url' content={document.location.href} />
          <meta property='og:image' content={imageURL} />
          <meta
            property='og:description'
            content='Avataaars Generator is a free online tool for generating your own avatar'
          />
          <meta name='twitter:card' content='photo' />
          <meta name='twitter:site' content='Avataaars Generator' />
          <meta name='twitter:title' content={title} />
          <meta name='twitter:image' content={imageURL} />
          <meta name='twitter:url' content={document.location.href} />
        </Helmet>
        {__render__ !== '1' ? (
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <Avatar ref={this.onAvatarRef} />
          </div>
        ) : (
          <Avatar
            style={{
              position: 'absolute',
              left: '0',
              right: '0',
              bottom: '0',
              top: '0',
              width: '100%',
              height: '100%'
            }}
            ref={this.onAvatarRef}
          />
        )}
        {__render__ !== '1' ? (
          <AvatarForm
            optionContext={this.optionContext}
            onDownload={this.onDownload}
          />
        ) : null}
        <canvas
          style={{ display: 'none' }}
          width='264'
          height='280'
          ref={this.onCanvasRef}
        />
      </main>
    )
  }

  private onAvatarRef = (ref: Avatar) => {
    this.avatarRef = ref
  }

  private onCanvasRef = (ref: HTMLCanvasElement) => {
    this.canvasRef = ref
  }

  private onOptionValueChange = (key: string, value: string) => {
    const name = capitalizeFirstLetter(key)
    const handlerName = `onChange${name}`
    const updateHandler = this.props[handlerName] as (value: string) => void
    updateHandler(value)
  }

  private updateOptionContext (nextProps: Props) {
    this.optionContext.setData(nextProps as any)
  }

  private onRandom = () => {
    const { optionContext } = this
    // still have option available but we didn't pick a random value for it
    let stillAvailable = true
    let values: { [index: string]: string } = {}
    while (stillAvailable) {
      for (const option of optionContext.options) {
        if (option.key in values) {
          continue
        }
        const optionState = optionContext.getOptionState(option.key)!
        if (!optionState.available) {
          continue
        }
        values[option.key] = sample(optionState.options)!
      }

      // update data to see more possible options
      this.optionContext.setData(values)

      // see if there is new option available but we haven't generate a
      // random value for it
      stillAvailable = false
      for (const option of optionContext.options) {
        if (option.key in values) {
          continue
        }
        const optionState = optionContext.getOptionState(option.key)!
        if (optionState.available) {
          stillAvailable = true
        }
      }
    }
    this.props.onChangeUrlQueryParams!(values, UrlUpdateTypes.push)
  }

  private onDownload = () => {
    const svgNode = ReactDOM.findDOMNode(this.avatarRef!)
    const canvas = this.canvasRef!
    const ctx = canvas.getContext('2d')!
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const anyWindow = window as any
    const DOMURL = anyWindow.URL || anyWindow.webkitURL || window

    const data = svgNode.outerHTML
    const img = new Image()
    const svg = new Blob([data], { type: 'image/svg+xml' })
    const url = DOMURL.createObjectURL(svg)

    img.onload = () => {
      ctx.drawImage(img, 0, 0)
      DOMURL.revokeObjectURL(url)
      this.canvasRef!.toBlob(imageBlob => {
        this.triggerDownload(imageBlob!)
      })
    }
    img.src = url
  }

  private triggerDownload (imageBlob: Blob) {
    FileSaver.saveAs(imageBlob, 'avataaars.png')
  }
}

export default addUrlProps({ urlPropsQueryConfig })(Main)
