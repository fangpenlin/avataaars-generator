import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import './assets/index.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)
registerServiceWorker()
