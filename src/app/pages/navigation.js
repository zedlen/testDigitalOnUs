import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Home } from './Home';

export const Navigation = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" >
                    <Home />
                </Route>
            </Switch>      
        </Router>
    );
}