import * as React from 'react'
import { uniqueId } from 'lodash'

export default class LongHairNotTooLong extends React.Component {
  private filter1 = uniqueId('react-filter-')
  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')
  private mask3 = uniqueId('react-mask-')
  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')
  private path3 = uniqueId('react-path-')
  private path4 = uniqueId('react-path-')

  render () {
    const { filter1, mask1, mask2, mask3, path1, path2, path3, path4 } = this
    return (
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id={path3} x='0' y='0' width='264' height='280' />
          <path
            d='M156,180.610951 C173.530782,172.282984 186.048193,155.114792 187.791419,134.867187 C193.569129,134.002364 198,129.018625 198,123 L198,110 C198,104.054007 193.675427,99.1180731 188,98.1659169 L188,92 C188,61.072054 162.927946,36 132,36 C101.072054,36 76,61.072054 76,92 L76,92 L76,98.1659169 C70.3245733,99.1180731 66,104.054007 66,110 L66,123 C66,129.018625 70.4308707,134.002364 76.2085808,134.867187 C77.9518066,155.114792 90.4692178,172.282984 108,180.610951 L108,199 L104,199 L104,199 C64.235498,199 32,231.235498 32,271 L32,280 L232,280 L232,271 C232,231.235498 199.764502,199 160,199 L156,199 L156,180.610951 Z M0,0 L264,0 L264,280 L0,280 L0,0 Z'
            id={path4}
          />
          <path
            d='M74,0 L74,0 L74,0 C114.869071,-7.50752664e-15 148,33.1309285 148,74 L148,96 L148,96 C148,136.869071 114.869071,170 74,170 L74,170 L74,170 C33.1309285,170 3.34267272e-14,136.869071 2.84217094e-14,96 L0,74 L0,74 C-5.00501776e-15,33.1309285 33.1309285,7.50752664e-15 74,0 Z'
            id={path1}
          />
          <filter
            x='-1.3%'
            y='-2.3%'
            width='102.6%'
            height='109.0%'
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
          <path
            d='M92.2635847,38.8960843 C92.64142,39.8180234 93.0349418,40.738913 93.4442516,41.6582378 C109.066559,76.7465154 141.772345,96.2681769 166.494669,85.2610891 C191.216993,74.2540013 198.594014,36.8863244 182.971706,1.79804683 C167.349399,-33.2902308 134.643613,-52.8118922 109.921289,-41.8048044 C97.1951706,-36.1387716 89.0652133,-23.4877066 86.3026356,-7.75815404 C70.9240959,-16.6420201 40.6780749,-12.1735422 11.4950079,4.67530945 C-23.8389367,25.0753719 -44.2343865,55.8994892 -34.0595041,73.5229024 C-23.8846217,91.1463156 13.0075718,88.8953967 48.3415164,68.4953343 C60.4732686,61.4910638 70.8439791,53.2579416 78.8209384,44.752196 C75.3941075,52.6604321 71.2445133,59.5880409 66.3721558,65.5350224 C79.0473359,60.0120855 87.6778122,51.1324394 92.2635847,38.8960843 Z'
            id={path2}
          />
        </defs>
        <mask id={mask2} fill='white'>
          <use xlinkHref={'#' + path3} />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Long-but-not-too-long' mask={`url(#${mask2})`}>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Behind'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(1.000000, 0.000000)'>
              <mask id={mask3} fill='white'>
                <use xlinkHref={'#' + path4} />
              </mask>
              <g id='Mask-Hair' />
              <path
                d='M132,18 L132,18 L132,18 C172.869071,18 206,51.1309285 206,92 L206,158 L206,158 C206,175.673112 191.673112,190 174,190 L66,190 L66,190 C61.581722,190 58,186.418278 58,182 L58,92 L58,92 C58,51.1309285 91.1309285,18 132,18 Z'
                id='Long-Hair'
                fill='#944F23'
                mask={`url(#${mask3})`}
              />
            </g>
            <g
              id='Top'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(59.000000, 18.000000)'>
              <mask id={mask1} fill='white'>
                <use xlinkHref={'#' + path1} />
              </mask>
              <g id='Mask' />
              <g id='Hair-Top' mask={`url(#${mask1})`}>
                <use
                  fill='black'
                  fillOpacity='1'
                  filter={`url(#${path2})`}
                  xlinkHref={'#' + path2}
                />
                <use
                  fill='#AE5D29'
                  fillRule='evenodd'
                  xlinkHref={'#' + path2}
                />
              </g>
            </g>
            <ellipse
              id='Little-bit-of-hair'
              fill='#AE5D29'
              fillRule='evenodd'
              cx='60'
              cy='90.5'
              rx='10'
              ry='12.5'
            />
            {this.props.children}
          </g>
        </g>
      </g>
    )
  }
}
