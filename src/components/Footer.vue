<template>
  <div class="footer-wrapper">
    <div class="container">
      <form
        class="mailchimp-form"
        action="https://smileymovement.us19.list-manage.com/subscribe/post?u=720898364c202fd6f72071ca6&amp;id=ee54f0e12c"
        method="POST"
        style="overflow: hidden"
      >
        <div class="mailchimp-form__header">
          <h3 class="mailchimp-form__title">Join</h3>
          <div class="mailchimp-form__logo">
            <img src="/img/homepage/footer-logo.png" alt="footer logo" />
          </div>
        </div>
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="b_720898364c202fd6f72071ca6_ee54f0e12c" tabindex="-1" value />
        </div>
        <label class="mailchimp-form__label" for="signup-firstname">
          <input
            type="text"
            name="FNAME"
            id="signup-firstname"
            placeholder="First Name"
            min-length="2"
            required
            class="mailchimp-form__input"
          />
        </label>

        <label class="mailchimp-form__label" for="signup-lastname">
          <input
            type="text"
            name="LNAME"
            id="signup-lastname"
            placeholder="Last Name"
            class="mailchimp-form__input"
          />
        </label>

        <label class="mailchimp-form__label" for="email">
          <input
            type="email"
            name="EMAIL"
            id="email"
            placeholder="Your Email"
            required
            class="mailchimp-form__input"
          />
        </label>
        <div class="mailchimp-form__label">
          <button
            class="mailchimp-form__submit"
            type="submit"
            name="submit"
            value="Subscribe"
          >Subscribe</button>
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

.mailchimp-form {
  display: grid;
  grid-gap: 15px;
  max-width: 768px;
  grid-template-columns: repeat(2, 1fr);
  margin-left: auto;
  margin-right: auto;
  @include margin-top(2.5rem);
  @include margin-bottom(2.5rem);

  .mailchimp-form__header {
    grid-column: 1 / span 2;
    text-align: center;
  }

  .mailchimp-form__title {
    font-family: "Montserrat Bold", sans-serif;
    @include font-size(2rem);
    margin-bottom: -16px;
    text-transform: uppercase;
  }

  .mailchimp-form__logo {
    max-width: 320px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    @include margin-bottom(2rem);

    img {
      max-width: 100%;
      width: 100%;
      height: auto;
    }
  }

  .mailchimp-form__label {
    width: 100%;
  }
  .mailchimp-form__input {
    width: 100%;
    font-family: "Montserrat Regular";
    padding: 10px 10px;
    font-size: 1rem;
    box-sizing: border-box;
  }
  .mailchimp-form__submit {
    width: 100%;
    font-family: "Montserrat Bold";
    padding: 10px 10px;
    font-size: 1rem;
    box-sizing: border-box;
    background-color: #f4ed3b;
  }
}
</style>