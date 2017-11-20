import * as React from 'react'

export default class Cry extends React.Component {
  static optionValue = 'Cry'

  render () {
    return (
      <g id='Eyes/Cry-😢' transform='translate(0.000000, 8.000000)'>
        <circle
          id='Eye'
          fillOpacity='0.599999964'
          fill='#000000'
          fillRule='evenodd'
          cx='30'
          cy='22'
          r='6'
        />
        <path
          d='M25,27 C25,27 19,34.2706667 19,38.2706667 C19,41.5846667 21.686,44.2706667 25,44.2706667 C28.314,44.2706667 31,41.5846667 31,38.2706667 C31,34.2706667 25,27 25,27 Z'
          id='Drop'
          fill='#92D9FF'
          fillRule='nonzero'
        />
        <circle
          id='Eye'
          fillOpacity='0.599999964'
          fill='#000000'
          fillRule='evenodd'
          cx='82'
          cy='22'
          r='6'
        />
      </g>
    )
  }
}
