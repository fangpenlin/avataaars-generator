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
      case Type.Overall:
        return <Overall />
      case Type.ShirtCrewNeck:
        return <ShirtCrewNeck />
      case Type.ShirtScoopNeck:
        return <ShirtScoopNeck />
      case Type.ShirtVNeck:
        return <ShirtVNeck />
    }
    return null
  }
}
