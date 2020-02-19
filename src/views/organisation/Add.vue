<template>
  <div>
    <section class="customize-organisation container">
      <form class="add-organisation-info" @submit.prevent="onSubmit">
        <div class="customize-organisation-content">
          <h2 class="customize-organisation-title">Customise organisation</h2>

          <div class="upload-organisation-image-wrap">
            <div class="organisation-image">
              <img
                :src="reg.organisation_logo"
                style="width: 100%; height: 100%; background-color: rgba(0,0,0,.5); display: block;"
              />
            </div>

            <div class="add-org-photo">
              <input type="file" class="file-input" ref="fileInput" @input="onSelectFile" />
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 74.207 74.207"
                style="enable-background:new 0 0 74.207 74.207;"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M57.746,14.658h-2.757l-1.021-3.363c-0.965-3.178-3.844-5.313-7.164-5.313H28.801c-3.321,0-6.201,2.135-7.165,5.313
                      l-1.021,3.363h-4.153C7.385,14.658,0,22.043,0,31.121v20.642c0,9.077,7.385,16.462,16.462,16.462h41.283
                      c9.077,0,16.462-7.385,16.462-16.462V31.121C74.208,22.043,66.823,14.658,57.746,14.658z M68.208,51.762
                      c0,5.769-4.693,10.462-10.462,10.462H16.462C10.693,62.223,6,57.53,6,51.762V31.121c0-5.769,4.693-10.462,10.462-10.462h8.603
                      l2.313-7.621c0.192-0.631,0.764-1.055,1.423-1.055h18.003c0.659,0,1.23,0.424,1.423,1.057l2.314,7.619h7.204
                      c5.769,0,10.462,4.693,10.462,10.462L68.208,51.762L68.208,51.762z"
                    fill="#fff"
                  />
                  <path
                    d="M37.228,25.406c-8.844,0-16.04,7.195-16.04,16.04c0,8.844,7.195,16.039,16.04,16.039s16.041-7.195,16.041-16.039
                      C53.269,32.601,46.073,25.406,37.228,25.406z M37.228,51.486c-5.536,0-10.04-4.504-10.04-10.039c0-5.536,4.504-10.04,10.04-10.04
                      c5.537,0,10.041,4.504,10.041,10.04C47.269,46.982,42.765,51.486,37.228,51.486z"
                    fill="#fff"
                  />
                </g>
              </svg>
            </div>
          </div>

          <p
            style="margin-left: auto; margin-right: auto; text-align: center;"
          >Upload an organisation logo</p>

          <label for="organisation-name">
            Organisation Name *
            <input
              type="text"
              name="organisation-name"
              id="organisation-name"
              required
              v-model="reg.organisation_name"
            />
          </label>

          <label for="organisation-location">
            Organisation Location *
            <input
              type="text"
              name="organisation-location"
              id="organisation-location"
              required
              v-model="reg.organisation_location"
            />
          </label>

          <label for="organisation-website">
            Organisation Website
            <input
              type="text"
              name="organisation-website"
              id="organisation-website"
              placeholder="www.yoursite.co.uk"
              v-model="reg.organisation_website"
            />
          </label>

          <label for="organisation-facebook">
            Facebook
            <input
              type="url"
              name="organisation-facebook"
              id="organisation-facebook"
              v-model="reg.facebook"
            />
          </label>
          <label for="organisation-twitter">
            Twitter
            <input
              type="url"
              name="organisation-twitter"
              id="organisation-twitter"
              v-model="reg.twitter"
            />
          </label>
          <label for="organisation-instagram">
            Instagram
            <input
              type="url"
              name="organisation-instagram"
              id="organisation-instagram"
              v-model="reg.instagram"
            />
          </label>

          <div class="add-organisation-info">
            <label for="organisation-description">Add a short description *</label>
            <textarea
              id="organisation-description"
              name="organisation-description"
              rows="3"
              placeholder
              required
              v-model="reg.description"
            ></textarea>
          </div>
          <!-- <label class="upload-video-label" for="upload-video">
              Upload a video:
              <div class="input-wrap">
                <input
                  type="text"
                  name="upload-video"
                  id="upload-video"
                  placeholder="Youtube or vimeo link"
                  disabled
                />
                <input type="file" />
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 6.3499951 6.3499999"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="translate(-4.3454221,-40.67372)">
                    <path
                      d="m 5.7980336,46.436746 c -0.046131,-0.02633 -0.1049592,-0.04842 -0.1307281,-0.04908 -0.063388,-0.0016 -0.373045,-0.210159 -0.4570031,-0.307789 -0.2388337,-0.277728 -0.3247986,-0.493042 -0.34292,-0.858908 -0.011789,-0.238018 -0.00145,-0.309712 0.072556,-0.503135 0.1009379,-0.263812 0.2052481,-0.395573 0.7156047,-0.903923 0.348519,-0.347148 0.3873514,-0.376052 0.5052281,-0.376052 0.1761254,0 0.2478761,0.06072 0.2478761,0.209798 0,0.111692 -0.037508,0.159777 -0.4427303,0.567619 -0.5123361,0.515644 -0.6040354,0.662331 -0.6040354,0.966245 0,0.162338 0.018904,0.236784 0.091577,0.36063 0.1142436,0.194691 0.1562941,0.236688 0.3512365,0.350785 0.1240052,0.07258 0.1985469,0.09146 0.3610929,0.09146 0.3018106,0 0.4507544,-0.09252 0.9665109,-0.600363 0.4193794,-0.412944 0.4528595,-0.438356 0.5775608,-0.438356 0.1530027,0 0.2018348,0.06041 0.2018348,0.249683 0,0.109066 -0.038216,0.158061 -0.4173657,0.535079 -0.5048198,0.50198 -0.5883771,0.567446 -0.8598868,0.673713 -0.2493292,0.09759 -0.6923284,0.114848 -0.836408,0.03259 z m 0.9729552,-1.859641 c -0.039323,-0.03927 -0.067101,-0.111691 -0.067101,-0.174932 0,-0.09538 0.073178,-0.181003 0.630046,-0.737156 0.5568689,-0.556153 0.6425972,-0.629237 0.7381045,-0.629237 0.1403008,0 0.2422573,0.101828 0.2422573,0.241948 0,0.09539 -0.073176,0.181001 -0.6300461,0.737155 -0.5568689,0.556154 -0.6425958,0.629236 -0.7381032,0.629236 -0.063324,0 -0.135836,-0.02774 -0.1751577,-0.06702 z m 1.9039714,-0.371261 c -0.04016,-0.02336 -0.058713,-0.07578 -0.058713,-0.165871 0,-0.123919 0.025996,-0.158051 0.4389198,-0.576333 0.5084983,-0.515093 0.6011361,-0.663846 0.6011361,-0.965268 0,-0.162336 -0.018908,-0.236783 -0.091576,-0.360629 C 9.4504832,41.943052 9.4084325,41.901055 9.2134909,41.786958 9.0894855,41.714383 9.0149427,41.6955 8.8523967,41.6955 c -0.3018108,0 -0.4507532,0.09252 -0.966511,0.600362 -0.4193782,0.412945 -0.4528581,0.438355 -0.5775596,0.438355 -0.1528631,0 -0.2018361,-0.06042 -0.2018361,-0.249002 0,-0.107345 0.037955,-0.157386 0.3765362,-0.496432 0.5090044,-0.5097 0.6409348,-0.613876 0.9050861,-0.714684 0.1936725,-0.07391 0.2654586,-0.08424 0.5037838,-0.07247 0.4731061,0.02338 0.7893565,0.197903 1.0580065,0.583885 0.1260064,0.181038 0.1865674,0.384035 0.2008984,0.673403 0.01179,0.23802 0.0014,0.309714 -0.07255,0.503137 -0.1009384,0.263812 -0.2052484,0.395572 -0.7156055,0.903922 -0.347885,0.346518 -0.3874097,0.375972 -0.5032526,0.375034 -0.069143,-5.07e-4 -0.1521354,-0.01639 -0.1844284,-0.03517 z"
                      style="fill:#000000;stroke-width:0.0335286"
                    />
                  </g>
                </svg>
              </div>
            </label>
            <label class="upload-images-label" for="upload-images">
              Add some images:
              <div class="input-wrap">
                <input
                  type="text"
                  name="upload-images"
                  id="upload-images"
                  placeholder="Upload images"
                  disabled
                />
                <input type="file" />
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 6.3499951 6.3499999"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="translate(-4.3454221,-40.67372)">
                    <path
                      d="m 5.7980336,46.436746 c -0.046131,-0.02633 -0.1049592,-0.04842 -0.1307281,-0.04908 -0.063388,-0.0016 -0.373045,-0.210159 -0.4570031,-0.307789 -0.2388337,-0.277728 -0.3247986,-0.493042 -0.34292,-0.858908 -0.011789,-0.238018 -0.00145,-0.309712 0.072556,-0.503135 0.1009379,-0.263812 0.2052481,-0.395573 0.7156047,-0.903923 0.348519,-0.347148 0.3873514,-0.376052 0.5052281,-0.376052 0.1761254,0 0.2478761,0.06072 0.2478761,0.209798 0,0.111692 -0.037508,0.159777 -0.4427303,0.567619 -0.5123361,0.515644 -0.6040354,0.662331 -0.6040354,0.966245 0,0.162338 0.018904,0.236784 0.091577,0.36063 0.1142436,0.194691 0.1562941,0.236688 0.3512365,0.350785 0.1240052,0.07258 0.1985469,0.09146 0.3610929,0.09146 0.3018106,0 0.4507544,-0.09252 0.9665109,-0.600363 0.4193794,-0.412944 0.4528595,-0.438356 0.5775608,-0.438356 0.1530027,0 0.2018348,0.06041 0.2018348,0.249683 0,0.109066 -0.038216,0.158061 -0.4173657,0.535079 -0.5048198,0.50198 -0.5883771,0.567446 -0.8598868,0.673713 -0.2493292,0.09759 -0.6923284,0.114848 -0.836408,0.03259 z m 0.9729552,-1.859641 c -0.039323,-0.03927 -0.067101,-0.111691 -0.067101,-0.174932 0,-0.09538 0.073178,-0.181003 0.630046,-0.737156 0.5568689,-0.556153 0.6425972,-0.629237 0.7381045,-0.629237 0.1403008,0 0.2422573,0.101828 0.2422573,0.241948 0,0.09539 -0.073176,0.181001 -0.6300461,0.737155 -0.5568689,0.556154 -0.6425958,0.629236 -0.7381032,0.629236 -0.063324,0 -0.135836,-0.02774 -0.1751577,-0.06702 z m 1.9039714,-0.371261 c -0.04016,-0.02336 -0.058713,-0.07578 -0.058713,-0.165871 0,-0.123919 0.025996,-0.158051 0.4389198,-0.576333 0.5084983,-0.515093 0.6011361,-0.663846 0.6011361,-0.965268 0,-0.162336 -0.018908,-0.236783 -0.091576,-0.360629 C 9.4504832,41.943052 9.4084325,41.901055 9.2134909,41.786958 9.0894855,41.714383 9.0149427,41.6955 8.8523967,41.6955 c -0.3018108,0 -0.4507532,0.09252 -0.966511,0.600362 -0.4193782,0.412945 -0.4528581,0.438355 -0.5775596,0.438355 -0.1528631,0 -0.2018361,-0.06042 -0.2018361,-0.249002 0,-0.107345 0.037955,-0.157386 0.3765362,-0.496432 0.5090044,-0.5097 0.6409348,-0.613876 0.9050861,-0.714684 0.1936725,-0.07391 0.2654586,-0.08424 0.5037838,-0.07247 0.4731061,0.02338 0.7893565,0.197903 1.0580065,0.583885 0.1260064,0.181038 0.1865674,0.384035 0.2008984,0.673403 0.01179,0.23802 0.0014,0.309714 -0.07255,0.503137 -0.1009384,0.263812 -0.2052484,0.395572 -0.7156055,0.903922 -0.347885,0.346518 -0.3874097,0.375972 -0.5032526,0.375034 -0.069143,-5.07e-4 -0.1521354,-0.01639 -0.1844284,-0.03517 z"
                      style="fill:#000000;stroke-width:0.0335286"
                    />
                  </g>
                </svg>
              </div>
            </label>
          </div>-->

          <div class="checkbox-wrap">
            <label class="register-checkbox">
              I accept the following
              <a href="#">Terms and Conditions</a>
              <input type="checkbox" class="fixed-checkbox" required />
              <span class="register-checkmark">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.91006 10.4959L3.7071 8.29291C3.31658 7.90239 2.68342 7.90239 2.29289 8.29291C1.90237 8.68343 1.90237 9.3166 2.29289 9.70712L5.29288 12.7071C5.7168 13.131 6.4159 13.0892 6.7863 12.6178L13.7863 4.61786C14.1275 4.18359 14.0521 3.55494 13.6178 3.21372C13.1835 2.87251 12.5549 2.94795 12.2136 3.38222L5.91006 10.4959Z"
                    fill="#000"
                  />
                </svg>
              </span>
            </label>
          </div>

          <div class="finish-btn-wrap">
            <button
              class="finish-btn"
              type="submit"
              name="submit"
              value="finish-creating"
            >FINISH CREATING YOUR ORGANISATION</button>
          </div>
        </div>
      </form>
    </section>

    <Footer />
  </div>
</template>

<script>
import axios from "@/axios-auth";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "Customize-organisation",
  data() {
    return {
      reg: {
        organisation_name: "",
        organisation_location: "",
        organisation_website: "",
        organisation_logo: null,
        facebook: "",
        twitter: "",
        instagram: "",
        description: ""
      },
      addLinkFacebook: false,
      addLinkTwitter: false
    };
  },
  methods: {
    onSubmit() {
      axios
        .post("/organisations", this.reg)
        .then(res => {
          console.log(res);
          this.$swal("Your organisation was registered", "", "success");
        })
        .catch(error => console.error(error));
    },
    chooseImage() {
      this.$refs.fileInput.click();
    },
    onSelectFile() {
      const input = this.$refs.fileInput;
      const files = input.files;
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
          this.reg.organisation_logo = e.target.result;
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      }
    }
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/sections/_organisation-customize";

.fixed-checkbox {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 24px !important;
  height: 24px !important;
}

.file-input {
  z-index: 5;
}
</style>