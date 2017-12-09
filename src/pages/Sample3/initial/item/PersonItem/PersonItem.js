import React from 'react'


const PersonItem = ({ person, updatePerson, deletePerson }) => {
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
              <button className="btn-flat waves-effect waves-teal" onClick={updatePerson}>Change</button>
            </div>
            <div className="col s6">
              <button className="btn-flat waves-effect waves-teal" onClick={deletePerson}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonItem

