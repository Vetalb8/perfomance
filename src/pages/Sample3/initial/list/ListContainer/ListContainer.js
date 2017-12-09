import React from 'react'
import { connect } from 'react-redux'

import { fetchPersonsNormalize }  from '../../../../../modules/persons'

import PersonList from '../PersonList/PersonList'

@connect((state) => {
  const ids = state.persons.ids
  const values = state.persons.values
  const filter = state.filter.filterValue

  return {
    ids: ids.filter((id) => values[id].name.includes(filter)),
    isSaving: state.date.isSaving,
  }
}, { fetchPersonsNormalize })
export default class ListContainer extends React.Component {

  componentDidMount() {
    const { fetchPersonsNormalize } = this.props

    fetchPersonsNormalize(1000)
  }

  render() {
    const { ids, isSaving } = this.props

    return (
      <PersonList ids={ids} isSaving={isSaving} />
    )
  }

}
