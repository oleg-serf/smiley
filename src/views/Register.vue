<template>
  <section class="registration container">
    <h2 class="registration-title">Ready to make real change?</h2>
    <p
      class="registration-subtitle"
    >Let’s set up your profile and start matching you with others doing social and environmental good.</p>
    <h3>New to smiley movement? Join below</h3>

    <div class="join-btns-wrap">
      <button class="join-with-gmail-btn">
        <span>
          <svg
            width="17.999998"
            height="18.00001"
            viewBox="0 0 4.7624997 4.7625026"
            xmlns:svg="http://www.w3.org/2000/svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(-46.041083,-203.86351)">
              <g transform="matrix(0.00892606,0,0,0.00874948,46.041529,203.86367)">
                <path
                  style="fill:#4285f4"
                  d="m 533.5,278.4 c 0,-18.5 -1.5,-37.1 -4.7,-55.3 H 272.1 v 104.8 h 147 c -6.1,33.8 -25.7,63.7 -54.4,82.7 v 68 h 87.7 c 51.5,-47.4 81.1,-117.4 81.1,-200.2 z"
                />
                <path
                  style="fill:#34a853"
                  d="m 272.1,544.3 c 73.4,0 135.3,-24.1 180.4,-65.7 l -87.7,-68 c -24.4,16.6 -55.9,26 -92.6,26 -71,0 -131.2,-47.9 -152.8,-112.3 H 28.9 v 70.1 c 46.2,91.9 140.3,149.9 243.2,149.9 z"
                />
                <path
                  style="fill:#fbbc04"
                  d="m 119.3,324.3 c -11.4,-33.8 -11.4,-70.4 0,-104.2 V 150 H 28.9 c -38.6,76.9 -38.6,167.5 0,244.4 z"
                />
                <path
                  style="fill:#ea4335"
                  d="m 272.1,107.7 c 38.8,-0.6 76.3,14 104.4,40.8 v 0 L 454.2,70.8 C 405,24.6 339.7,-0.8 272.1,0 169.2,0 75.1,58 28.9,150 l 90.4,70.1 c 21.5,-64.5 81.8,-112.4 152.8,-112.4 z"
                />
              </g>
            </g>
          </svg>
        </span>Join with gmail
      </button>
      <button class="join-with-facebook-btn">
        <span>
          <svg
            version="1.1"
            viewBox="0 0 4.7625042 4.7625001"
            height="18"
            width="18.000015"
            xmlns:svg="http://www.w3.org/2000/svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(-46.300006,-202.84821)">
              <path
                style="fill:#3a559f;"
                d="m 46.300006,202.84821 v 4.7625 h 2.536322 v -1.83965 h -0.620015 v -0.751 h 0.620015 v -0.63071 c 0,-0.45869 0.371841,-0.83053 0.830534,-0.83053 h 0.648178 v 0.67531 h -0.463804 c -0.145749,0 -0.26391,0.11817 -0.26391,0.26392 v 0.52202 h 0.716062 l -0.09896,0.751 H 49.58733 v 1.83964 h 1.47518 v -4.7625 z"
              />
            </g>
          </svg>
        </span>Join with facebook
      </button>
      <!--      <button class="join-with-linkedin-btn">-->
      <!--        <span>-->
      <!--          <svg version="1.1" viewBox="0 0 18 18" height="18" width="18" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg">-->
      <!--            <path style="fill:#3a559f;" d="m 15.782004,1.0847458 c 0.73824,0 1.33664,0.598016 1.33664,1.336632 V 15.748106 c 0,0.73824 -0.598,1.33664 -1.33664,1.33664 H 2.4552761 c -0.7382,0 -1.336632,-0.598 -1.336632,-1.33664 V 2.4213778 c 0,-0.7382 0.598016,-1.336632 1.336632,-1.336632 z m -3.8484,6 c -1.13552,0 -1.91248,0.50192 -2.2583994,1.08504 l -0.056601,0.1036 v -1.08864 h -2.166624 v 7.6666402 h 2.3333035 v -3.71368 c 0,-1.2446402 0.4583204,-2.0363202 1.5600004,-2.0363202 0.75984,0 1.07864,0.67192 1.10488,1.8697602 l 0.0023,0.16656 v 3.71368 h 2.333281 v -4.23432 C 14.785288,8.3307458 14.238348,7.0847458 11.933608,7.0847458 Z m -6.1482959,0 h -2.333328 v 7.6666402 h 2.333328 z m -1.166664,-4 c -0.828336,0 -1.5,0.671664 -1.5,1.5 0,0.828336 0.671664,1.5 1.5,1.5 0.828336,0 1.5,-0.671664 1.5,-1.5 0,-0.828336 -0.671664,-1.5 -1.5,-1.5 z" />-->
      <!--          </svg>-->
      <!--        </span>Join with linkedin-->
      <!--      </button>-->
    </div>

    <h3>Or via email</h3>

    <form class="registration-wrap" @submit.prevent="onSubmit">
      <label for="reg-firstname">
        First Name
        <input
          type="text"
          name="reg-firstname"
          id="reg-firstname"
          placeholder
          v-model="firstName"
        />
      </label>

      <label for="reg-lastname">
        Last Name
        <input
          type="text"
          name="reg-lastname"
          id="reg-lastname"
          placeholder
          v-model="lastName"
        />
      </label>

      <label for="reg-email">
        Email Address
        <input
          type="email"
          name="reg-email"
          id="reg-email"
          placeholder
          v-model="email"
        />
      </label>

      <label for="reg-password">
        Create Password
        <input
          type="password"
          name="reg-password"
          id="reg-password"
          placeholder
          v-model="password"
        />
      </label>

      <label for="confirm-reg-password">
        Confirm Password
        <input
          type="password"
          name="confirm-reg-password"
          id="confirm-reg-password"
          placeholder
          v-model="confirmPassword"
        />
      </label>
      <div class="pledge-that">
        <p>I pledge that:</p>
        <ul>
          <li>I understand the Smiley Movement is about collaboration to create real impact and positive change the world.</li>
          <li>I will be positive and proactive in my comments and always look for solutions.</li>
          <li>I will aim to help other people and organisations reach their goals.</li>
        </ul>
      </div>
      <label class="register-checkbox">
        I am 16 years or older
        <input type="checkbox" v-model="isAdult" />
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
      <label class="register-checkbox">
        I accept the following
        <a href="#">Terms and Conditions</a>
        <input type="checkbox" v-model="accept" />
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
      <div class="register-btn-wrap">
        <button
          class="register-btn"
          type="submit"
          name="submit"
          value="register"
          :disabled="!isAdult || !accept"
        >Register</button>
      </div>
    </form>
  </section>
</template>

<script>
import axios from "../axios-auth";

export default {
  name: "Register",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      isAdult: false,
      accept: false
    };
  },
  mounted() {},
  methods: {
    onSubmit() {
      const formData = {
        full_name: this.firstName + " " + this.lastName,
        email: this.email,
        password: this.password,
        password_confirmation: this.confirmPassword
      };

      console.log(formData);
      this.$store.dispatch("user/signUp", formData);
    }
  }
};
</script>


<style lang="scss" scoped>
// ---------- SMILEY REGISTER PAGE ---------- //

.registration {
  text-align: center;
  margin-top: 172px;
  margin-bottom: 350px;
  .registration-title {
    color: $default-text;
    font: 700 56px/74px "Montserrat Bold", sans-serif;
    margin-bottom: 9px;
  }
  .registration-subtitle {
    color: $default-text;
    font: 400 22px/36px "Muli", sans-serif;
    max-width: 778px;
    margin: 0 auto 59px;
  }
  h3 {
    color: $default-text;
    font: 700 32px/48px "Montserrat Bold", sans-serif;
    text-transform: uppercase;
    margin: 0;
  }
  .join-btns-wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 38px;
    margin-bottom: 65px;
    @include xl {
      flex-direction: row;
    }
    button {
      box-sizing: border-box;
      border: 1px solid #ced0d2;
      border-radius: 40px;
      background-color: #ffffff;
      box-shadow: 0 3px 4px 0 rgba(96, 100, 112, 0.1);
      cursor: pointer;
      height: 81px;
      color: $default-text;
      font: 700 18px/22px "Montserrat Bold", sans-serif;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      text-align: left;
      padding-left: 40px;
      margin: 10px 13px;
      width: 100%;
      span {
        margin-right: 8px;
        display: flex;
      }
      svg {
        display: inline-block;
        height: 18px;
        width: 18px;
        vertical-align: text-top;
      }
    }
    .join-with-gmail-btn {
      max-width: 281px;
      @include xl {
        margin-top: 0;
      }
    }
    .join-with-facebook-btn,
    .join-with-linkedin-btn {
      max-width: 325px;
      span {
        margin-right: 18px;
      }
      @include xl {
        margin-top: 0;
        margin-left: 25px;
      }
    }
  }
  .registration-wrap {
    width: 100%;
    max-width: 762px;
    text-align: left;
    margin: 30px auto 0;
    label {
      color: $default-text;
      font: 700 16px/24px "Muli", sans-serif;
      input {
        display: block;
        margin: 7px auto 19px;
        width: 100%;
        box-sizing: border-box;
        height: 48px;
        border: 1px solid #c7c7c7;
        border-radius: 4px;
        font: 400 16px/24px "Inter Regular", sans-serif;
        color: #656565;
        padding: 0 48px 0 16px;
      }
    }
    .register-btn-wrap {
      margin-top: 41px;
    }
    .register-btn {
      border-radius: 4px;
      background-color: $default-yellow-btns;
      height: 48px;
      width: 100%;
      border: none;
      font: 700 16px/24px "Montserrat Bold", sans-serif;
      color: #000;
      text-transform: uppercase;
      cursor: pointer;

      &[disabled] {
        background-color: #e3e3de;
      }
    }
    .pledge-that {
      p {
        font: 700 16px/24px "Muli", sans-serif;
        text-transform: uppercase;
        margin-bottom: 13px;
      }
      font: 400 16px/24px "Muli", sans-serif;
      margin-top: 24px;
      ul {
        margin-left: 31px;
        margin-bottom: 24px;
        list-style: inherit;
      }
      li {
        line-height: 37px;
        padding-left: 8px;
        color: $default-text;
      }
    }
    .register-checkbox {
      position: relative;
      padding-left: 40px;
      margin-bottom: 22px;
      cursor: pointer;
      color: $default-text;
      font: 400 16px/24px "Muli", sans-serif;
      user-select: none;
      display: table;
      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }
      .register-checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 24px;
        width: 24px;
        border: 1px solid #c7c7c7;
        border-radius: 4px;
        box-sizing: border-box;
        transition: all 0.2s ease;
        svg {
          opacity: 0;
          position: absolute;
          top: 4px;
          left: 4px;
        }
      }
      &:last-of-type {
        margin-bottom: 0;
      }
    }
    .register-checkbox input:checked ~ .register-checkmark {
      background-color: $default-yellow-btns;
      border: none;
      transition: all 0.2s ease;
      svg {
        opacity: 1;
      }
    }
  }
}
</style>