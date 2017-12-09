import React from 'react'
import { connect } from 'react-redux'

import { fetchPersons, updatePerson, deletePerson }  from '../../../modules/persons'

import './Sample2.scss'

import PersonList from './PersonList/PersonList'


@connect((state) => ({
  persons: state.persons.items,
}), { fetchPersons, updatePerson, deletePerson })
class Sample2 extends React.Component {

  static propTypes = {}

  static defaultProps = {}

  state = {
    filterText: ''
  }

  componentDidMount() {
    const { fetchPersons } = this.props

    fetchPersons(1000)
  }

  handleChange = (event) => {
    this.setState({
      filterText: event.target.value
    })
  }

  render() {
    const { persons, updatePerson, deletePerson } = this.props
    const { filterText } = this.state


    return (
      <div>
        <h3>Sample2</h3>
        <div className="row">
          <div className="input-field col s6">
            <input id="name" type="text" className="validate" onChange={this.handleChange} value={filterText} />
            <label className="active" htmlFor="name">Filter user</label>
          </div>
        </div>
        <PersonList persons={persons} updatePerson={(person) => updatePerson(person)} deletePerson={(person) => deletePerson(person)} />
      </div>
    )
  }

}

export default Sample2
