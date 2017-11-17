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

export enum Type {
  Close = 'Close',
  Cry = 'Cry',
  Default = 'Default',
  Dizzy = 'Dizzy',
  EyeRoll = 'EyeRoll',
  Happy = 'Happy',
  Hearts = 'Hearts',
  Side = 'Side',
  Squint = 'Squint',
  Surprised = 'Surprised',
  Wink = 'Wink',
  WinkWacky = 'WinkWacky'
}

export interface Props {
  type: Type
}

export default class Eyes extends React.Component<Props> {
  render () {
    switch (this.props.type) {
      case Type.Close:
        return <Close />
      case Type.Cry:
        return <Cry />
      case Type.Default:
        return <Default />
      case Type.Dizzy:
        return <Dizzy />
      case Type.EyeRoll:
        return <EyeRoll />
      case Type.Happy:
        return <Happy />
      case Type.Hearts:
        return <Hearts />
      case Type.Side:
        return <Side />
      case Type.Squint:
        return <Squint />
      case Type.Surprised:
        return <Surprised />
      case Type.Wink:
        return <Wink />
      case Type.WinkWacky:
        return <WinkWacky />
    }
    return null
  }
}
