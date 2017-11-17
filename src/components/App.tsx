import '../assets/App.css'

import * as React from 'react'

import AvatarForm from './AvatarForm'
import Avatar, { EyeType, EyebrowType } from './avatar'

interface State {
  readonly eyeType: EyeType
  readonly eyebrowType: EyebrowType
}

export default class App extends React.Component<{}, State> {
  state = {
    eyeType: EyeType.Default,
    eyebrowType: EyebrowType.Default
  }

  render () {
    const { eyeType, eyebrowType } = this.state
    return (
      <div className='App'>
        <div style={{ textAlign: 'center' }}>
          <Avatar eyeType={eyeType} eyebrowType={eyebrowType} />
        </div>
        <AvatarForm
          eyeType={eyeType}
          eyebrowType={eyebrowType}
          onEyeChange={this.onEyeChange}
          onEyebrowChange={this.onEyebrowChange}
        />
      </div>
    )
  }

  private onEyeChange = (eyeType: EyeType) => {
    this.setState({ eyeType })
  }

  private onEyebrowChange = (eyebrowType: EyebrowType) => {
    this.setState({ eyebrowType })
  }
}
