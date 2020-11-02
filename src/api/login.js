import axios from 'axios';
import qs from 'qs';

export async function login(phoneNumber, password) {

  const data = {
    phoneNumber: phoneNumber,
    password: password,
  };
  const options = {
    method: 'POST',
    url: authenticationAPI.login,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify(data),
  };

  const response = await axios(options)
    .then(async (res) => {
    })

  return response;
}

