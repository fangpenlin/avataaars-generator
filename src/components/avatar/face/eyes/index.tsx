import * as React from 'react'

import Close from './Close'
import Cry from './Cry'
import Default from './Default'
import Dizzy from './Dizzy'
import EyeRoll from './EyeRoll'
import Happy from './Happy'
import Hearts from './Hearts'
import Side from './Side'
import Squint from './Squint'
import Surprised from './Surprised'
import Wink from './Wink'
import WinkWacky from './WinkWacky'
import { EyesOption, Selector } from '../../../options'

export default class Eyes extends React.Component {
  render () {
    return (
      <Selector defaultOption={Default} option={EyesOption}>
        <Close />
        <Cry />
        <Default />
        <Dizzy />
        <EyeRoll />
        <Happy />
        <Hearts />
        <Side />
        <Squint />
        <Surprised />
        <Wink />
        <WinkWacky />
      </Selector>
    )
  }
}
