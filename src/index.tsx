import './assets/index.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { configureUrlQuery } from 'react-url-query'

import App from './components/App'
import history from './history'
import registerServiceWorker from './registerServiceWorker'

// link the history used in our app to url-query so it can update the URL with it.
configureUrlQuery({ history })

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)
registerServiceWorker()
