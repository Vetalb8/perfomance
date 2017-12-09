import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { fetchPersonsNormalize }  from '../../../../modules/persons'

import PersonList from '../PersonList/PersonList'

const getFilteredIds = createSelector(
  state => state.persons.ids,
  state => state.persons.values,
  state => state.filter.filterValue,

  (ids, values, filter) => {
    console.log('getFilteredIds')
    return ids.filter((id) => values[id].name.includes(filter))
  }
)


@connect((state) => ({
  ids: getFilteredIds(state)
}), { fetchPersonsNormalize })
export default class ListContainer extends React.Component {

  componentDidMount() {
    const { fetchPersonsNormalize } = this.props

    fetchPersonsNormalize(1000)
  }

  render() {
    const { ids } = this.props

    return (
      <PersonList ids={ids} />
    )
  }

}
