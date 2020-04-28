import React from 'react';
import {Route} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Splash from './splash';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import TempBarContainer from './temp_bar_container';


const App = () => (
    <div>
        <header>
            <h1>Meticulist</h1>
            <TempBarContainer/>
        </header>

        <AuthRoute exact path="/" component={Splash}/>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
)

export default App;