import * as React from 'react'
import { uniqueId } from 'lodash'

import FacialHair from './facialHair'

export default class NoHair extends React.Component {
  static optionValue = 'NoHair'

  private filter1 = uniqueId('react-filter-')
  private mask1 = uniqueId('react-mask-')
  private path1 = uniqueId('react-path-')

  render () {
    const { filter1, mask1, path1 } = this
    return (
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id={path1} x='0' y='0' width='264' height='280' />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id={filter1}>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <g id='Mask' />
        <g id='Top/No-Hair' mask={`url(#${mask1})`}>
          <g transform='translate(-1.000000, 0.000000)'>
            <FacialHair />
            {this.props.children}
          </g>
        </g>
      </g>
    )
  }
}
