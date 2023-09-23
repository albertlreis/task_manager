import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import {AuthProvider, useAuth} from './context/AuthContext';
import Login from './components/Login';
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <AuthProvider>
            <AppContent />
        </AuthProvider>
    );
}

function AppContent() {
    const { loading } = useAuth();

    if (loading) {
        // Aguarde até que o carregamento seja concluído
        return <div>Carregando...</div>;
    }

    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <Redirect from="/" to="/dashboard" />
            </Switch>
        </Router>
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
