import * as React from 'react'
import {
  Button,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup
} from 'react-bootstrap'

import { AllEyeTypes } from './avatar/face/eyes'

export default class AvatarForm extends React.Component {
  render () {
    const eyeOptions = AllEyeTypes.map(type => (
      <option value={type}>{type}</option>
    ))
    return (
      <Form horizontal style={{ width: '1000px', margin: '0 auto' }}>
        <FormGroup controlId='eyes'>
          <Col componentClass={ControlLabel} sm={2}>
            👁 Eyes
          </Col>
          <Col sm={10}>
            <FormControl componentClass='select'>{eyeOptions}</FormControl>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type='submit'>Download</Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}
