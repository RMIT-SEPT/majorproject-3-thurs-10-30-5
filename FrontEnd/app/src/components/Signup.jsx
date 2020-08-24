import React, { Component } from 'react'

export default class Signup extends Component {
    constructor(){
        super();

        this.state={
            name: "",
            personIdentifier: "",
            desc: "",
            start_date: "",
            end_date: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    onsubmit(e){
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            personIdentifier: this.state.personIdentifier,
            desc: this.state.desc,
            start_date: this.state.start_date,
            end_date: this.state.end_date
        }

        console.log(newPerson);
    }

        render() {
            return (
                <div>
                    
                </div>
            )
        }
}
