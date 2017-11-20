import * as React from 'react'

import BeardMedium from './BeardMedium'
import Blank from './Blank'
import { FacialHairOption, Selector } from '../../../options'

export default class FacialHair extends React.Component {
  render () {
    return (
      <Selector option={FacialHairOption} defaultOption={BeardMedium}>
        <Blank />
        <BeardMedium />
      </Selector>
    )
  }
}
