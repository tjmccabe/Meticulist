import React from 'react';
import {Route} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Splash from './auth/splash';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';
import BoardIndexContainer from './board_index_container';
import NavBarContainer from './nav_bar/nav_bar_container';


const App = () => (
    <div>
        <AuthRoute exact path="/" component={Splash}/>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/" component={NavBarContainer} />
        <ProtectedRoute path="/boards" component={BoardIndexContainer} />
    </div>
)

export default App;