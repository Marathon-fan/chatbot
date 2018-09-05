import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Profile, Assessment, Account } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/Profile" component={Profile} />
    <Route path="/Assessment" component={Assessment} />
    <Route path="/Account" component={Account} />

  </Switch>
);



export default Routes;
