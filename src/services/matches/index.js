import axios from '../interceptor';
import * as config from '../../constants/config';

export const findAll = async (params) => {
  try {
    const { data } = await axios
      .get(`${config.API_URL}/matches`, {
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
      .get(`${config.API_URL}/matches/${_id}`);

    return data.data;
  } catch (error) {
    return Promise.reject(error);
  }
}
