import React, { Component } from 'react'

const defaultState = {
    username: "",
    password: "",
    usernameError: "",
    passwordError: ""
}


class Login extends Component {
  state = defaultState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let usernameError =  "";
    let passwordError = "";

   
    if(this.state.username == "" || !this.state.username){
      usernameError = "Username cannot be blank";
    }

    if(usernameError){
      this.setState({usernameError});
      return false;
    }

    if(!this.state.password){
      passwordError = "Password cannot be blank";
    }

    if(passwordError){
      this.setState({passwordError});
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if(isValid) {
      console.log(this.state);
      this.setState(defaultState);
    }
  };

  render() {
    return (
      <div id="loginPage">
        <img id="loginImage" src="https://picalls.com/wp-content/uploads/2015/05/Skive-by-LunarPixel.jpg" />

        <div id="loginDiv">

          <h1>Login</h1>

          <form name = "loginForm" id="loginForm" onSubmit={this.handleSubmit}>
            <label>Username <br/>
              <input 
                name="username" 
                placeholder="Enter your username"
                value={this.state.name}
                onChange={this.handleChange}/>

              {this.state.usernameError ? (
                  <div style={{color: "red", fontWeight: "bold"}}>
                  {this.state.usernameError}
                  </div>
                ) : null}
              </label>
            <br/>

            <label>Password <br/>
              <input 
                type="password" 
                name="password" 
                placeholder="Enter your password"
                value={this.state.password}
                onChange={this.handleChange}
                />
              {this.state.passwordError ? (
                  <div style={{color: "red", fontWeight: "bold"}}>
                  {this.state.passwordError}
                  </div>
              ) : null}
            </label>

            <br/><br/>

            <button id="loginButton" type="submit">Login</button>

          </form>

        </div>

      </div>
    )
  }
}

export default Login;
