import React from 'react'
import { connect } from 'react-redux'
import { updatePersonNormalize, deletePersonNormalize } from '../../../../../modules/persons'

import PersonItem from '../PersonItem/PersonItem'


@connect((state, { id }) => ({
  person: state.persons.values[id]
}), { updatePersonNormalize, deletePersonNormalize })
export default class PersonItemContainer extends React.Component {

  updatePerson = () => {
    const { person, updatePersonNormalize } = this.props
    updatePersonNormalize(person)
  }

  deletePerson = () => {
    const { person, deletePersonNormalize } = this.props
    deletePersonNormalize(person.id)
  }

  render() {
    const { person } = this.props

    return (
      <PersonItem person={person} updatePerson={this.updatePerson} deletePerson={this.deletePerson} />
    )
  }

}
