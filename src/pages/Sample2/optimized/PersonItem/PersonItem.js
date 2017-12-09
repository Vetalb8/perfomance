import React, { PureComponent } from 'react'


class PersonItem extends PureComponent {

  updatePerson = () => {
    const { person, updatePerson } = this.props
    updatePerson(person)
  }

  deletePerson = () => {
    const { person, deletePerson } = this.props
    deletePerson(person.email)
  }

  render() {
    const { person } = this.props

    return (
      <div className="col s6">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{person.name}</span>
            <p>{person.bio}</p>
          </div>
          <div className="card-action">
            <div className="row">
              <div className="col s6">
                <button className="btn-flat waves-effect waves-teal" onClick={this.updatePerson}>Change</button>
              </div>
              <div className="col s6">
                <button className="btn-flat waves-effect waves-teal" onClick={this.deletePerson}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default PersonItem

