import './App.css';
import React, {Component}  from 'react';
import Login from '../src/Login.js';
import HomePage from '../src/HomePage.js';
import ApiCalendar from 'react-google-calendar-api';
import CalendarPage from '../src/CalendarPage.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link } from "react-router-dom";







class App extends React.Component{

    render(): React.Node {
        return (

            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/HomePage">Home</Link>
                        </li>
                        <li>
                            <Link to="/Login">Login</Link>
                        </li>
                        <li>
                            <Link to="/CalendarPage">Calendar</Link>
                        </li>
                    </ul>

                <hr/>

                    <Switch>
                        <Route path="/HomePage">
                            <HomePage />
                        </Route>
                        <Route path="/Login">
                            <Login/>
                        </Route>
                        <Route path="/CalendarPage">
                            <CalendarPage />
                        </Route>
                    </Switch>
                </div>
            </Router>

        );
    }

}


export default App;
