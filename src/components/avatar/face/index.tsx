import * as React from 'react'

import Eyebrow, { Type as EyebrowType } from './eyebrow'
import Eyes, { Type as EyeType } from './eyes'
import Mouth, { Type as MouthType } from './mouth'
import { default as DefaultNose } from './nose/Default'

export { Type as EyebrowType } from './eyebrow'
export { Type as EyeType } from './eyes'
export { Type as MouthType } from './mouth'

export interface Props {
  eyeType: EyeType
  eyebrowType: EyebrowType
  mouthType: MouthType
}

export default class Face extends React.Component<Props> {
  render () {
    return (
      <g id='Face' transform='translate(76.000000, 82.000000)' fill='#000000'>
        <Mouth type={this.props.mouthType} />
        <DefaultNose />
        <Eyes type={this.props.eyeType} />
        <Eyebrow type={this.props.eyebrowType} />
      </g>
    )
  }
}
