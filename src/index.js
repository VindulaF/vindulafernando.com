import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import JSONResume from './resume.json'
//import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App resume={JSONResume} />, document.getElementById('root'))
//registerServiceWorker()
