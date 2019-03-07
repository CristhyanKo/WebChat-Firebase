import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Chat from './pages/chat.page';
import auth from './services/auth.service'
import Login from './pages/Authenticate/login.page';

const autentication = new auth()

class App extends Component {
  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => (
        autentication.isAuthenticated() ? (
          <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
          )
      )} />
    )

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" name="Login WebChat" component={Login} />
          <PrivateRoute path="/" name="WebChat" component={Chat} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
