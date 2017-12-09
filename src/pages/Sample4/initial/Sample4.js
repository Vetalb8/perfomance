import React from 'react'

import ListContainer from './list/ListContainer/ListContainer'
import FilterComponent from './FilterComponent/FilterComponent'
import SaveButton from './SaveButton/SaveButton'


class Sample4 extends React.Component {

  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <div>
        <h3>Sample4</h3>
        <SaveButton />
        <FilterComponent />
        <ListContainer />
      </div>
    )
  }

}

export default Sample4
