import '../assets/App.css'

import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Avatar, AvatarStyle, OptionContext, allOptions } from 'avataaars'
import {
  UrlQueryParamTypes,
  UrlUpdateTypes,
  addUrlProps,
} from 'react-url-query'
import { fromPairs } from 'lodash'

interface Props {
  __render__?: string
  avatarStyle: AvatarStyle
  onChangeUrlQueryParams: (params: any, updateType: string) => void
  onChangeAvatarStyle: (avatarStyle: AvatarStyle) => void
}

const updateType = UrlUpdateTypes.pushIn
const urlPropsQueryConfig = {
  ...fromPairs(
    allOptions.map((option) => [
      option.key,
      {
        type: UrlQueryParamTypes.string,
        updateType,
      },
    ])
  ),
  avatarStyle: {
    type: UrlQueryParamTypes.string,
    updateType,
  },
}

export class Renderer extends React.Component<Props> {
  static childContextTypes = {
    optionContext: PropTypes.instanceOf(OptionContext),
  }
  static defaultProps = {
    avatarStyle: AvatarStyle.Circle,
  }

  private optionContext: OptionContext = new OptionContext(allOptions)

  getChildContext() {
    return { optionContext: this.optionContext }
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    this.updateOptionContext(nextProps)
  }

  UNSAFE_componentWillMount() {
    this.updateOptionContext(this.props)
  }

  componentDidMount() {
    const anyWindow = window as any
    setTimeout(() => {
      anyWindow.prerenderReady = true
    }, 500)
  }

  render() {
    const { avatarStyle } = this.props
    return (
      <main role='main'>
        <Avatar
          style={{
            position: 'absolute',
            left: '0',
            right: '0',
            bottom: '0',
            top: '0',
            width: '100%',
            height: '100%',
          }}
          avatarStyle={avatarStyle}
        />
      </main>
    )
  }

  private updateOptionContext(nextProps: Props) {
    this.optionContext.setData(nextProps as any)
  }
}

export default addUrlProps({ urlPropsQueryConfig })(Renderer)
