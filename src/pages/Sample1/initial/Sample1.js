import React from 'react'
import { connect } from 'react-redux'

import { fetchPersons, updatePerson, deletePerson }  from '../../../modules/persons'

import './Sample1.scss'


@connect((state) => ({
  persons: state.persons.items,
}), { fetchPersons, updatePerson, deletePerson })
class Sample1 extends React.Component {

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
        <h3>Sample1</h3>
        <div className="row">
          <div className="input-field col s6">
            <input id="name" type="text" className="validate" onChange={this.handleChange} value={filterText} />
            <label className="active" htmlFor="name">Filter user</label>
          </div>
        </div>
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
                        <button className="btn-flat waves-effect waves-teal" onClick={() => updatePerson(person)}>Change</button>
                      </div>
                      <div className="col s6">
                        <button className="btn-flat waves-effect waves-teal" onClick={() => deletePerson(person.email)}>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }

}

export default Sample1
