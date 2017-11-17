import '../assets/App.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom'

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

  private avatarRef: Avatar | null = null
  private canvasRef: HTMLCanvasElement | null = null

  render () {
    const { eyeType, eyebrowType, clotheType } = this.state
    return (
      <main role='main'>
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <Avatar
            eyeType={eyeType}
            eyebrowType={eyebrowType}
            clotheType={clotheType}
            ref={this.onAvatarRef}
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
        <canvas
          style={{ display: 'none' }}
          width='240'
          height='262'
          ref={this.onCanvasRef}
        />
      </main>
    )
  }

  private onAvatarRef = (ref: Avatar) => {
    this.avatarRef = ref
  }

  private onCanvasRef = (ref: HTMLCanvasElement) => {
    this.canvasRef = ref
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
    const svgNode = ReactDOM.findDOMNode(this.avatarRef!)
    const ctx = this.canvasRef!.getContext('2d')!

    const anyWindow = window as any
    const DOMURL = anyWindow.URL || anyWindow.webkitURL || window

    const data = svgNode.outerHTML
    const img = new Image()
    const svg = new Blob([data], { type: 'image/svg+xml' })
    const url = DOMURL.createObjectURL(svg)

    img.onload = () => {
      ctx.drawImage(img, 0, 0)
      DOMURL.revokeObjectURL(url)
      const imageURI = this.canvasRef!
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream')
      this.triggerDownload(imageURI)
    }
    img.src = url
  }

  private triggerDownload (imgURI: string) {
    const event = new MouseEvent('click', {
      view: window,
      bubbles: false,
      cancelable: true
    })

    const a = document.createElement('a')
    a.setAttribute('download', 'avataaars.png')
    a.setAttribute('href', imgURI)
    a.setAttribute('target', '_blank')
    a.dispatchEvent(event)
  }
}
