import React from 'react'
import { Route, NavLink } from 'react-router-dom'

import './TwoColumnsLayout.scss'

import Header from '../../components/Header/Header'
import Sample1 from '../../pages/Sample1/initial/Sample1'
import Sample1Opt from '../../pages/Sample1/optimized/Sample1Opt'
import Sample2 from '../../pages/Sample2/initial/Sample2'
import Sample2Opt from '../../pages/Sample2/optimized/Sample2Opt'
import Sample2Opt2 from '../../pages/Sample2/optimized2/Sample2Opt2'
import Sample3 from '../../pages/Sample3/initial/Sample3'
import Sample3opt from '../../pages/Sample3/optimized/Sample3opt'
import Sample4 from '../../pages/Sample4/initial/Sample4'
import Sample4opt from '../../pages/Sample4/optimized/Sample4opt'
import Sample5 from '../../pages/Sample5/Sample5'

const TwoColumnsLayout = () => (
  <div>
    <Header />
    <div className="row">
      <div className="col s3">
        <div className="collection">
          <NavLink exact activeClassName="active" to="/" className="collection-item">Sample1</NavLink>
          <NavLink exact activeClassName="active" to="/sample1opt" className="collection-item">Sample1 Optimized</NavLink>
          <NavLink exact activeClassName="active" to="/sample2" className="collection-item">Sample2</NavLink>
          <NavLink exact activeClassName="active" to="/sample2opt" className="collection-item">Sample2 Optimized</NavLink>
          <NavLink exact activeClassName="active" to="/sample2opt2" className="collection-item">Sample2 Optimized2</NavLink>
          <NavLink exact activeClassName="active" to="/sample3" className="collection-item">Sample3</NavLink>
          <NavLink exact activeClassName="active" to="/sample3opt" className="collection-item">Sample3 Optimized</NavLink>
          <NavLink exact activeClassName="active" to="/sample4" className="collection-item">Sample4</NavLink>
          <NavLink exact activeClassName="active" to="/sample4opt" className="collection-item">Sample4 Optimized</NavLink>
          <NavLink exact activeClassName="active" to="/sample5" className="collection-item">Sample5</NavLink>
        </div>
      </div>

      <div className="col s9">
        <Route path="/" component={Sample1} exact />
        <Route path="/sample1opt" component={Sample1Opt} exact />
        <Route path="/sample2" component={Sample2} exact />
        <Route path="/sample2opt" component={Sample2Opt} exact />
        <Route path="/sample2opt2" component={Sample2Opt2} exact />
        <Route path="/sample3" component={Sample3} exact />
        <Route path="/sample3opt" component={Sample3opt} exact />
        <Route path="/sample4" component={Sample4} exact />
        <Route path="/sample4opt" component={Sample4opt} exact />
        <Route path="/sample5" component={Sample5} exact />
      </div>
    </div>
  </div>
)

export default TwoColumnsLayout
