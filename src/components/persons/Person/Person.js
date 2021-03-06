import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Person.scss'


const Person = ({ name, info }) => (
  <div className="col s6">
    <div className="card">
      <div className="card-content">
        <span className="card-title">Card Title</span>
        <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
      </div>
      <div className="card-action">
        <a href="#">This is a link</a>
        <a href="#">This is a link</a>
      </div>
    </div>
  </div>
)

export default cssModules(Person, styles)
