import * as React from 'react'

import BlazerShirt from './BlazerShirt'
import BlazerSweater from './BlazerSweater'
import CollarSweater from './CollarSweater'
import GraphicShirt from './GraphicShirt'
import Hoodie from './Hoodie'

export enum Type {
  BlazerShirt = 'BlazerShirt',
  BlazerSweater = 'BlazerSweater',
  CollarSweater = 'CollarSweater',
  GraphicShirt = 'GraphicShirt',
  Hoodie = 'Hoodie'
}

export const AllTypes = [
  Type.BlazerShirt,
  Type.BlazerSweater,
  Type.CollarSweater,
  Type.GraphicShirt,
  Type.Hoodie
]

export interface Props {
  type: Type
}

export default class Clothes extends React.Component<Props> {
  render () {
    switch (this.props.type) {
      case Type.BlazerShirt:
        return <BlazerShirt />
      case Type.BlazerSweater:
        return <BlazerSweater />
      case Type.CollarSweater:
        return <CollarSweater />
      case Type.GraphicShirt:
        return <GraphicShirt />
      case Type.Hoodie:
        return <Hoodie />
    }
    return null
  }
}
