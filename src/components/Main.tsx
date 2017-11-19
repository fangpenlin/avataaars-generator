import '../assets/App.css'

import * as FileSaver from 'file-saver'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import {
  UrlQueryParamTypes,
  UrlUpdateTypes,
  addUrlProps
} from 'react-url-query'

import AvatarForm from './AvatarForm'
import Avatar, {
  AccessoriesType,
  ClotheColor,
  ClotheType,
  EyeType,
  EyebrowType,
  MouthType,
  SkinColor,
  TopType
} from './avatar'

interface Props {
  topType: TopType
  eyeType: EyeType
  eyebrowType: EyebrowType
  mouthType: MouthType
  clotheType: ClotheType
  clotheColor: ClotheColor
  accessoriesType: AccessoriesType
  skinColor: SkinColor
  __render__?: string
  onChangeTopType: (topType: TopType) => void
  onChangeEyeType: (eyeType: EyeType) => void
  onChangeEyebrowType: (eyebrowType: EyebrowType) => void
  onChangeMouthType: (mouthType: MouthType) => void
  onChangeClotheType: (clotheType: ClotheType) => void
  onChangeClotheColor: (clotheColor: ClotheColor) => void
  onChangeAccessoriesType: (accessoriesType: AccessoriesType) => void
  onChangeSkinColor: (skinColor: SkinColor) => void
  onChangeUrlQueryParams: (params: any) => void
}

const updateType = UrlUpdateTypes.pushIn
const urlPropsQueryConfig = {
  topType: {
    type: UrlQueryParamTypes.string,
    updateType
  },
  eyeType: {
    type: UrlQueryParamTypes.string,
    updateType
  },
  eyebrowType: {
    type: UrlQueryParamTypes.string,
    updateType
  },
  mouthType: {
    type: UrlQueryParamTypes.string,
    updateType
  },
  clotheType: {
    type: UrlQueryParamTypes.string,
    updateType
  },
  clotheColor: {
    type: UrlQueryParamTypes.string,
    updateType
  },
  accessoriesType: {
    type: UrlQueryParamTypes.string,
    updateType
  },
  skinColor: {
    type: UrlQueryParamTypes.string,
    updateType
  },
  __render__: {
    type: UrlQueryParamTypes.string
  }
}

export class Main extends React.Component<Props> {
  static defaultProps = {
    topType: TopType.LongHairStraight,
    eyeType: EyeType.Default,
    eyebrowType: EyebrowType.Default,
    mouthType: MouthType.Default,
    clotheType: ClotheType.BlazerShirt,
    clotheColor: ClotheColor.Black,
    accessoriesType: AccessoriesType.Blank
  }

  private avatarRef: Avatar | null = null
  private canvasRef: HTMLCanvasElement | null = null

  componentDidMount () {
    const anyWindow = window as any
    setTimeout(() => {
      anyWindow.prerenderReady = true
    }, 500)
  }

  render () {
    const {
      topType,
      eyeType,
      eyebrowType,
      mouthType,
      clotheType,
      clotheColor,
      accessoriesType,
      skinColor,
      __render__
    } = this.props
    const title = 'Avataaars Generator - Generate your own avataaars!'
    const imageURL = process.env.REACT_APP_IMG_RENDERER_URL + location.search
    return (
      <main role='main'>
        <Helmet>
          <meta property='og:title' content={title} />
          <meta property='og:site_name' content='Avataaars Generator' />
          <meta property='og:url' content={document.location.href} />
          <meta property='og:image' content={imageURL} />
          <meta
            property='og:description'
            content='Avataaars Generator is a free online tool for generating your own avatar'
          />
          <meta name='twitter:card' content='photo' />
          <meta name='twitter:site' content='Avataaars Generator' />
          <meta name='twitter:title' content={title} />
          <meta name='twitter:image' content={imageURL} />
          <meta name='twitter:url' content={document.location.href} />
        </Helmet>
        {__render__ !== '1' ? (
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <Avatar
              topType={topType}
              eyeType={eyeType}
              eyebrowType={eyebrowType}
              mouthType={mouthType}
              clotheType={clotheType}
              clotheColor={clotheColor}
              accessoriesType={accessoriesType}
              skinColor={skinColor}
              ref={this.onAvatarRef}
            />
          </div>
        ) : (
          <Avatar
            style={{
              position: 'absolute',
              left: '0',
              right: '0',
              bottom: '0',
              top: '0',
              width: '100%',
              height: '100%'
            }}
            topType={topType}
            eyeType={eyeType}
            eyebrowType={eyebrowType}
            mouthType={mouthType}
            clotheType={clotheType}
            clotheColor={clotheColor}
            accessoriesType={accessoriesType}
            skinColor={skinColor}
            ref={this.onAvatarRef}
          />
        )}
        {__render__ !== '1' ? (
          <AvatarForm
            topType={topType}
            eyeType={eyeType}
            eyebrowType={eyebrowType}
            mouthType={mouthType}
            clotheType={clotheType}
            clotheColor={clotheColor}
            accessoriesType={accessoriesType}
            skinColor={skinColor}
            onTopChange={this.onTopChange}
            onEyeChange={this.onEyeChange}
            onEyebrowChange={this.onEyebrowChange}
            onMouthChange={this.onMouthChange}
            onClotheChange={this.onClotheChange}
            onClotheColorChange={this.onClotheColorChange}
            onAccessoriesChange={this.onAccessoriesChange}
            onSkinColorChange={this.onSkinColorChange}
            onDownload={this.onDownload}
          />
        ) : null}
        <canvas
          style={{ display: 'none' }}
          width='264'
          height='280'
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

  private onTopChange = (topType: TopType) => {
    this.props.onChangeTopType(topType)
  }

  private onEyeChange = (eyeType: EyeType) => {
    this.props.onChangeEyeType(eyeType)
  }

  private onEyebrowChange = (eyebrowType: EyebrowType) => {
    this.props.onChangeEyebrowType(eyebrowType)
  }

  private onMouthChange = (mouthType: MouthType) => {
    this.props.onChangeMouthType(mouthType)
  }

  private onClotheChange = (clotheType: ClotheType) => {
    this.props.onChangeClotheType(clotheType)
  }

  private onClotheColorChange = (clotheColor: ClotheColor) => {
    this.props.onChangeClotheColor(clotheColor)
  }

  private onAccessoriesChange = (accesoriesType: AccessoriesType) => {
    this.props.onChangeAccessoriesType(accesoriesType)
  }

  private onSkinColorChange = (skinColor: SkinColor) => {
    this.props.onChangeSkinColor(skinColor)
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
      this.canvasRef!.toBlob(imageBlob => {
        this.triggerDownload(imageBlob!)
      })
    }
    img.src = url
  }

  private triggerDownload (imageBlob: Blob) {
    FileSaver.saveAs(imageBlob, 'avataaars.png')
  }
}

export default addUrlProps({ urlPropsQueryConfig })(Main)
