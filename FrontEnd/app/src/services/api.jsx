import axios from 'axios';

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
  async register({ data }) {
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
        return response;
      })
      .catch(function(error) {
        return error;
      });
  },
  setIsLoggedIn(isLoggedIn) {
    this.isLoggedIn = isLoggedIn;
  },
  async login({ username, password }) {
    var test = qs.stringify({
      username: username,
      password: password
    });
    const credentials = {
      sucessful: 'false',
      username: username
    };
    const config = {
      method: 'post',
      url: 'http://localhost:8080/login',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-control-Allow-Origin': '*'
      },
      data: test
    };

    await axios(config).then(
      response => {
        //return response.data;

        return credentials;
      },
      error => {
        //console.log(error);
        return 'Login Unsuccessful';
      }
    );
  }
};

export default api;
