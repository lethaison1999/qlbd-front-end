import axios from '../interceptor';
import * as config from '../../constants/config';

export const findAll = async (params) => {
  try {
    const { data } = await axios
      .get(`${config.API_URL}/seasons`, {
        params
      });

    return data.data;
  } catch (error) {
    return Promise.reject(error);
  }
}
