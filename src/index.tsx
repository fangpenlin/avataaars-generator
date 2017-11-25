import './assets/index.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { configureUrlQuery } from 'react-url-query'

import App from './components/App'
import Renderer from './components/Renderer'
import history from './history'
import registerServiceWorker from './registerServiceWorker'

const params = new URL(document.location.href).searchParams

if (params.get('__render__') !== '1') {
  // link the history used in our app to url-query so it can update the URL with it.
  configureUrlQuery({ history })

  ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)
  registerServiceWorker()
  // server rendering mode
} else {
  ReactDOM.render(<Renderer />, document.body)
}
