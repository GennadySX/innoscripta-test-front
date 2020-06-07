import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import './styles/App.sass';
import Layout from './middleware'
import {Routes} from "./routes";

function withLayout(WrappedComponent, route) {
    return class extends React.Component {
        render() {
            return  <Layout url={route}> <WrappedComponent/> </Layout>
        }
    };
}



function App() {

    return (
        <React.Fragment>
                <Router basename={'/en'}>
                    <Switch>
                        {Routes.map((route, idx) =>
                            <Route path={route.path} component={
                                withLayout(route.component, route.path)
                            } key={idx}/>
                        )}
                    </Switch>
                </Router>
        </React.Fragment>

    );
}

export default App;
