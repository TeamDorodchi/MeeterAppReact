import React, {SyntheticEvent, Component}  from 'react';
import ApiCalendar from 'react-google-calendar-api';
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

const API_KEY = "AIzaSyB1Z-hNYREWNOGpytJU46XNN3_cCTH6Efk";

function myCal() {
    let calendars = [
        {calendarId: "#femail", color: "#B241D1"},//add a color field to specify the color of a calendar
        {calendarId: "#secemail"} //without a specified color, it defaults to blue (#4786ff)
    ];

    let styles = {
        //you can use object styles (no import required)
        calendar: {
            borderWidth: "3px", //make outer edge of calendar thicker
        },

        //you can also use emotion's string styles
        today: css`
   /* highlight today by making the text red and giving it a red border */
    color: red;
    border: 1px solid red;
  `
    }
}
class CalendarPage extends React.Component {

    render(): ReactNode {
        return (

            <div>
                <Calendar apiKey={API_KEY} calendars={calendars} styles={styles}/>
            </div>
        );
    }
}

export default CalendarPage;