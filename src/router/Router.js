import React, {Component} from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Nav from '../components/Nav/Nav';
import Home from '../components/Home/Home';
import Games from '../components/Games/Games';
import AboutUs from '../components/AboutUs/AboutUs';
import ContactUs from '../components/ContactUs/ContactUs';
import NotFound from '../components/NotFound/NotFound';
import 'normalize.css/normalize.css';

class CinnamonRouter extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Nav}>
                    <IndexRoute component={Home}/>
                    <Route path='/games' component={Games}/>
                    <Route path='/about_us' component={AboutUs}/>
                    <Route path='/contact_us' component={ContactUs}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        );
    }
}

export default CinnamonRouter;