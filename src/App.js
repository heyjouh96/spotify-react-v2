import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import store from './store';

import CourseList from './components/CourseList';
import { tokenValidation } from "./helpers/utils";

import Routes from './routes/routes';
import './style/components/App.scss';

function App() {

  useEffect(() => {
    tokenValidation();
  });

  return (
    <Provider store={store}>
      <div className="wrapper">
        <div className="side">
          <img src={require('./images/logo.png')} alt="logo spotify" />
        </div>

        <div className="main-content">
          <Routes />
        </div>
      </div>
    </Provider>
  );
}

export default App;
