import React, { Component, PureComponent } from 'react'

import PersonItem from '../PersonItem/PersonItem'
import { whyDidYouUpdate } from '../../../../utils'


@whyDidYouUpdate
class PersonList extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //     return this.props.list !== nextProps.list;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //     return !shallowEqual(this.props, newProps)
  //         || !shallowEqual(this.state, newState);
  // }

  // change index to id

  render() {
    const { persons, updatePerson, deletePerson } = this.props

    return (
      <div className="row">
        {
          persons.map((person, index) => (
            <PersonItem
              key={person.id}
              person={person}
              updatePerson={updatePerson}
              deletePerson={deletePerson}
            />
          ))
        }
      </div>
    )
  }
}

export default PersonList
