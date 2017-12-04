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

  componentWillMount () {
    this.optionContext.addValueChangeListener(this.onOptionValueChange)
  }

  componentWillUnmount () {
    this.optionContext.removeValueChangeListener(this.onOptionValueChange)
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
    const code = `<Avatar
  avatarStyle='${avatarStyle}'
${propsStr}
/>`
    return (
      <div>
        <h3 style={{ color: '#6A39D7' }}>
          React Code{' '}
          <a
            href='https://github.com/fangpenlin/avataaars'
            style={{ fontSize: '0.8em' }}
            target='_blank'>
            <i className='fa fa-github' /> Repo
          </a>
        </h3>
        <p>
          To use Avataaars in your React app, you need to install the package
          first. You can do it by running
        </p>
        <pre>
          <code>yarn add avataaars</code>
        </pre>
        <p>or</p>
        <pre>
          <code>npm install avataaars --save</code>
        </pre>
        <p>
          if you are using npm. Once you have avataaars package installed, you
          can copy and paste following code into your React component
        </p>
        <textarea
          readOnly
          style={{ width: '100%', height: '10em' }}
          value={code}
        />
      </div>
    )
  }

  private onOptionValueChange = (key: string, value: string) => {
    this.forceUpdate()
  }
}
