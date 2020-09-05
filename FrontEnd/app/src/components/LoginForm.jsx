import React from 'react';
import TextFieldGroup from '../common/TextFieldgroup';

class LoginForm extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                identifier: '',
                password: '',
                errors:{},
                isLoading: false
            };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChnage = this.onChange.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }

    render(){
        const{ errors, identifier, password, isLoading } = this.state;
        return(
            <form>
                <h1>Login</h1>

                <TextFieldGroup
                    field="identifier"
                    label="Username"
                    value={identifier}
                    error={errors.identifier}
                    onChange={this.onChange}
                />

                <TextFieldGroup
                    field="password"
                    label="Password"
                    value={password}
                    error={errors.password}
                    onChange={this.onChange}
                    type="password"
                />

                <div className = "form-group">
                    <button className="btn btn-primary btn-lg" disabled = {isLoading}>Login
                    </button>
                </div>
            
            </form>
        )
    }
}