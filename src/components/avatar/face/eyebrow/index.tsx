import * as React from 'react'

import Angry from './Angry'
import AngryNatural from './AngryNatural'
import Default from './Default'
import DefaultNatural from './DefaultNatural'
import FlatNatural from './FlatNatural'
import RaisedExcited from './RaisedExcited'
import RaisedExcitedNatural from './RaisedExcitedNatural'
import SadConcerned from './SadConcerned'
import SadConcernedNatural from './SadConcernedNatural'
import UnibrowNatural from './UnibrowNatural'
import UpDown from './UpDown'
import UpDownNatural from './UpDownNatural'

export enum Type {
  Angry = 'Angry',
  AngryNatural = 'AngryNatural',
  Default = 'Default',
  DefaultNatural = 'DefaultNatural',
  FlatNatural = 'FlatNatural',
  RaisedExcited = 'RaisedExcited',
  RaisedExcitedNatural = 'RaisedExcitedNatural',
  SadConcerned = 'SadConcerned',
  SadConcernedNatural = 'SadConcernedNatural',
  UnibrowNatural = 'UnibrowNatural',
  UpDown = 'UpDown',
  UpDownNatural = 'UpDownNatural'
}

export const AllTypes = [
  Type.Angry,
  Type.AngryNatural,
  Type.Default,
  Type.DefaultNatural,
  Type.FlatNatural,
  Type.RaisedExcited,
  Type.RaisedExcitedNatural,
  Type.SadConcerned,
  Type.SadConcernedNatural,
  Type.UnibrowNatural,
  Type.UpDown,
  Type.UpDownNatural
]

export interface Props {
  type: Type
}

export default class Eyebrow extends React.Component<Props> {
  render () {
    switch (this.props.type) {
      case Type.Angry:
        return <Angry />
      case Type.AngryNatural:
        return <AngryNatural />
      case Type.Default:
        return <Default />
      case Type.DefaultNatural:
        return <DefaultNatural />
      case Type.FlatNatural:
        return <FlatNatural />
      case Type.RaisedExcited:
        return <RaisedExcited />
      case Type.RaisedExcitedNatural:
        return <RaisedExcitedNatural />
      case Type.SadConcerned:
        return <SadConcerned />
      case Type.SadConcernedNatural:
        return <SadConcernedNatural />
      case Type.UnibrowNatural:
        return <UnibrowNatural />
      case Type.UpDown:
        return <UpDown />
      case Type.UpDownNatural:
        return <UpDownNatural />
    }
    return null
  }
}
