import React, { Component, PureComponent } from 'react'

import './PersonList.scss'


class PersonList extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.persons !== nextProps.persons;
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
            <div key={index} className="col s6 userCard">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">{person.name}</span>
                  <p>{person.bio}</p>
                </div>
                <div className="card-action">
                  <div className="row">
                    <div className="col s6">
                      <button className="btn-flat waves-effect waves-teal" onClick={() => updatePerson(person)}>Change
                      </button>
                    </div>
                    <div className="col s6">
                      <button className="btn-flat waves-effect waves-teal" onClick={() => deletePerson(person.email)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default PersonList
