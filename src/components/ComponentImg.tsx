import * as PropTypes from 'prop-types'
import * as React from 'react'
import { OptionContext, allOptions } from 'avataaars'

export default class ComponentCode extends React.Component {
  static contextTypes = {
    optionContext: PropTypes.instanceOf(OptionContext)
  }

  private textArea: HTMLTextAreaElement | null = null

  private get optionContext(): OptionContext {
    return this.context.optionContext
  }

  componentWillMount() {
    this.optionContext.addValueChangeListener(this.onOptionValueChange)
  }

  componentWillUnmount() {
    this.optionContext.removeValueChangeListener(this.onOptionValueChange)
  }

  render() {
    const { optionContext } = this
    const props: Array<string> = []
    for (const option of allOptions) {
      const state = optionContext.getOptionState(option.key)
      if (!state || !state.available) {
        continue
      }
      const value = optionContext.getValue(option.key)
      props.push(`${option.key}=${value}`)
    }
    const propsStr = props.join('&')
    const code = `<img src='https://avataaars.io/?${propsStr}'
/>`
    return (
      <div>
        <h3 style={{ color: '#6A39D7' }}>
          &lt;img&gt; Code{' '}
          <a
            href='https://github.com/gkoberger/avataaars'
            style={{ fontSize: '0.8em' }}
            target='_blank'>
            <i className='fa fa-github' /> Repo
          </a>
        </h3>
        <p>
          You can include this as an SVG &lt;img&gt; from the API.
        </p>
        <textarea
          readOnly
          style={{ width: '100%', height: '10em' }}
          value={code}
          ref={this.onTextAreaRef}
          onFocus={this.onTextAreaClick}
        />
      </div>
    )
  }

  private onTextAreaRef = (ref: any) => {
    this.textArea = ref
  }

  private onTextAreaClick = (event: React.FormEvent<HTMLTextAreaElement>) => {
    this.textArea!.focus()
    this.textArea!.select()
  }

  private onOptionValueChange = (key: string, value: string) => {
    this.forceUpdate()
  }
}
