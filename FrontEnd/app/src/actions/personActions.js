import axios from 'axios';
import { GET_ERRORS } from './types';

export const createPerson = (person, history) => async dispatch => {
  console.log('PERSON ACTION!!!');
  try {
    const res = await axios.post('http://localhost:8080/api/registration', person);
    history.push('/');
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};
