import * as React from 'react'

import Eyepatch from './Eyepatch'
import Hat from './Hat'
import Hijab from './Hijab'
import LongHairBigHair from './LongHairBigHair'
import LongHairMiaWallace from './LongHairMiaWallace'
import LongHairNotTooLong from './LongHairNotTooLong'
import LongHairShavedSides from './LongHairShavedSides'
import LongHairStraight from './LongHairStraight'
import Turban from './Turban'
import { Selector, TopOption } from '../../options'

export default class Top extends React.Component {
  render () {
    const { children } = this.props
    return (
      <Selector defaultOption={LongHairStraight} option={TopOption}>
        <Eyepatch>{children}</Eyepatch>
        <LongHairMiaWallace>{children}</LongHairMiaWallace>
        <LongHairStraight>{children}</LongHairStraight>
        <LongHairBigHair>{children}</LongHairBigHair>
        <LongHairNotTooLong>{children}</LongHairNotTooLong>
        <LongHairShavedSides>{children}</LongHairShavedSides>
        <Hat>{children}</Hat>
        <Hijab>{children}</Hijab>
        <Turban>{children}</Turban>
      </Selector>
    )
  }
}
