import React, {SyntheticEvent, Component}  from 'react';

import ApiCalendar from 'react-google-calendar-api';
import App from '../src/App.js'
import Calendar from "@ericz1803/react-google-calendar";


class HomePage extends React.Component{
    render(): ReactNode{
        return (
            <div>
                <p>Add application description here</p>
                <button onClick="loginFun()">Login</button>
            </div>

        );
    }




}

export default HomePage;