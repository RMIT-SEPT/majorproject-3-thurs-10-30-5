import axios from 'axios';

import useUser from '../hooks/useUser';

const qs = require('querystring');

const apiAxios = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
    'Access-control-Allow-Origin': '*'
  }
});

const api = {
  axios: apiAxios,
  isLoggedIn: false,
  async register(data) {
    const config = {
      method: 'post',
      url: 'http://localhost:8080/api/registration',
      headers: {
        dataType: 'json',
        'Content-Type': 'application/json',
        'Access-control-Allow-Origin': '*'
      },
      data: data
    };

    axios(config)
      .then(function(response) {
        console.log(response);
        return response;
      })
      .catch(function(error) {
        console.log(error);
        return error;
      });
  },
  setIsLoggedIn(isLoggedIn) {
    this.isLoggedIn = isLoggedIn;
  },
  async login({ username, password }) {
    var loginData = JSON.stringify({
      username: username,
      password: password
    });

    const config = {
      method: 'post',
      url: 'http://localhost:8080/login',
      headers: {
        'Content-Type': 'application/json',
        'Access-control-Allow-Origin': '*'
      },
      data: loginData
    };

    await axios(config).then(
      response => {
        //return response.data;
        console.log(response);

        const user = {
          loggedIn: true,
          username: username,
          token: response.data.token
        };

        return response;
      },
      error => {
        console.log(error);
        return 'Login Unsuccessful';
      }
    );
  }
};

export default api;
