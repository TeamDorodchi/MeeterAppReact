import React, {SyntheticEvent, Component}  from 'react';
import ApiCalendar from 'react-google-calendar-api';
import App from '../src/App.js'

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email1: "",
            email2: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({email1: event.target.email1});
        this.setState({email2: event.target.email2});
    }

    handleSubmit(event) {
        alert('An email was submitted: ' + this.state.email1);
        alert('An email was submitted: ' + this.state.email2);
        event.preventDefault();
    }


    render(): ReactNode{

        return (

            <div>
                <h1>Please Enter In Your Email and the Email of The Person You Want to Meet With:</h1>

            <form onSubmit={this.handleSubmit}>
                <label>
                    Your Email
                    <input type="email" value={this.state.email1} onChange={this.handleChange} />
                </label>
                <label>
                    Their Email
                    <input type = "email" value = {this.state.email2} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>

       );
   }
}

export default Login;