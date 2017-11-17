import * as React from 'react'

import Eyes, { Type as EyeType } from './eyes'
import { default as DefaultEyebrow } from './eyebrow/Default'
import { default as DefaultMouth } from './mouth/Default'
import { default as DefaultNose } from './nose/Default'

export default class Face extends React.Component {
  render () {
    return (
      <g id='Face' transform='translate(76.000000, 82.000000)' fill='#000000'>
        <DefaultMouth />
        <DefaultNose />
        <Eyes type={EyeType.Default} />
        <DefaultEyebrow />
      </g>
    )
  }
}
