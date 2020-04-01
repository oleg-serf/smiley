<template>
  <footer class="smiley-footer">
    <div class="container">
      <h3>Join</h3>
      <div class="footer-logo">
        <img src="/img/homepage/footer-logo.png" alt="footer logo" />
      </div>
      <form
        class="smiley-signup-form"
        action="https://smileymovement.us19.list-manage.com/subscribe/post?u=720898364c202fd6f72071ca6&amp;id=ee54f0e12c"
        method="POST"
        style="overflow: hidden"
      >
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="b_720898364c202fd6f72071ca6_ee54f0e12c" tabindex="-1" value />
        </div>
        <label for="signup-firstname">
          <input
            type="text"
            name="FNAME"
            id="signup-firstname"
            placeholder="First Name"
            min-length="2"
            required
          />
        </label>

        <label for="signup-lastname">
          <input type="text" name="LNAME" id="signup-lastname" placeholder="Last Name" />
        </label>

        <label for="email">
          <input type="email" name="EMAIL" id="email" placeholder="Your Email" required />
        </label>
        <div class="signup-btn-wrap">
          <button class="btn-signup" type="submit" name="submit" value="Subscribe">Subscribe</button>
        </div>
      </form>
      <div class="footer-menu">
        <ul>
          <li>
            <router-link :to="{name: 'partners'}">Partners</router-link>
          </li>
          <li>
            <router-link :to="{name: 'terms'}">Terms and Conditions</router-link>
          </li>
          <!-- TODO: Make support Search + FAQ page -->
          <!-- <li>
            <a href="#">Support</a>
          </li>-->
          <li>
            <router-link :to="{name: 'contact'}">Contact Us</router-link>
          </li>
        </ul>
      </div>

      <social-icons />
    </div>
  </footer>
</template>

<script>
import axios from "../axios-auth";

import SocialIcons from "@/components/footer/SocialIcons";

export default {
  name: "Header",
  components: {
    SocialIcons
  },
  data() {
    return {
      form: {
        FNAME: "",
        LNAME: "",
        EMAIL: ""
      }
    };
  },
  mounted() {},
  methods: {
    subscribeMailchimp() {
      // console.log("testing subscription form");
      // const params = new URLSeachParams();
      // params.append("FNAME", this.form.FNAME);
      // params.append("LNAME", this.form.LNAME);
      // params.append("EMAIL", this.form.EMAIL);
      // axios
      //   .post(
      //     "https://smileymovement.us19.list-manage.com/subscribe/post?u=720898364c202fd6f72071ca6&amp;id=ee54f0e12c",
      //     this.form
      //   )
      //   .then(res => console.log("Success", res))
      //   .catch(res => console.error(res));
    }
  }
};
</script>


<style lang="scss" scoped>
.smiley-footer {
  padding: 57px 0 105px;
  text-align: center;
  position: relative;
  background-color: #3d465a;
  // &:before {
  //   content: "";
  //   height: 1px;
  //   width: 100%;
  //   display: block;
  //   background-color: #3d465a;
  //   position: absolute;
  //   top: 0;
  //   opacity: 0.28;
  // }
  h3 {
    color: $default-text;
    font: 32px/48px "Montserrat Bold", sans-serif;
    text-transform: uppercase;
    margin-bottom: -12px;
    margin-top: 0;
    margin-right: 42px;
    @include md {
      margin-right: 134px;
    }
  }
  .footer-logo {
    width: 100%;
    max-width: 384px;
    margin: 0 auto;
    img {
      width: 100%;
    }
    @include md {
      transform: translateX(-50px);
    }
  }
  .smiley-signup-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    label,
    input {
      max-width: 331px;
      width: 100%;
    }
    @include md {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      label {
        margin-right: 30px;
        &:last-of-type {
          margin-right: 0;
        }
      }
    }
    input {
      border: 1px solid #c7c7c7;
      box-sizing: border-box;
      border-radius: 4px;
      height: 48px;
      margin-bottom: 20px;
      text-indent: 16px;
      font: 400 16px/24px "Montserrat Regular", sans-serif;
      &:focus {
        border: 1px solid #eeb400;
        box-shadow: 0 2px 31px 13px rgba(0, 0, 0, 0.05);
        transition: 0.2s ease-in;
      }
      @include xxl {
        margin-bottom: 0;
      }
      &::placeholder {
        color: #656565;
        font: 400 16px/24px "Muli", sans-serif;
      }
    }
    .signup-btn-wrap {
      width: 100%;
      @include xl {
        max-width: 218px;
        margin: -1px 30px 0;
      }
    }
    .btn-signup {
      border: none;
      box-sizing: border-box;
      background-color: $default-orange-btns;
      border-radius: 4px;
      color: #fff;
      height: 48px;
      max-width: 218px;
      margin-bottom: -1px;
      text-transform: uppercase;
      font: 700 16px/24px "Montserrat Bold", sans-serif;
      width: 100%;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: #c09205;
      }
    }
  }
  .footer-menu {
    margin-top: 24px;
    a {
      color: #fff;
      font: 400 22px/30px "Muli", sans-serif;
      text-decoration: none;
    }
    @include md {
      li {
        display: inline-block;
        margin: 0 25px;
      }
    }
  }
}

.social-icons svg {
  fill: #fff !important;
}
</style>