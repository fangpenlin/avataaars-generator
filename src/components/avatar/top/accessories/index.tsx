import * as React from 'react'

import Kurt from './Kurt'
import Prescription01 from './Prescription01'
import Prescription02 from './Prescription02'

export enum Type {
  Kurt = 'Kurt',
  Prescription01 = 'Prescription01',
  Prescription02 = 'Prescription02'
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
    }
    return null
  }
}
