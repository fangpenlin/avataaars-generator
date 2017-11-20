import * as React from 'react'
import { uniqueId } from 'lodash'

export default class ScreamOpen extends React.Component {
  static optionValue = 'ScreamOpen'

  private path1 = uniqueId('react-path-')
  private mask1 = uniqueId('react-mask-')

  render () {
    const { path1, mask1 } = this
    return (
      <g id='Mouth/Scream-Open' transform='translate(2.000000, 52.000000)'>
        <defs>
          <path
            d='M34.0082051,15.1361102 C35.1280248,29.123916 38.2345159,40.9925405 53.9961505,40.9999965 C69.757785,41.0074525 72.9169073,29.0566179 73.9942614,15.0063928 C74.0809675,13.8756222 73.1738581,12.9999965 72.0369872,12.9999965 C65.3505138,12.9999965 62.6703194,14.9936002 53.9894323,14.9999965 C45.3085452,15.0063928 40.7567994,12.9999965 36.0924943,12.9999965 C34.9490269,12.9999965 33.8961688,13.7366502 34.0082051,15.1361102 Z'
            id={path1}
          />
        </defs>
        <mask id={mask1} fill='white'>
          <use
            xlinkHref={'#' + path1}
            transform='translate(54.000000, 26.999998) scale(1, -1) translate(-54.000000, -26.999998) '
          />
        </mask>
        <use
          id='Mouth'
          fillOpacity='0.699999988'
          fill='#000000'
          fillRule='evenodd'
          transform='translate(54.000000, 26.999998) scale(1, -1) translate(-54.000000, -26.999998) '
          xlinkHref={'#' + path1}
        />
        <rect
          id='Teeth'
          fill='#FFFFFF'
          fillRule='evenodd'
          mask={`url(#${mask1})`}
          x='39'
          y='2'
          width='31'
          height='16'
          rx='5'
        />
        <g
          id='Tongue'
          strokeWidth='1'
          fillRule='evenodd'
          mask={`url(#${mask1})`}
          fill='#FF4F6D'>
          <g transform='translate(38.000000, 32.000000)' id='Say-ahhhh'>
            <circle cx='11' cy='11' r='11' />
            <circle cx='21' cy='11' r='11' />
          </g>
        </g>
      </g>
    )
  }
}
