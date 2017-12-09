import React from 'react'

import PersonItemContainer from '../../item/PersonItemContainer/PersonItemContainer'


const PersonList = ({ ids }) => (
  <div className="row">
    {
      ids.map((id) => (
        <PersonItemContainer
          key={id}
          id={id}
        />
      ))
    }
  </div>
)

export default PersonList
