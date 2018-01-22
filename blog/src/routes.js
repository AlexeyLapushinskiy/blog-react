import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Login/login';
import Signup from './Signup/signup';
import CreatePost from './CreatePost/createPost';

class Routes extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/signup" component={Signup}/>
                        <Route exact path="/createpost" component={CreatePost}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Routes;
