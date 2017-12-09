import React from 'react'
import { connect } from 'react-redux'


@connect((state) => ({
  isSaving: state.isSaving,
}))
class SavingBlock extends React.Component {

  static propTypes = {}

  static defaultProps = {}

  render() {
    const { isSaving } = this.props

    if (!isSaving) {
      return null
    }

    return (
      <div className="progress">
        <div className="indeterminate" />
      </div>
    )
  }

}

export default SavingBlock
