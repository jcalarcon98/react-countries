import React from 'react'
import {HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Countries } from '../components';
import CountrieDetail from '../components/countrieDetail/CountrieDetail';
const AppRouter = () => {
  return (
    <HashRouter>
      <div>
        
        <Switch>
          <Route exact path="/countrie/:id" component={ CountrieDetail }/>
          <Route exact path="/" component={ Countries }/>
          <Redirect to="/"/>
        </Switch>
      </div>
    </HashRouter>
  )
}

export default AppRouter;
