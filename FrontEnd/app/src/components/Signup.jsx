import React from 'react';

import api from '../services/api.jsx';
import './Signup.css';

function Signup() {
  const [formData, setFormData] = React.useState({ username: '', password: '' });

  function onChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const data = JSON.stringify({ username: formData.username, password: formData.password });
    console.log({ data });
    api.register({ data });
  }

  return (
    <div className="formDiv">
      <form onSubmit={onSubmit}>
        Username:
        <input type="text" placeholder="Username" name="username" value={formData.username} onChange={onChange} />
        Password:
        <input type="text" placeholder="Password" name="password" value={formData.password} onChange={onChange} />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}

export default Signup;
