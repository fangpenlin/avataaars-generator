import * as React from 'react'
import { Option, OptionContext } from 'avataaars'
import {
  Button,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup
} from 'react-bootstrap'

interface SelectProps {
  controlId: string
  label: string
  value: string
  onChange?: (value: string) => void
}

// ref: https://stackoverflow.com/a/1714899/25077
const serializeQuery = function (obj: any) {
  const str = []
  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
    }
  }
  return str.join('&')
}

class OptionSelect extends React.Component<SelectProps> {
  render() {
    const { controlId, label, value, children } = this.props
    return (
      <FormGroup className='row' controlId={controlId}>
        <Col componentClass={ControlLabel} sm={3}>
          {label}
        </Col>
        <Col sm={9}>
          <FormControl
            componentClass='select'
            value={value}
            onChange={this.onChange}>
            {children}
          </FormControl>
        </Col>
      </FormGroup>
    )
  }

  private onChange = (event: React.FormEvent<FormControl>) => {
    if (this.props.onChange) {
      this.props.onChange(((event.target as any) as HTMLSelectElement).value)
    }
  }
}

export interface Props {
  optionContext: OptionContext
  displayingCode: boolean
  displayingImg: boolean
  onDownloadPNG?: () => void
  onDownloadSVG?: () => void
  onToggleCode?: () => void
  onToggleImg?: () => void
}

export default class AvatarForm extends React.Component<Props> {
  private onChangeCache: Array<(value: string) => void> = []

  componentWillMount() {
    const { optionContext } = this.props
    optionContext.addStateChangeListener(() => {
      this.forceUpdate()
    })
    this.onChangeCache = optionContext.options.map(option =>
      this.onChange.bind(this, option)
    )
  }

  render() {
    const { optionContext, displayingImg, displayingCode } = this.props
    const selects = optionContext.options.map((option, index) => {
      const optionState = optionContext.getOptionState(option.key)!
      if (optionState.available <= 0) {
        return null
      }
      const selectOptions = optionState.options.map(type => (
        <option key={type} value={type}>
          {type}
        </option>
      ))
      const value = optionContext.getValue(option.key)!
      return (
        <OptionSelect
          key={option.key}
          controlId={option.key}
          label={option.label}
          value={value}
          onChange={this.onChangeCache[index]}>
          {selectOptions}
        </OptionSelect>
      )
    })
    const labelCol = 3
    const inputCol = 9
    return (
      <Form horizontal>
        {selects}
        <FormGroup className='row'>
          <Col
            className={`offset-sm-${labelCol}`}
            smOffset={labelCol}
            sm={inputCol}>
            More options coming soon,{' '}
            <a href='http://eepurl.com/c_7fN9' target='_blank'>
              subscribe for updates
            </a>
          </Col>
        </FormGroup>
        <FormGroup className='row'>
          <Col
            className={'offset-sm-' + labelCol}
            smOffset={labelCol}
            sm={inputCol}>
            <Button
              bsStyle='primary'
              type='submit'
              onClick={this.onDownloadPNG}>
              <i className='fa fa-download' /> PNG
            </Button>{' '}
            <Button
              bsStyle='secondary'
              type='submit'
              onClick={this.onDownloadSVG}>
              <i className='fa fa-download' /> SVG
            </Button>{' '}
            <Button
              bsStyle='secondary'
              type='submit'
              onClick={this.onToggleCode}>
              <i className='fa fa-code' />{' '}
              {displayingCode ? 'Hide React' : 'Show React'}
            </Button>{' '}
            <Button
              bsStyle='secondary'
              type='submit'
              onClick={this.onToggleImg}>
              <i className='fa fa-code' />{' '}
              {displayingImg ? 'Hide <img>' : 'Show <img>'}
            </Button>
            <div style={{ marginTop: '10px' }}>
              <iframe
                src={
                  'https://platform.twitter.com/widgets/tweet_button.html?' +
                  serializeQuery({
                    text: 'I just created my avataaars here 😆',
                    url: document.location.href,
                    hashtags: 'avataaars,avatar',
                    size: 'l',
                    lang: 'en'
                  })
                }
                width='140'
                height='28'
                title='Twitter Tweet Button'
                style={{ border: 0, overflow: 'hidden' }}
              />
            </div>
          </Col>
        </FormGroup>
      </Form>
    )
  }

  private onChange(option: Option, value: string) {
    const { optionContext } = this.props
    optionContext.setValue(option.key, value)
  }

  private onDownloadPNG = (event: React.FormEvent<FormControl>) => {
    event.preventDefault()
    if (this.props.onDownloadPNG) {
      this.props.onDownloadPNG()
    }
  }

  private onDownloadSVG = (event: React.FormEvent<FormControl>) => {
    event.preventDefault()
    if (this.props.onDownloadSVG) {
      this.props.onDownloadSVG()
    }
  }

  private onToggleCode = (event: React.FormEvent<FormControl>) => {
    event.preventDefault()
    if (this.props.onToggleCode) {
      this.props.onToggleCode()
    }
  }

  private onToggleImg = (event: React.FormEvent<FormControl>) => {
    event.preventDefault()
    if (this.props.onToggleImg) {
      this.props.onToggleImg()
    }
  }
}
