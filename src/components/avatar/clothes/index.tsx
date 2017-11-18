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
  Blue01 = 'Blue01',
  Blue02 = 'Blue02',
  Blue03 = 'Blue03',
  Gray01 = 'Gray01',
  Gray02 = 'Gray02',
  Heather = 'Heather',
  PastelBlue = 'PastelBlue',
  PastelGreen = 'PastelGreen',
  PastelOrange = 'PastelOrange',
  PastelRed = 'PastelRed',
  PastelYellow = 'PastelYellow',
  Pink = 'Pink',
  Red = 'Red',
  White = 'White'
}

export const AllColors = [
  Color.Black,
  Color.Blue01,
  Color.Blue02,
  Color.Blue03,
  Color.Gray01,
  Color.Gray02,
  Color.Heather,
  Color.PastelBlue,
  Color.PastelGreen,
  Color.PastelOrange,
  Color.PastelRed,
  Color.PastelYellow,
  Color.Pink,
  Color.Red,
  Color.White
]

export const ColorValues: { [index: string]: string } = {
  [Color.Black]: '#262E33',
  [Color.Blue01]: '#65C9FF',
  [Color.Blue02]: '#5199E4',
  [Color.Blue03]: '#25557C',
  [Color.Gray01]: '#E6E6E6',
  [Color.Gray02]: '#929598',
  [Color.Heather]: '#3C4F5C',
  [Color.PastelBlue]: '#B1E2FF',
  [Color.PastelGreen]: '#A7FFC4',
  [Color.PastelOrange]: '#FFDEB5',
  [Color.PastelRed]: '#FFAFB9',
  [Color.PastelYellow]: '#FFFFB1',
  [Color.Pink]: '#FF488E',
  [Color.Red]: '#FF5C5C',
  [Color.White]: '#FFFFFF'
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
