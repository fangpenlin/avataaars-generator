import * as React from 'react'
import { uniqueId } from 'lodash'

export default class LongHairStraight extends React.Component {
  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')
  private mask1 = uniqueId('react-mask-')
  private filter1 = uniqueId('react-filter-')

  render () {
    const { path1, path2, mask1, filter1 } = this
    return (
      <g id='Top'>
        <defs>
          <rect id={path1} x='0' y='0' width='264' height='280' />
          <path
            d='M207,102.148232 C188.641593,101.85262 168.00524,88.2193123 155.110431,65.8848473 C152.175256,60.8009742 149.831069,55.5951441 148.066143,50.3970356 C139.431395,60.9409152 126.744547,71.6023901 111.341516,80.4953343 C101.777598,86.0170651 92.1467898,90.2910056 83,93.2659587 L83,248 L83,248 C83,262.105888 72.5691766,273.775526 59,275.716445 L59,92 L59,92 C59,51.1309285 92.1309285,18 133,18 L133,18 L133,18 C173.869071,18 207,51.1309285 207,92 L207,102.148232 Z'
            id={path2}
          />
          <filter
            x='-2.0%'
            y='-1.2%'
            width='104.1%'
            height='104.7%'
            filterUnits='objectBoundingBox'
            id={filter1}>
            <feOffset
              dx='0'
              dy='6'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0'
              type='matrix'
              in='shadowOffsetOuter1'
            />
          </filter>
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Straight' mask={`url(#${mask1})`}>
          <g transform='translate(-1.000000, 0.000000)'>
            <path
              d='M157,180.610951 L157,199 L161,199 L161,199 C178.490913,199 194.525121,205.236892 207,215.608051 L207,92 C207,51.1309285 173.869071,18 133,18 L133,18 L133,18 C92.1309285,18 59,51.1309285 59,92 L59,92 L59,215.608051 C71.4748789,205.236892 87.5090874,199 105,199 L105,199 L109,199 L109,180.610951 C91.4692178,172.282984 78.9518066,155.114792 77.2085808,134.867187 C71.4308707,134.002364 67,129.018625 67,123 L67,110 C67,104.054007 71.3245733,99.1180731 77,98.1659169 L77,92 L77,92 C77,61.072054 102.072054,36 133,36 C163.927946,36 189,61.072054 189,92 L189,98.1659169 C194.675427,99.1180731 199,104.054007 199,110 L199,123 C199,129.018625 194.569129,134.002364 188.791419,134.867187 C187.048193,155.114792 174.530782,172.282984 157,180.610951 Z'
              id='Hair'
              fill='#944F23'
              fill-rule='evenodd'
            />
            <g id='Top' fill='none'>
              <use
                fill='black'
                fill-opacity='1'
                filter={`url(#${filter1})`}
                xlinkHref={'#' + path2}
              />
              <use fill='#AE5D29' fill-rule='evenodd' xlinkHref={'#' + path2} />
            </g>
            <g
              id='Top/_Resources/Blank'
              fill='none'
              transform='translate(62.000000, 85.000000)'
            />
          </g>
        </g>
      </g>
    )
  }
}
