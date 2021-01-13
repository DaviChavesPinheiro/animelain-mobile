import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nodedeploy.manganero.site',
});

export default api;
