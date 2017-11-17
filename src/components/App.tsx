import '../assets/App.css'

import * as React from 'react'

import Avatar, { EyeType, EyebrowType } from './avatar'

const logo = require('../assets/logo.svg')

export default class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className='App-intro'>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Avatar eyeType={EyeType.Default} eyebrowType={EyebrowType.Default} />
      </div>
    )
  }
}
