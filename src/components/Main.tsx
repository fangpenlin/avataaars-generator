import '../assets/App.css'

import * as FileSaver from 'file-saver'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import {
  UrlQueryParamTypes,
  UrlUpdateTypes,
  addUrlProps
} from 'react-url-query'
import { fromPairs } from 'lodash'

import Avatar from './avatar'
import AvatarForm from './AvatarForm'
import { OptionContext, OptionContextState, allOptions } from './options'

interface Props {
  topType: string
  eyeType: string
  eyebrowType: string
  mouthType: string
  clotheType: string
  clotheColor: string
  accessoriesType: string
  __render__?: string
  onChangeTopType: (topType: string) => void
  onChangeEyeType: (eyeType: string) => void
  onChangeEyebrowType: (eyebrowType: string) => void
  onChangeMouthType: (mouthType: string) => void
  onChangeClotheType: (clotheType: string) => void
  onChangeClotheColor: (clotheColor: string) => void
  onChangeAccessoriesType: (accessoriesType: string) => void
  onChangeUrlQueryParams: (params: any) => void
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
  private optionContextState: OptionContextState | null = null

  getChildContext () {
    return { optionContext: this.optionContext }
  }

  componentWillReceiveProps (nextProps: Props) {
    this.updateOptionContext(nextProps)
  }

  componentWillMount () {
    this.optionContext.addListener(this.onAvatarChange)
    this.updateOptionContext(this.props)
  }

  componentDidMount () {
    const anyWindow = window as any
    setTimeout(() => {
      anyWindow.prerenderReady = true
    }, 500)
  }

  componentWillUnmount () {
    this.optionContext.removeListener(this.onAvatarChange)
  }

  render () {
    const { __render__ } = this.props
    const title = 'Avataaars Generator - Generate your own avataaars!'
    const imageURL = process.env.REACT_APP_IMG_RENDERER_URL + location.search
    return (
      <main role='main'>
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

  private onAvatarChange = () => {
    for (const option of this.optionContext.options) {
      const oldState = this.optionContextState
        ? this.optionContextState[option.key]
        : null
      const nextState = this.optionContext.state[option.key]
      if (
        oldState &&
        oldState.value !== nextState.value &&
        oldState.defaultValue === nextState.defaultValue
      ) {
        const name = capitalizeFirstLetter(option.key)
        const updateHandler = this.props[`onChange${name}`] as (
          value: string
        ) => void
        updateHandler(nextState.value!)
      }
    }
    this.optionContextState = this.optionContext.state
  }

  private updateOptionContext (nextProps: Props) {
    for (const option of this.optionContext.options) {
      const value = nextProps[option.key]
      if (!value) {
        continue
      }
      this.optionContext.setValue(option.key, value)
    }
  }

  private onDownload = () => {
    const svgNode = ReactDOM.findDOMNode(this.avatarRef!)
    const ctx = this.canvasRef!.getContext('2d')!

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
