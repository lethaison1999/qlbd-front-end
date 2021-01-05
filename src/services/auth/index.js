import axios from '../interceptor';
import * as config from '../../constants/config';

export const passwordLogin = async (loginData) => {
  try {
    const { data } = await axios
      .post(`${config.API_URL}/users/login`, loginData);

    return data.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

