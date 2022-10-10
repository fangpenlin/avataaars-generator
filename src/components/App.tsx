import * as React from 'react'
import Main from './Main'
import history from '../history'

export default class App extends React.Component {
  componentDidMount () {
    // force an update if the URL changes
    history.listen(() => this.forceUpdate())
  }

  render () {
    return (
      <div>
      <Main/>
      </div>
    
    );
  }
}
