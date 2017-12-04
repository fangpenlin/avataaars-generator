import * as React from 'react'
import { AvatarStyle, Option, OptionContext } from 'avataaars'
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

class OptionSelect extends React.Component<SelectProps> {
  render () {
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
  avatarStyle: AvatarStyle
  optionContext: OptionContext
  displayingCode: boolean
  onDownload?: () => void
  onAvatarStyleChange?: (avatarStyle: AvatarStyle) => void
  onToggleCode?: () => void
}

export default class AvatarForm extends React.Component<Props> {
  private onChangeCache: Array<(value: string) => void> = []

  componentWillMount () {
    const { optionContext } = this.props
    optionContext.addStateChangeListener(() => {
      this.forceUpdate()
    })
    this.onChangeCache = optionContext.options.map(option =>
      this.onChange.bind(this, option)
    )
  }

  render () {
    const { optionContext, avatarStyle, displayingCode } = this.props
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
        <FormGroup className='row' controlId='avatar-style'>
          <Col componentClass={ControlLabel} sm={3}>
            Avatar Style
          </Col>
          <Col sm={9}>
            <label>
              <input
                type='radio'
                id='avatar-style-circle'
                name='avatar-style'
                value={AvatarStyle.Circle}
                checked={avatarStyle === AvatarStyle.Circle}
                onChange={this.onAvatarStyleChange}
              />{' '}
              Circle
            </label>{' '}
            <label>
              <input
                type='radio'
                id='avatar-style-transparent'
                name='avatar-style'
                value={AvatarStyle.Transparent}
                checked={avatarStyle === AvatarStyle.Transparent}
                onChange={this.onAvatarStyleChange}
              />{' '}
              Transparent
            </label>
          </Col>
        </FormGroup>
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
            <Button bsStyle='primary' type='submit' onClick={this.onDownload}>
              <i className='fa fa-download' /> Download
            </Button>{' '}
            <Button
              bsStyle='secondary'
              type='submit'
              onClick={this.onToggleCode}>
              <i className='fa fa-code' />{' '}
              {displayingCode ? 'Hide React' : 'Show React'}
            </Button>
            <div style={{ marginTop: '10px' }}>
              <a
                className='twitter-share-button'
                href={
                  'https://twitter.com/intent/tweet?text=' +
                  encodeURI('I just created my avataaars here 😆')
                }
                data-size='large'>
                Tweet
              </a>
            </div>
          </Col>
        </FormGroup>
      </Form>
    )
  }

  private onChange (option: Option, value: string) {
    const { optionContext } = this.props
    optionContext.setValue(option.key, value)
  }

  private onAvatarStyleChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (this.props.onAvatarStyleChange) {
      this.props.onAvatarStyleChange((event.target as any).value)
    }
  }

  private onDownload = (event: React.FormEvent<FormControl>) => {
    event.preventDefault()
    if (this.props.onDownload) {
      this.props.onDownload()
    }
  }

  private onToggleCode = (event: React.FormEvent<FormControl>) => {
    event.preventDefault()
    if (this.props.onToggleCode) {
      this.props.onToggleCode()
    }
  }
}
