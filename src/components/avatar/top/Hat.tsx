import * as React from 'react'
import { uniqueId } from 'lodash'

import FacialHair from './facialHair'

export default class Hat extends React.Component {
  static optionValue = 'Hat'

  private filter1 = uniqueId('react-filter-')
  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')
  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')

  render () {
    const { filter1, mask1, mask2, path1, path2 } = this
    return (
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id={path2} x='0' y='0' width='264' height='280' />
          <path
            d='M156,180.610951 C173.530782,172.282984 186.048193,155.114792 187.791419,134.867187 C193.569129,134.002364 198,129.018625 198,123 L198,110 C198,104.054007 193.675427,99.1180731 188,98.1659169 L188,92 C188,84.0546578 186.345324,76.495786 183.361772,69.6491845 C173.434911,53 89.3126235,53.8033992 80.7098777,69.4854816 C77.6811789,76.3752214 76,83.9912805 76,92 L76,98.1659169 C70.3245733,99.1180731 66,104.054007 66,110 L66,123 C66,129.018625 70.4308707,134.002364 76.2085808,134.867187 C77.9518066,155.114792 90.4692178,172.282984 108,180.610951 L108,199 L104,199 L104,199 C64.235498,199 32,231.235498 32,271 L32,280 L232,280 L232,271 C232,231.235498 199.764502,199 160,199 L156,199 L156,180.610951 Z M0,5.68434189e-14 L264,5.68434189e-14 L264,280 L0,280 L0,5.68434189e-14 Z'
            id={path1}
          />
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
          <use xlinkHref={'#' + path2} />
        </mask>
        <g id='Mask' />
        <g id='Top/Accesories/Hat' mask={`url(#${mask1})`}>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hat'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(1.000000, 0.000000)'>
              <mask id={mask2} fill='white'>
                <use xlinkHref={'#' + path1} />
              </mask>
              <g id='Mask-Hair' />
              <path
                d='M123.182388,2 L141.817612,2 L141.817612,2 C160.609055,2 176.866947,15.0804442 180.890118,33.4361631 L190,75 L75,75 L84.1098821,33.4361631 L84.1098821,33.4361631 C88.1330533,15.0804442 104.390945,2 123.182388,2 Z'
                fill='#1F333C'
                mask={`url(#${mask2})`}
              />
              <ellipse
                id='Hipster'
                fill='#1F333C'
                mask={`url(#${mask2})`}
                cx='132'
                cy='87.5'
                rx='122'
                ry='57.5'
              />
              <ellipse
                id='Very'
                fill='#15232A'
                mask={`url(#${mask2})`}
                cx='132'
                cy='82'
                rx='62'
                ry='25'
              />
            </g>
            <FacialHair />
            {this.props.children}
          </g>
        </g>
      </g>
    )
  }
}
