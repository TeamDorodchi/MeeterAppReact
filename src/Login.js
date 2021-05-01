import React, {SyntheticEvent, Component}  from 'react';
import ApiCalendar from 'react-google-calendar-api';
import App from '../src/App.js'

class Login extends React.Component{

   render(): ReactNode{
        return (

<div>
    <p>Please Enter Your Email and the Email of the Person You Would Like to Meet with Below:</p>
<form>
    <label for="firstemail">Your email: </label>
    <input type="text" id="femail" name="fname"></input>

    <label for="secondemail">Other email: </label>
    <input type="text" id="secemail" name="secemail"></input>

    <input onclick="myCal()" type="submit" value="Submit"></input>
</form>
</div>
       );
   }
}

export default Login;