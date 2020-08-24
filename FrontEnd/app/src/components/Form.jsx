import React from 'react'

export default function Form() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>Full Name:<input type="text" name="fullname"/></label>
                <label>Username:<input type="text" name="username"/></label>
                <label>Email:<input type="email" name="email"/></label>
                <label>Password:<input type="password" name="password"/></label>
                <input type="submit" value="Submit"/>
            </form>
        );
}