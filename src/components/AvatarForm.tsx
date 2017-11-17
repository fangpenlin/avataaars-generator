import * as React from 'react'
import {
  Button,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup
} from 'react-bootstrap'

import {
  AllTypes as AllClotheTypes,
  Type as ClotheType
} from './avatar/clothes'
import { AllTypes as AllEyeTypes, Type as EyeType } from './avatar/face/eyes'
import {
  AllTypes as AllEyebrowTypes,
  Type as EyebrowType
} from './avatar/face/eyebrow'

export interface Props {
  eyeType: EyeType
  eyebrowType: EyebrowType
  clotheType: ClotheType
  onEyeChange?: (eyeType: EyeType) => void
  onEyebrowChange?: (eyebrowType: EyebrowType) => void
  onClotheChange?: (clotheType: ClotheType) => void
  onDownload?: () => void
}

export default class AvatarForm extends React.Component<Props> {
  render () {
    const eyeOptions = AllEyeTypes.map(type => (
      <option key={type} value={type}>
        {type}
      </option>
    ))
    const eyebrowOptions = AllEyebrowTypes.map(type => (
      <option key={type} value={type}>
        {type}
      </option>
    ))
    const clotheOptions = AllClotheTypes.map(type => (
      <option key={type} value={type}>
        {type}
      </option>
    ))
    return (
      <Form horizontal onSubmit={this.onDownload}>
        <FormGroup className='row' controlId='eyebrow'>
          <Col componentClass={ControlLabel} sm={2}>
            ✏️ Eyebrow
          </Col>
          <Col sm={10}>
            <FormControl
              componentClass='select'
              value={this.props.eyebrowType}
              onChange={this.onEyebrowChange}>
              {eyebrowOptions}
            </FormControl>
          </Col>
        </FormGroup>
        <FormGroup className='row' controlId='eyes'>
          <Col componentClass={ControlLabel} sm={2}>
            👁 Eyes
          </Col>
          <Col sm={10}>
            <FormControl
              componentClass='select'
              value={this.props.eyeType}
              onChange={this.onEyeChange}>
              {eyeOptions}
            </FormControl>
          </Col>
        </FormGroup>
        <FormGroup className='row' controlId='clothe'>
          <Col componentClass={ControlLabel} sm={2}>
            👔 Clothes
          </Col>
          <Col sm={10}>
            <FormControl
              componentClass='select'
              value={this.props.clotheType}
              onChange={this.onClotheChange}>
              {clotheOptions}
            </FormControl>
          </Col>
        </FormGroup>
        <FormGroup className='row'>
          <Col className='offset-sm-2' smOffset={2} sm={10}>
            <Button type='submit'>Download</Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }

  private onEyeChange = (event: React.FormEvent<FormControl>) => {
    if (this.props.onEyeChange) {
      this.props.onEyeChange(((event.target as any) as HTMLSelectElement)
        .value as EyeType)
    }
  }

  private onEyebrowChange = (event: React.FormEvent<FormControl>) => {
    if (this.props.onEyebrowChange) {
      this.props.onEyebrowChange(((event.target as any) as HTMLSelectElement)
        .value as EyebrowType)
    }
  }

  private onClotheChange = (event: React.FormEvent<FormControl>) => {
    if (this.props.onClotheChange) {
      this.props.onClotheChange(((event.target as any) as HTMLSelectElement)
        .value as ClotheType)
    }
  }

  private onDownload = (event: React.FormEvent<FormControl>) => {
    event.preventDefault()
    if (this.props.onDownload) {
      this.props.onDownload()
    }
  }
}
