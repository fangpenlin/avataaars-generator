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
import { EyebrowOption, Selector } from '../../../options'

export default class Eyebrow extends React.Component {
  render () {
    return (
      <Selector defaultOption={Default} option={EyebrowOption}>
        <Angry />
        <AngryNatural />
        <Default />
        <DefaultNatural />
        <FlatNatural />
        <RaisedExcited />
        <RaisedExcitedNatural />
        <SadConcerned />
        <SadConcernedNatural />
        <UnibrowNatural />
        <UpDown />
        <UpDownNatural />
      </Selector>
    )
  }
}
