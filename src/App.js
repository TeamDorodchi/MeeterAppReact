import './App.css';
import React, {SyntheticEvent, Component}  from 'react';
import ApiCalendar from 'react-google-calendar-api';
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

const API_KEY = "AIzaSyB1Z-hNYREWNOGpytJU46XNN3_cCTH6Efk";


let calendars = [
    {calendarId: "kempshane22@gmail.com", color: "#B241D1"},//add a color field to specify the color of a calendar
    {calendarId: "shrutirabara1215@gmail.com"} //without a specified color, it defaults to blue (#4786ff)
];

let styles = {
    //you can use object styles (no import required)
    calendar: {
        borderWidth: "3px", //make outer edge of calendar thicker
    },

    //you can also use emotion's string styles
today:css`
   /* highlight today by making the text red and giving it a red border */
    color: red;
    border: 1px solid red;
  `
}






/*
class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }
    handleItemClick(event: SyntheticEvent<any>, name: string): void {
        if (name === 'sign-in') {
            ApiCalendar.handleAuthClick();
        } else if (name === 'sign-out') {
            ApiCalendar.handleSignoutClick();
        }
    }
*/
class App extends React.Component{
    render(): ReactNode {
        return (

        <div>
            <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
        </div>
    );
    }
}













export default App;
