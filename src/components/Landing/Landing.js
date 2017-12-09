import React from 'react'

import './Landing.scss'


export default class Landing extends React.Component {

  render() {
    const { books } = this.props;

    return (
      <div className="row">

        <div className="col s3">
          <!-- Grey navigation panel -->
        </div>

        <div className="col s9">
          <!-- Teal page content  -->
        </div>

      </div>
    );
  }
}
