import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SigninCard from './layout/signin/signinCard';
import SignupCard from './layout/signup/signupCard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/signin' exact component={SigninCard} />
        <Route path='/signup' exact component={SignupCard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
