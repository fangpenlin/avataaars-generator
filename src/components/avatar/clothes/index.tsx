import * as React from 'react'

import BlazerShirt from './BlazerShirt'
import BlazerSweater from './BlazerSweater'
import CollarSweater from './CollarSweater'
import GraphicShirt from './GraphicShirt'
import Hoodie from './Hoodie'
import Overall from './Overall'
import ShirtCrewNeck from './ShirtCrewNeck'
import ShirtScoopNeck from './ShirtScoopNeck'
import ShirtVNeck from './ShirtVNeck'

export enum Type {
  BlazerShirt = 'BlazerShirt',
  BlazerSweater = 'BlazerSweater',
  CollarSweater = 'CollarSweater',
  GraphicShirt = 'GraphicShirt',
  Hoodie = 'Hoodie',
  Overall = 'Overall',
  ShirtCrewNeck = 'ShirtCrewNeck',
  ShirtScoopNeck = 'ShirtScoopNeck',
  ShirtVNeck = 'ShirtVNeck'
}

export const AllTypes = [
  Type.BlazerShirt,
  Type.BlazerSweater,
  Type.CollarSweater,
  Type.GraphicShirt,
  Type.Hoodie,
  Type.Overall,
  Type.ShirtCrewNeck,
  Type.ShirtScoopNeck,
  Type.ShirtVNeck
]

export enum Color {
  Black = 'Black',
  Blue01 = 'Blue01'
}

export const AllColors = [Color.Black, Color.Blue01]

export const ColorValues: { [index: string]: string } = {
  [Color.Black]: '#262E33',
  [Color.Blue01]: '#65C9FF'
}

export interface Props {
  type: Type
  color: string
}

export default class Clothes extends React.Component<Props> {
  render () {
    switch (this.props.type) {
      case Type.BlazerShirt:
        return <BlazerShirt />
      case Type.BlazerSweater:
        return <BlazerSweater />
      case Type.CollarSweater:
        return <CollarSweater color={this.props.color} />
      case Type.GraphicShirt:
        return <GraphicShirt color={this.props.color} />
      case Type.Hoodie:
        return <Hoodie color={this.props.color} />
      case Type.Overall:
        return <Overall color={this.props.color} />
      case Type.ShirtCrewNeck:
        return <ShirtCrewNeck color={this.props.color} />
      case Type.ShirtScoopNeck:
        return <ShirtScoopNeck color={this.props.color} />
      case Type.ShirtVNeck:
        return <ShirtVNeck color={this.props.color} />
    }
    return null
  }
}
