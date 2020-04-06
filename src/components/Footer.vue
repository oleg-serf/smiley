<template>
  <div class="footer-wrapper">
    <div class="container">
      <form
        class="smiley-signup-form"
        action="https://smileymovement.us19.list-manage.com/subscribe/post?u=720898364c202fd6f72071ca6&amp;id=ee54f0e12c"
        method="POST"
        style="overflow: hidden"
      >
        <div class="signup-logo">
          <img src="/img/homepage/footer-logo.png" alt="footer logo" />
        </div>
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
          <input
            type="text"
            name="LNAME"
            id="signup-lastname"
            placeholder="Last Name"
            min-length="2"
            required
          />
        </label>

        <label for="email">
          <input
            type="email"
            name="EMAIL"
            id="email"
            placeholder="Your Email"
            required
            class="mailchimp-form__input"
          />
        </label>
        <div class="signup-btn-wrap">
          <button class="btn-signup" type="submit" name="submit" value="Subscribe">Subscribe</button>
        </div>
      </form>
    </div>
    <footer class="main-footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-column">
            <img src="https://smileymovement.org/images/logos/white-yellow.png" class="footer-logo" />
          </div>
          <div class="footer-column"></div>
          <div class="footer-column">
            <div class="footer-section">
              <div class="footer-section__title">Support</div>
              <ul class="footer-section__menu">
                <li>
                  <router-link to>Partners</router-link>
                </li>
                <li>
                  <router-link to>Terms and Conditions</router-link>
                </li>
                <li>
                  <router-link to>Support</router-link>
                </li>
                <li>
                  <router-link to>Contact Us</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-column footer-column__alternative-logo">
            <span>A philanthropic venture from</span>
            <br />
            <img
              src="https://smileymovement.org/images/logos/Smiley-White@2x.png"
              class="footer-logo-bottom"
              alt
            />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-footer {
  background-color: #3d465a;
  padding-top: 30px;
  padding-bottom: 30px;
}

.footer-top,
.footer-bottom {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  color: #fff;

  .footer-column:nth-child(2) {
    grid-column: 2 / span 2;
  }
}

.footer-bottom {
  @include margin-top(2rem);
  @include padding-top(2rem);
  border-top: 2px solid #50586a;
}

.footer-logo {
  max-width: 200px;
  width: 100%;
  height: auto;
}

.footer-section {
  &:not(:last-child) {
    @include margin-bottom(1.5rem);
  }
  .footer-section__title {
    text-transform: uppercase;
    font-family: "Montserrat Regular";
    letter-spacing: 4px;
    color: #fff;
    @include margin-bottom(0.7rem);
  }
  .footer-section__content {
    font-family: "Montserrat Regular";
    color: #fff;
  }

  .footer-section__menu {
    font-family: "Montserrat Regular";

    a {
      text-decoration: none;
      color: #fff;
      border-bottom: 1px solid transparent;
      transition: border-color 0.4s;

      &:hover {
        border-color: #fff;
      }
    }
  }
}

.footer-logo-bottom {
  margin-top: 8px;
  max-width: 110px;
  width: 100%;
  height: auto;
}

.footer-column__form {
  grid-column: 1 / span 2;
}

.footer-column__alternative-logo {
  grid-column: 4 / span 1 !important;
  span {
    font-family: "Montserrat Regular", sans-serif;
  }
  .footer-logo-bottom {
    margin-top: 8px;
    max-width: 110px;
    width: 100%;
    height: auto;
  }
}

.smiley-signup-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 30px;

  .signup-logo {
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
  }
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
</style>