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

  async login({ username, password }) {
    //console.log(data);
    var test = qs.stringify({
      username: username,
      password: password
    });

    //var postData = qs.stringify({data});

    console.log(username);
    console.log(password);
    //console.log(postData);

    const config = {
      method: 'post',
      url: 'http://localhost:8080/login',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-control-Allow-Origin': '*'
      },
      data: test
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
  }
};

export default api;
