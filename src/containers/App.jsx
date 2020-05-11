import React from 'react';
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import Login from '../pages/Login';
import Index from '../pages/Index';
// import FormClient from '../components/FormClient';
import FormClientContainer from '../components/FormClientContainer';
import FileForm from '../components/FileForm';
import HomeHeader from '../components/HomeHeader';
import '../assets/styles/app.css';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/form' />
        </Route>
        <Route path='/form'>
          <ScrollToTop />
          <Login />
        </Route>
        <Route path='/header'>
          <ScrollToTop />
          <HomeHeader />
        </Route>
        <Route path='/home'>
          <Switch>
            <Route exact path='/home'>
              <ScrollToTop />
              <HomeHeader />
              <Index />
            </Route>
            <Route path='/home/formularioCliente'>
              <ScrollToTop />
              <HomeHeader />
              <FormClientContainer />
            </Route>
            <Route path='/home/fileForm'>
              <ScrollToTop />
              <HomeHeader />
              <FileForm />
            </Route>
          </Switch>
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
