import * as PropTypes from 'prop-types'
import * as React from 'react'
import { AvatarStyle, OptionContext, allOptions } from 'avataaars'

export interface Props {
  avatarStyle: AvatarStyle
}

export default class ComponentCode extends React.Component<Props> {
  static contextTypes = {
    optionContext: PropTypes.instanceOf(OptionContext)
  }

  private get optionContext (): OptionContext {
    return this.context.optionContext
  }

  render () {
    const { avatarStyle } = this.props
    const { optionContext } = this
    const props: Array<string> = []
    for (const option of allOptions) {
      const state = optionContext.getOptionState(option.key)
      if (!state || !state.available) {
        continue
      }
      const value = optionContext.getValue(option.key)
      props.push(`  ${option.key}='${value}'`)
    }
    const propsStr = props.join('\n')
    return (
      <textarea>{`<Avatar
  avatarStyle='${avatarStyle}'
${propsStr}
/>`}</textarea>
    )
  }
}
