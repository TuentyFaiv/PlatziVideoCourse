import React, { Fragment, Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Map as map } from 'immutable';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from '../../reducers/index';
import Header from '../components/header';
import Home from '../components/home';
import Videos from './videos';
import Video from './video';
import Contacto from '../components/contacto';
import NotFound from '../components/not-found';

const store = createStore(
  // reducer,
  reducer,
  // initialState,
  map(),
  // enhancer
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/videos/:id" component={Video} />
            <Route exact path="/contacto" component={Contacto} />
            <Redirect from="/v" to="/videos" />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Provider>
    )
  }
}

export default App;