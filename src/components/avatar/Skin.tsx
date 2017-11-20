import * as React from 'react'

import { Selector, SkinOption } from '../options'

export interface Props {
  maskID: string
}

function makeColor (name: string, color: string) {
  class ColorComponent extends React.Component<Props> {
    render () {
      return (
        <g
          id='Skin/👶🏽-03-Brown'
          mask={`url(#${this.props.maskID})`}
          fill={color}>
          <g transform='translate(-32.000000, 0.000000)' id='Color'>
            <rect x='0' y='0' width='264' height='244' />
          </g>
        </g>
      )
    }
  }
  const anyComponent = ColorComponent as any
  anyComponent.displayName = name
  anyComponent.optionValue = name
  return anyComponent
}

const Tanned = makeColor('Tanned', '#FD9841')
const Yellow = makeColor('Yellow', '#F8D25C')
const Pale = makeColor('Pale', '#FFDBB4')
const Light = makeColor('Light', '#EDB98A')
const Brown = makeColor('Brown', '#D08B5B')
const DarkBrown = makeColor('DarkBrown', '#AE5D29')
const Black = makeColor('Black', '#614335')

export default class Skin extends React.Component<Props> {
  render () {
    return (
      <Selector option={SkinOption} defaultOption={Light}>
        <Tanned maskID={this.props.maskID} />
        <Yellow maskID={this.props.maskID} />
        <Pale maskID={this.props.maskID} />
        <Light maskID={this.props.maskID} />
        <Brown maskID={this.props.maskID} />
        <DarkBrown maskID={this.props.maskID} />
        <Black maskID={this.props.maskID} />
      </Selector>
    )
  }
}
