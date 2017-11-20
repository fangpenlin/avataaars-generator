import * as PropTypes from 'prop-types'
import * as React from 'react'

import Option from './Option'
import OptionContext from './OptionContext'

export default function withOptions<ComponentProps> (
  Component:
    | React.ComponentClass<ComponentProps>
    | React.StatelessComponent<ComponentProps>,
  config: {
    options: Array<Option>
  }
) {
  return class ComponentWithOptions extends React.Component<ComponentProps> {
    static contextTypes = {
      optionContext: PropTypes.instanceOf(OptionContext)
    }

    private get optionContext (): OptionContext {
      return this.context.optionContext
    }

    componentDidMount () {
      //
    }

    componentWillUnmount () {
      //
    }

    render () {
      const { props } = this
      return <Component {...props} />
    }
  }
}
