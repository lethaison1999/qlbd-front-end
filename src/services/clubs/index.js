import axios from '../interceptor';
import * as config from '../../constants/config';

export const findAll = async (params) => {
  try {
    const { data } = await axios
      .get(`${config.API_URL}/clubs`, {
        params
      });

    return data.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export const findOne = async (_id) => {
  try {
    const { data } = await axios
      .get(`${config.API_URL}/clubs/${_id}`);

    return data.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export const updateOne = async (_id, payloads) => {
  try {
    const { data } = await axios
      .put(`${config.API_URL}/clubs/${_id}`, payloads);

    return data.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export const createOne = async (payloads) => {
  try {
    const { data } = await axios
      .post(`${config.API_URL}/clubs/`, payloads);

    return data.data;
  } catch (error) {
    return Promise.reject(error);
  }
}
