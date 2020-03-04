import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://new-admin.smileymovement.org/api'
});


// instance.defaults.headers.common['SOMETHING'] = 'something';

const reqInterceptor = instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${ token }`;
  // console.log('Request Interceptor', config)
  return config
})
const resInterceptor = instance.interceptors.response.use(res => {
  // console.log('Response Interceptor', res)
  return res
})

export default instance;