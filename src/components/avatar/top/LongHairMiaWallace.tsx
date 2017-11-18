import * as React from 'react'
import { uniqueId } from 'lodash'

export default class LongHairMiaWallace extends React.Component {
  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')
  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')

  render () {
    const { path1, path2, mask1, mask2 } = this
    return (
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id={path1} x='0' y='0' width='264' height='280' />
          <path
            d='M149,74 L149,111 C149,133.339168 135.919579,152.623239 117,161.610951 L117,170.317435 C135.145605,171.815797 152.721153,174.335027 163.000169,177 C172.952646,163.439362 185.884594,150.800081 186.000169,126 C186.085192,107.014914 153.849346,24.0049075 143.000169,15 C134.631471,8.05415906 117.30504,1.44935656 93.0001685,1 C68.6952966,0.550643437 51.3686974,8.05415906 43,15 C32.150823,24.0049075 -0.0850232975,107.014914 3.2684974e-13,126 C0.115574613,150.800081 13.047523,163.439362 23,177 C33.2789946,174.335033 50.8544902,171.815807 69,170.317444 L69,161.610951 C50.0804213,152.623239 37,133.339168 37,111 L37,74 L65.3735517,74 L69.2529753,50.820435 L72.058097,74 L149,74 Z'
            id={path2}
          />
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Mia-Wallace' mask={`url(#${mask1})`}>
          <g transform='translate(-1.000000, 0.000000)'>
            <path
              d='M69.0330562,80.212888 C81.9708809,47.1292208 95.6458945,30.5873873 110.058097,30.5873873 C110.596882,30.5873873 139.311316,30.3494141 158.112657,30.226792 C178.767149,39.5853581 193,59.3036503 193,82.114622 L193,97 L110.058097,97 L107.252975,73.820435 L103.373552,97 L69,97 L69,82.114622 C69,81.478246 69.0110772,80.844277 69.0330621,80.2128728 L69.0330562,80.212888 Z'
              id='Shadow'
              fillOpacity='0.16'
              fill='#000000'
              fillRule='evenodd'
            />
            <g
              id='Hair'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(40.000000, 19.000000)'>
              <mask id={mask2} fill='white'>
                <use xlinkHref={'#' + path2} />
              </mask>
              <use id='Combined-Shape' fill='#E6E6E6' xlinkHref={'#' + path2} />
              <g
                id='Color/Hair/Brown-Dark'
                mask={`url(#${mask2})`}
                fill='#4A312C'>
                <g transform='translate(-40.000000, -19.000000)' id='Color'>
                  <rect x='0' y='0' width='266' height='280' />
                </g>
              </g>
            </g>
            {this.props.children}
          </g>
        </g>
      </g>
    )
  }
}
