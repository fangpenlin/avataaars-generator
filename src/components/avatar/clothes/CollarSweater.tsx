import * as React from 'react'
import { uniqueId } from 'lodash'

import Colors from './Colors'

export default class CollarSweater extends React.Component {
  static optionValue = 'CollarSweater'

  private path1 = uniqueId('react-path-')
  private mask1 = uniqueId('react-mask-')

  render () {
    const { path1, mask1 } = this
    return (
      <g
        id='Clothing/Collar-+-Sweater'
        transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
            d='M105.192402,29.0517235 L104,29.0517235 L104,29.0517235 C64.235498,29.0517235 32,61.2872215 32,101.051724 L32,110 L232,110 L232,101.051724 C232,61.2872215 199.764502,29.0517235 160,29.0517235 L160,29.0517235 L158.807598,29.0517235 C158.934638,30.0353144 159,31.0364513 159,32.0517235 C159,45.8588423 146.911688,57.0517235 132,57.0517235 C117.088312,57.0517235 105,45.8588423 105,32.0517235 C105,31.0364513 105.065362,30.0353144 105.192402,29.0517235 Z'
            id={path1}
          />
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <use
          id='Clothes'
          fill='#E6E6E6'
          fillRule='evenodd'
          xlinkHref={'#' + path1}
        />
        <Colors maskID={mask1} />
        <path
          d='M156,22.2794906 C162.181647,26.8351858 166,33.1057265 166,40.027915 C166,47.2334941 161.862605,53.7329769 155.228997,58.3271669 L149.57933,53.8764929 L145,54.207887 L146,51.0567821 L145.922229,50.995516 C152.022491,47.8530505 156,42.7003578 156,36.8768102 L156,22.2794906 Z M108,21.5714994 C101.232748,26.1740081 97,32.7397769 97,40.027915 C97,47.4261549 101.361602,54.080035 108.308428,58.6915723 L114.42067,53.8764929 L119,54.207887 L118,51.0567821 L118.077771,50.995516 C111.977509,47.8530505 108,42.7003578 108,36.8768102 L108,21.5714994 Z'
          id='Collar'
          fill='#F2F2F2'
          fillRule='evenodd'
        />
      </g>
    )
  }
}
