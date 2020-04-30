import React from 'react';
import { withRouter, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, exact, loggedIn }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            loggedIn ? <Redirect to="/boards" /> : <Component {...props} />
        }
    />
);

const Protected = ({ loggedIn, exact, path, component: Component }) => (
    <Route
        exact={exact}
        path={path}
        render={props => 
            loggedIn ? <Component {...props} /> : <Redirect to="/" />
        }
    />
);

const mSTP = (state) => ({
    loggedIn: state.session.id !== null,
})

export const ProtectedRoute = withRouter(connect(mSTP)(Protected));
export const AuthRoute = withRouter(connect(mSTP)(Auth));