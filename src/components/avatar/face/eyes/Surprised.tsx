import * as React from 'react'

export default class Surprised extends React.Component {
  static optionValue = 'Surprised'

  render () {
    return (
      <g id='Eyes/Surprised-😳' transform='translate(0.000000, 8.000000)'>
        <circle id='The-White-Stuff' fill='#FFFFFF' cx='30' cy='22' r='14' />
        <circle id='Eye-Ball' fill='#FFFFFF' cx='82' cy='22' r='14' />
        <circle
          id='Eye'
          fillOpacity='0.699999988'
          fill='#000000'
          cx='30'
          cy='22'
          r='6'
        />
        <circle
          id='Eye'
          fillOpacity='0.699999988'
          fill='#000000'
          cx='82'
          cy='22'
          r='6'
        />
      </g>
    )
  }
}
