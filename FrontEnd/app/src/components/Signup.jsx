import React, { Component } from 'react'
import axios from 'axios';
import './Signup.css';


export default class Signup extends Component {
    constructor(){
        super();

        this.state={
            username: "",
            password: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    onSubmit(e){
        e.preventDefault();
        const newUser = {
            username: this.state.username,
            password: this.state.password,
        }
        console.log(newUser);

        const axios = require('axios');
        const data = JSON.stringify({"username":this.state.username,"password":this.state.password});

        var config = {
        method: 'post',
        url: 'http://localhost:8080/api/registration',
        headers: { 
            'Content-Type': 'application/json',
            'Access-control-Allow-Origin': '*'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });

    }

        render() {
            return (
                <div className="formDiv">
                    <form onSubmit = { this.onSubmit }>
                        Username:
                        <input type = "text"
                        placeholder = "Username"
                        name = "username"
                        value = { this.state.username }
                        onChange = { this.onChange }
                        />
                        Password:
                        <input type = "text"
                        placeholder = "Password"
                        name = "password"
                        value = { this.state.password }
                        onChange = { this.onChange }
                        />

                        <input type="submit" value = "Sign Up"/>
                    </form>
                </div>
            )
        }
}
