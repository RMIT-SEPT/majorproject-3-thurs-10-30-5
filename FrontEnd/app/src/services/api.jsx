import axios from 'axios';

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
  }
};

export default api;
