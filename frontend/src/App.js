import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import {AuthProvider, useAuth} from './context/AuthContext';
import Login from './components/Login';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/dashboard" />
                    {/* Mais rotas aqui */}
                    <Redirect from="/" to="/dashboard" />
                </Switch>
            </Router>
        </AuthProvider>
    );
}

function PrivateRoute({ component: Component, ...rest }) {
    const { authenticated } = useAuth();

    return (
        <Route
            {...rest}
            render={(props) =>
                authenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
}

export default App;
