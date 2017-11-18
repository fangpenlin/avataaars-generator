import * as React from 'react'

import Concerned from './Concerned'
import Default from './Default'
import Disbelief from './Disbelief'
import Eating from './Eating'
import Grimace from './Grimace'
import Sad from './Sad'
import ScreamOpen from './ScreamOpen'
import Serious from './Serious'
import Smile from './Smile'
import Tongue from './Tongue'
import Twinkle from './Twinkle'
import Vomit from './Vomit'

export enum Type {
  Concerned = 'Concerned',
  Default = 'Default',
  Disbelief = 'Disbelief',
  Eating = 'Eating',
  Grimace = 'Grimace',
  Sad = 'Sad',
  ScreamOpen = 'ScreamOpen',
  Serious = 'Serious',
  Smile = 'Smile',
  Tongue = 'Tongue',
  Twinkle = 'Twinkle',
  Vomit = 'Vomit'
}

export const AllTypes = [
  Type.Concerned,
  Type.Default,
  Type.Disbelief,
  Type.Eating,
  Type.Grimace,
  Type.Sad,
  Type.ScreamOpen,
  Type.Serious,
  Type.Smile,
  Type.Tongue,
  Type.Twinkle,
  Type.Vomit
]

export interface Props {
  type: Type
}

export default class Mouth extends React.Component<Props> {
  render () {
    switch (this.props.type) {
      case Type.Concerned:
        return <Concerned />
      case Type.Default:
        return <Default />
      case Type.Disbelief:
        return <Disbelief />
      case Type.Eating:
        return <Eating />
      case Type.Grimace:
        return <Grimace />
      case Type.Sad:
        return <Sad />
      case Type.ScreamOpen:
        return <ScreamOpen />
      case Type.Serious:
        return <Serious />
      case Type.Smile:
        return <Smile />
      case Type.Tongue:
        return <Tongue />
      case Type.Twinkle:
        return <Twinkle />
      case Type.Vomit:
        return <Vomit />
    }
    return null
  }
}
