import React from 'react'

import PersonItemContainer from '../../item/PersonItemContainer/PersonItemContainer'


const PersonList = ({ ids, isSaving }) => (
  <div className="row">
    {
      isSaving && (
        <div className="progress">
          <div className="indeterminate" />
        </div>
      )
    }
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
