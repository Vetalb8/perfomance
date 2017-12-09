import React, { Component } from 'react'
import { AutoSizer, List } from 'react-virtualized'

import './PersonList.scss'

import SavingBlock from '../../../../components/SavingBlock/SavingBlock'
import PersonItemContainer from '../../item/PersonItemContainer/PersonItemContainer'
// {
//   ids.map((id) => (
//     <PersonItemContainer
//       key={id}
//       id={id}
//     />
//   ))
// }

class  PersonList extends Component {

  rowRenderer = ({index, key, style}) => {
    const id = this.ids[index];

    return (
      <div key={key} style={style}>
        <PersonItemContainer id={id} />
      </div>
    );
  }

  render() {
    const { ids } = this.props
    this.ids = ids

    return (
      <div className="list">
        <SavingBlock />
        <AutoSizer>
          {({ width, height }) => {
            return (
              <List
                key={ids.length}
                height={height}
                width={width}
                rowCount={ids.length}
                rowHeight={400}
                rowRenderer={this.rowRenderer}
              />
            );
          }}
        </AutoSizer>
      </div>
    )
  }
}

export default PersonList
