//react imports
import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "./styles/App.css";
//redux imports
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import registerServiceWorker from "./registerServiceWorker";
//import promise from 'redux-promise';
//react router imports
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import App from "./components/App";
import BaseLayout from "./components/BaseLayout";

const createStoreWithMiddleware = applyMiddleware()(createStore);

//switch uses most specific route that matches, top down.

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
