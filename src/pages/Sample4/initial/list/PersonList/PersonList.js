import React from 'react'

import SavingBlock from '../../../../../components/SavingBlock/SavingBlock'

import PersonItemContainer from '../../item/PersonItemContainer/PersonItemContainer'


const PersonList = ({ ids }) => (
  <div className="row">
    <SavingBlock />
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
