import * as React from 'react'

import BeardLight from './BeardLight'
import BeardMagestic from './BeardMagestic'
import BeardMedium from './BeardMedium'
import Blank from './Blank'
import MoustacheFancy from './MoustacheFancy'
import MoustacheMagnum from './MoustacheMagnum'
import { FacialHairOption, Selector } from '../../../options'

export default class FacialHair extends React.Component {
  render () {
    return (
      <Selector option={FacialHairOption} defaultOption={BeardMedium}>
        <Blank />
        <BeardMedium />
        <BeardLight />
        <BeardMagestic />
        <MoustacheFancy />
        <MoustacheMagnum />
      </Selector>
    )
  }
}
