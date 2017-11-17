import '../assets/App.css'

import * as React from 'react'

import AvatarForm from './AvatarForm'
import Avatar, { EyeType, EyebrowType } from './avatar'
import { Type as ClotheType } from './avatar/clothes'

interface State {
  readonly eyeType: EyeType
  readonly eyebrowType: EyebrowType
  readonly clotheType: ClotheType
}

export default class App extends React.Component<{}, State> {
  state = {
    eyeType: EyeType.Default,
    eyebrowType: EyebrowType.Default,
    clotheType: ClotheType.BlazerShirt
  }

  render () {
    const { eyeType, eyebrowType, clotheType } = this.state
    return (
      <div className='App'>
        <div style={{ textAlign: 'center' }}>
          <Avatar
            eyeType={eyeType}
            eyebrowType={eyebrowType}
            clotheType={clotheType}
          />
        </div>
        <AvatarForm
          eyeType={eyeType}
          eyebrowType={eyebrowType}
          clotheType={clotheType}
          onEyeChange={this.onEyeChange}
          onEyebrowChange={this.onEyebrowChange}
          onClotheChange={this.onClotheChange}
          onDownload={this.onDownload}
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

  private onClotheChange = (clotheType: ClotheType) => {
    this.setState({ clotheType })
  }

  private onDownload = () => {
    console.info('@@@@@@')
  }
}
