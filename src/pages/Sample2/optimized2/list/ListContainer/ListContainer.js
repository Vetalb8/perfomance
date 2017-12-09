import React from 'react'
import { connect } from 'react-redux'

import { fetchPersonsNormalize }  from '../../../../../modules/persons'

import PersonList from '../PersonList/PersonList'

@connect((state) => ({
  ids: state.persons.ids,
}), { fetchPersonsNormalize })
export default class ListContainer extends React.Component {

  static defaultProps = {
    ids: []
  }

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
