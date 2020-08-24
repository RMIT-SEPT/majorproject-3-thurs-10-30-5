import React from 'react'

export default function Login() {
    return (
        <div id = "loginPage">
            <img id = "loginImage" src = "https://picalls.com/wp-content/uploads/2015/05/Skive-by-LunarPixel.jpg"></img>

            <div id = "loginDiv">
            <h1>Login</h1>
                <form id = "loginForm">
                    <label>Username <br></br>
                        <input type = "text"></input>
                    </label><br></br>
                    
                    <label>Password <br></br>
                        <input type = "password"></input>
                    </label><br></br><br></br>

                    <button id = "loginButton" type="submit"> Login </button>
                </form>
            </div>
        </div>
    )
}
