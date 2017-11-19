import * as PropTypes from 'prop-types'
import * as React from 'react'

import Option from './Option'
import OptionContext from './OptionContext'

function getComponentOptionValue (component: React.ComponentClass) {
  const optionValue = (component as any).optionValue
  if (optionValue) {
    return optionValue
  }
  return component.displayName || component.name
}

export interface Props {
  option: Option
  defaultOption: React.ComponentClass
}

export default class Selector extends React.Component<Props> {
  static contextTypes = {
    optionContext: PropTypes.instanceOf(OptionContext)
  }

  private get optionContext (): OptionContext {
    return this.context.optionContext
  }

  componentWillMount () {
    const { option, defaultOption } = this.props
    const { optionContext } = this
    const defaultValue = getComponentOptionValue(defaultOption)
    optionContext.addListener(this.optionContextUpdate)
    optionContext.optionEnter(option.key)
    const optionState = optionContext.getOptionState(option.key)
    this.updateOptionValues()
    if (optionState && !optionState.value) {
      optionContext.setValue(option.key, defaultValue, true)
    }
  }

  componentWillUpdate (nextProps: Props & { children?: React.ReactNode }) {
    this.updateOptionValues(nextProps)
  }

  componentWillUnmount () {
    this.optionContext.removeListener(this.optionContextUpdate)
    this.optionContext.optionExit(this.props.option.key)
  }

  render () {
    let result: React.ReactNode | null = null
    const { option, children } = this.props
    const optionState = this.optionContext.getOptionState(option.key)!
    const { value } = optionState
    React.Children.forEach(children, child => {
      if (getComponentOptionValue((child as any).type) === value) {
        result = child
      }
    })
    return result
  }

  private optionContextUpdate = () => {
    this.forceUpdate()
  }

  private updateOptionValues (
    nextProps?: Props & { children?: React.ReactNode }
  ) {
    if (nextProps && this.props.children === nextProps.children) {
      return
    }
    const { option, children } = this.props
    const values = React.Children.map(
      children,
      // TODO: also validate and throw error if we don't see optionValue
      child => getComponentOptionValue((child as any).type)
    )
    this.optionContext.setOptions(option.key, values)
  }
}
