import * as React from 'react'

import Eyepatch from './Eyepatch'
import Hat from './Hat'
import LongHairBigHair from './LongHairBigHair'
import LongHairBun from './LongHairBun'
import LongHairCurly from './LongHairCurly'
import LongHairFrida from './LongHairFrida'
import LongHairFro from './LongHairFro'
import LongHairMiaWallace from './LongHairMiaWallace'
import LongHairStraight from './LongHairStraight'
import Turban from './Turban'

export enum Type {
  LongHairMiaWallace = 'LongHairMiaWallace',
  LongHairStraight = 'LongHairStraight',
  Hat = 'Hat',
  Eyepatch = 'Eyepatch',
  Turban = 'Turban',
  LongHairBigHair = 'LongHairBigHair',
  LongHairBun = 'LongHairBun',
  LongHairCurly = 'LongHairCurly',
  LongHairFrida = 'LongHairFrida',
  LongHairFro = 'LongHairFro'
}

export const AllTypes = [
  Type.LongHairMiaWallace,
  Type.LongHairStraight,
  Type.Hat,
  Type.Eyepatch,
  Type.Turban,
  Type.LongHairBigHair,
  Type.LongHairBun,
  Type.LongHairCurly,
  Type.LongHairFrida,
  Type.LongHairFro
]

// TODO:
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

// TODO:
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

export default class Top extends React.Component<Props> {
  render () {
    switch (this.props.type) {
      case Type.LongHairMiaWallace:
        return <LongHairMiaWallace>{this.props.children}</LongHairMiaWallace>
      case Type.LongHairStraight:
        return <LongHairStraight>{this.props.children}</LongHairStraight>
      case Type.Hat:
        return <Hat>{this.props.children}</Hat>
      case Type.Eyepatch:
        return <Eyepatch>{this.props.children}</Eyepatch>
      case Type.Turban:
        return <Turban>{this.props.children}</Turban>
      case Type.LongHairBigHair:
        return <LongHairBigHair>{this.props.children}</LongHairBigHair>
      case Type.LongHairBun:
        return <LongHairBun>{this.props.children}</LongHairBun>
      case Type.LongHairCurly:
        return <LongHairCurly>{this.props.children}</LongHairCurly>
      case Type.LongHairFrida:
        return <LongHairFrida>{this.props.children}</LongHairFrida>
      case Type.LongHairFro:
        return <LongHairFro>{this.props.children}</LongHairFro>
    }
    return null
  }
}
