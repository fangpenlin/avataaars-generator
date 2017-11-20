import * as React from 'react'

import Eyepatch from './Eyepatch'
import Hat from './Hat'
import Hijab from './Hijab'
import LongHairBigHair from './LongHairBigHair'
import LongHairBun from './LongHairBun'
import LongHairCurly from './LongHairCurly'
import LongHairFrida from './LongHairFrida'
import LongHairFro from './LongHairFro'
import LongHairFroBand from './LongHairFroBand'
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
        <Hijab>{children}</Hijab>
        <Turban>{children}</Turban>
        <LongHairBigHair>{children}</LongHairBigHair>
        <LongHairBun>{children}</LongHairBun>
        <LongHairCurly>{children}</LongHairCurly>
        <LongHairFrida>{children}</LongHairFrida>
        <LongHairFro>{children}</LongHairFro>
        <LongHairFroBand>{children}</LongHairFroBand>
        <LongHairMiaWallace>{children}</LongHairMiaWallace>
        <LongHairStraight>{children}</LongHairStraight>
        <LongHairNotTooLong>{children}</LongHairNotTooLong>
        <LongHairShavedSides>{children}</LongHairShavedSides>
        <Hat>{children}</Hat>
      </Selector>
    )
  }
}
