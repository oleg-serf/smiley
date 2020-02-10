import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'
import "regenerator-runtime";

import Paginate from 'vuejs-paginate'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.component('paginate', Paginate)
Vue.use(VueSweetalert2);

Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCZev7rHIwpAuuEVuVAFWEjxyXenFiUU6A',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
})

axios.defaults.baseURL = 'https://new-admin.smileymovement.org/api'
// axios.defaults.headers.common['Authorization'] = 'fasfdsa'
axios.defaults.headers.get['Accepts'] = 'application/json'

// const reqInterceptor = axios.interceptors.request.use(config => {
//   console.log('Request Interceptor', config)
//   return config
// })
// const resInterceptor = axios.interceptors.response.use(res => {
//   console.log('Response Interceptor', res)
//   return res
// })

// axios.interceptors.request.eject(reqInterceptor)
// axios.interceptors.response.eject(resInterceptor)

Vue.prototype.$settings = {
  images_path: {
    events: `https://new-smiley.s3.eu-west-2.amazonaws.com/events/`,
    speakers: `https://new-smiley.s3.eu-west-2.amazonaws.com/speakers/`,
    partners: `https://new-smiley.s3.eu-west-2.amazonaws.com/partners/`,
    news: `https://new-smiley.s3.eu-west-2.amazonaws.com/news/`,
  },
  social: {
    facebook: 'https://facebook.com/SmileyMovement/',
    twitter: 'https://twitter.com/Smiley_Movement',
    instagram: 'https://www.instagram.com/smileymovement',
    linkedin: 'https://linkedin.com/company/smiley-movement',
  }
}


// TODO: Filters in separate file
Vue.filter('formatTime', function (time) {
  time = time
    .toString()
    .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) {
    time = time.slice(1);
    time[5] = +time[0] < 12 ? "AM" : "PM";
    time[0] = +time[0] % 12 || 12;
    time[3] = "";
  }
  return time.join("");
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')