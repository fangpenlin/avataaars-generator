import '../assets/App.css'

import * as React from 'react'

import AvatarForm from './AvatarForm'
import Avatar, { EyeType, EyebrowType } from './avatar'

export default class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <div style={{ textAlign: 'center' }}>
          <Avatar eyeType={EyeType.Default} eyebrowType={EyebrowType.Default} />
        </div>
        <AvatarForm />
      </div>
    )
  }
}
