import * as React from 'react'

import BlazerShirt from './BlazerShirt'
import BlazerSweater from './BlazerSweater'

export enum Type {
  BlazerShirt = 'BlazerShirt',
  BlazerSweater = 'BlazerSweater'
}

export const AllTypes = [Type.BlazerShirt, Type.BlazerSweater]

export interface Props {
  type: Type
}

export default class Clothes extends React.Component<Props> {
  render () {
    switch (this.props.type) {
      case Type.BlazerShirt:
        return <BlazerShirt />
      case Type.BlazerSweater:
        return <BlazerSweater />
    }
    return null
  }
}
