import axios from "axios";

export const configureAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/wtw`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onFulfilled = (response) => response;
  const onRejected = (err) => err;

  api.interceptors.response.use(onFulfilled, onRejected);

  return api;
};
