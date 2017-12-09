import React from 'react'

import ListContainer from './list/ListContainer/ListContainer'


class Sample2Opt2 extends React.Component {

  static propTypes = {}

  static defaultProps = {}

  state = {
    filterText: ''
  }

  handleChange = (event) => {
    this.setState({
      filterText: event.target.value
    })
  }

  render() {
    const { filterText } = this.state

    return (
      <div>
        <h3>Sample2 optimized2</h3>
        <div className="row">
          <div className="input-field col s6">
            <input id="name" type="text" className="validate" onChange={this.handleChange} value={filterText} />
            <label className="active" htmlFor="name">Filter user</label>
          </div>
        </div>
        <ListContainer />
      </div>
    )
  }

}

export default Sample2Opt2
