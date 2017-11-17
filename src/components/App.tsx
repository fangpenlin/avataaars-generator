import '../assets/App.css'

import * as React from 'react'

import AvatarForm from './AvatarForm'
import Avatar, { EyeType, EyebrowType } from './avatar'

interface State {
  readonly eyeType: EyeType
}

export default class App extends React.Component<{}, State> {
  state = {
    eyeType: EyeType.Default
  }

  render () {
    const { eyeType } = this.state
    return (
      <div className='App'>
        <div style={{ textAlign: 'center' }}>
          <Avatar eyeType={eyeType} eyebrowType={EyebrowType.Default} />
        </div>
        <AvatarForm eyeType={eyeType} onEyeChange={this.onEyeChange} />
      </div>
    )
  }

  private onEyeChange = (eyeType: EyeType) => {
    this.setState({ eyeType })
  }
}
