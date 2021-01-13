import React from 'react'
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { Countries } from '../components';
import CountrieDetail from '../components/countrieDetail/CountrieDetail';
const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/countrie/:id" component={ CountrieDetail }/>
          <Route exact path="/" component={ Countries }/>
          <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter;
