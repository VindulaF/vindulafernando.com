import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Resume from './containers/Resume'
import jsonResume from './resume.json'

ReactDOM.render(<Resume resume={jsonResume} />, document.getElementById('root'))
