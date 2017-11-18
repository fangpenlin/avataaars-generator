import * as React from 'react'

import Kurt from './Kurt'
import Prescription01 from './Prescription01'
import Prescription02 from './Prescription02'
import Round from './Round'
import Sunglasses from './Sunglasses'
import Wayfarers from './Wayfarers'

export enum Type {
  Kurt = 'Kurt',
  Prescription01 = 'Prescription01',
  Prescription02 = 'Prescription02',
  Round = 'Round',
  Sunglasses = 'Sunglasses',
  Wayfarers = 'Wayfarers'
}

export const AllTypes = [Type.Kurt, Type.Prescription01]

export interface Props {
  type: Type
}

export default class Accessories extends React.Component<Props> {
  render () {
    switch (this.props.type) {
      case Type.Kurt:
        return <Kurt />
      case Type.Prescription01:
        return <Prescription01 />
      case Type.Prescription02:
        return <Prescription02 />
      case Type.Round:
        return <Round />
      case Type.Sunglasses:
        return <Sunglasses />
      case Type.Wayfarers:
        return <Wayfarers />
    }
    return null
  }
}
