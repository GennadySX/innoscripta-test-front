import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import './styles/App.scss';
import Layout from './containers'
import {Routes} from "./routes";

function withLayout(WrappedComponent, route) {
  return class extends React.Component {
    render() {
      return  (route !== '/auth') ? <Layout url={route}> <WrappedComponent/> </Layout> : <WrappedComponent/>
    }
  };
}

function App() {
  return (
      <React.Fragment>
        <Router>
          <Switch>
            {Routes.map((route, idx) =>
                <Route path={route.path} component={
                  withLayout(route.component, route.path )
                } key={idx}/>
            )}
          </Switch>
        </Router>
      </React.Fragment>

  );
}

export default App;
