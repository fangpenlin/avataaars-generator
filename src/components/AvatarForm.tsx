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
  AccessoriesType,
  AllAccessoriesTypes,
  AllClotheColors,
  AllClotheTypes,
  AllEyeTypes,
  AllEyebrowTypes,
  AllMouthTypes,
  AllSkinColors,
  AllTopTypes,
  ClotheColor,
  ClotheType,
  EyeType,
  EyebrowType,
  MouthType,
  SkinColor,
  TopType
} from './avatar'

export interface Props {
  topType: TopType
  eyeType: EyeType
  eyebrowType: EyebrowType
  mouthType: MouthType
  clotheType: ClotheType
  clotheColor: ClotheColor
  accessoriesType: AccessoriesType
  skinColor: SkinColor
  onTopChange?: (topType: TopType) => void
  onEyeChange?: (eyeType: EyeType) => void
  onEyebrowChange?: (eyebrowType: EyebrowType) => void
  onMouthChange?: (mouthType: MouthType) => void
  onClotheChange?: (clotheType: ClotheType) => void
  onClotheColorChange?: (clotheColor: ClotheColor) => void
  onAccessoriesChange?: (accessoriesType: AccessoriesType) => void
  onSkinColorChange?: (skinColor: SkinColor) => void
  onDownload?: () => void
}

interface SelectProps {
  controlId: string
  label: string
  value: string
  onChange: (event: React.FormEvent<FormControl>) => void
}

class OptionSelect extends React.Component<SelectProps> {
  render () {
    const { controlId, label, value, onChange, children } = this.props
    return (
      <FormGroup className='row' controlId={controlId}>
        <Col componentClass={ControlLabel} sm={3}>
          {label}
        </Col>
        <Col sm={9}>
          <FormControl
            componentClass='select'
            value={value}
            onChange={onChange as any}>
            {children}
          </FormControl>
        </Col>
      </FormGroup>
    )
  }
}

export default class AvatarForm extends React.Component<Props> {
  render () {
    const topOptions = AllTopTypes.map(type => (
      <option key={type} value={type}>
        {type}
      </option>
    ))
    const accessoriesOptions = AllAccessoriesTypes.map(type => (
      <option key={type} value={type}>
        {type}
      </option>
    ))
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
    const mouthOptions = AllMouthTypes.map(type => (
      <option key={type} value={type}>
        {type}
      </option>
    ))
    const clotheOptions = AllClotheTypes.map(type => (
      <option key={type} value={type}>
        {type}
      </option>
    ))
    const clotheColorOptions = AllClotheColors.map(type => (
      <option key={type} value={type}>
        {type}
      </option>
    ))
    const skinColorOptions = AllSkinColors.map(type => (
      <option key={type} value={type}>
        {type}
      </option>
    ))

    const labelCol = 3
    const inputCol = 9
    return (
      <Form horizontal onSubmit={this.onDownload}>
        <OptionSelect
          controlId='top'
          label='Top'
          value={this.props.topType}
          onChange={this.onTopChange}>
          {topOptions}
        </OptionSelect>
        <OptionSelect
          controlId='accessories'
          label='👓 Accessories'
          value={this.props.accessoriesType}
          onChange={this.onAccessoriesChange}>
          {accessoriesOptions}
        </OptionSelect>
        <OptionSelect
          controlId='eyebrow'
          label='✏️ Eyebrow'
          value={this.props.eyebrowType}
          onChange={this.onEyebrowChange}>
          {eyebrowOptions}
        </OptionSelect>
        <OptionSelect
          controlId='eyes'
          label='👁 Eyes'
          value={this.props.eyeType}
          onChange={this.onEyeChange}>
          {eyeOptions}
        </OptionSelect>
        <OptionSelect
          controlId='mouth'
          label='👄 Mouth'
          value={this.props.mouthType}
          onChange={this.onMouthChange}>
          {mouthOptions}
        </OptionSelect>
        <OptionSelect
          controlId='clothe'
          label='👔 Clothes'
          value={this.props.clotheType}
          onChange={this.onClotheChange}>
          {clotheOptions}
        </OptionSelect>
        <OptionSelect
          controlId='clotheColor'
          label='↳ Color Fabric'
          value={this.props.clotheColor}
          onChange={this.onClotheColorChange}>
          {clotheColorOptions}
        </OptionSelect>
        <OptionSelect
          controlId='skinColor'
          label='🎨 Skin'
          value={this.props.skinColor}
          onChange={this.onSkinColorChange}>
          {skinColorOptions}
        </OptionSelect>
        <FormGroup className='row'>
          <Col className='offset-sm-3' smOffset={labelCol} sm={inputCol}>
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

  private onTopChange = (event: React.FormEvent<FormControl>) => {
    if (this.props.onTopChange) {
      this.props.onTopChange(((event.target as any) as HTMLSelectElement)
        .value as TopType)
    }
  }

  private onAccessoriesChange = (event: React.FormEvent<FormControl>) => {
    if (this.props.onAccessoriesChange) {
      this.props.onAccessoriesChange(
        ((event.target as any) as HTMLSelectElement).value as AccessoriesType
      )
    }
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

  private onMouthChange = (event: React.FormEvent<FormControl>) => {
    if (this.props.onMouthChange) {
      this.props.onMouthChange(((event.target as any) as HTMLSelectElement)
        .value as MouthType)
    }
  }

  private onClotheChange = (event: React.FormEvent<FormControl>) => {
    if (this.props.onClotheChange) {
      this.props.onClotheChange(((event.target as any) as HTMLSelectElement)
        .value as ClotheType)
    }
  }

  private onClotheColorChange = (event: React.FormEvent<FormControl>) => {
    if (this.props.onClotheColorChange) {
      this.props.onClotheColorChange(
        ((event.target as any) as HTMLSelectElement).value as ClotheColor
      )
    }
  }

  private onSkinColorChange = (event: React.FormEvent<FormControl>) => {
    if (this.props.onSkinColorChange) {
      this.props.onSkinColorChange(((event.target as any) as HTMLSelectElement)
        .value as SkinColor)
    }
  }

  private onDownload = (event: React.FormEvent<FormControl>) => {
    event.preventDefault()
    if (this.props.onDownload) {
      this.props.onDownload()
    }
  }
}
