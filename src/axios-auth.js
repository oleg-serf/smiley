import axios from 'axios'
import Vue from 'vue'



const instance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE
});


// instance.defaults.headers.common['SOMETHING'] = 'something';

const reqInterceptor = instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${ token }`;
  return config
})
const resInterceptor = instance.interceptors.response.use(
  function (res) {
    // console.log('good');
    return res
  },
  function (error) {
    // console.log('bad');
    // Vue.swal({
    //   text: error.data.message,
    //   type: 'error'
    // });
    return error
  }
);

export default instance;