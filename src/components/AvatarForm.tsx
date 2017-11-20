import * as React from 'react'
import {
  Button,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup
} from 'react-bootstrap'

import { Option, OptionContext } from './options'

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
  optionContext: OptionContext
  onDownload?: () => void
}

export default class AvatarForm extends React.Component<Props> {
  private onChangeCache: Array<(value: string) => void> = []

  componentWillMount () {
    const { optionContext } = this.props
    optionContext.addListener(() => {
      this.forceUpdate()
    })
    this.onChangeCache = optionContext.options.map(option =>
      this.onChange.bind(this, option)
    )
  }

  render () {
    const { optionContext } = this.props
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
      return (
        <OptionSelect
          key={option.key}
          controlId={option.key}
          label={option.label}
          value={optionState.value!}
          onChange={this.onChangeCache[index]}>
          {selectOptions}
        </OptionSelect>
      )
    })
    const labelCol = 3
    const inputCol = 9
    return (
      <Form horizontal onSubmit={this.onDownload}>
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
            <Button bsStyle='primary' type='submit'>
              <i className='fa fa-download' /> Download
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

  private onDownload = (event: React.FormEvent<FormControl>) => {
    event.preventDefault()
    if (this.props.onDownload) {
      this.props.onDownload()
    }
  }
}
