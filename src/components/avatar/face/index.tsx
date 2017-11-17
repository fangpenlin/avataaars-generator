import * as React from 'react'

import Eyebrow, { Type as EyebrowType } from './eyebrow'
import Eyes, { Type as EyeType } from './eyes'
import { default as DefaultMouth } from './mouth/Default'
import { default as DefaultNose } from './nose/Default'

export { Type as EyebrowType } from './eyebrow'
export { Type as EyeType } from './eyes'

export interface Props {
  eyeType: EyeType
  eyebrowType: EyebrowType
}

export default class Face extends React.Component<Props> {
  render () {
    return (
      <g id='Face' transform='translate(76.000000, 82.000000)' fill='#000000'>
        <DefaultMouth />
        <DefaultNose />
        <Eyes type={this.props.eyeType} />
        <Eyebrow type={this.props.eyebrowType} />
      </g>
    )
  }
}
