<template>
  <section class="subscribe container" :class="[forMobile ? 'for-mobile' : '']">
    <h3 class="subscribe__title" v-if="forMobile">Sign up to our newsletter</h3>
    <h3 class="subscribe__title" v-else>
      Stay in touch - Sign up to our newsletter for updates on news and events
    </h3>
    <form action="" class="subscribe__form" @submit.prevent="subscribe">
      <input
        v-if="!forMobile"
        class="subscribe__input"
        type="text"
        required
        placeholder="Your Name..."
        minlength="2"
        v-model.trim="name"
      />
      <input
        :class="[forMobile ? 'for-mobile' : '']"
        class="subscribe__input"
        type="email"
        required
        placeholder="Your Email..."
        v-model.trim="email"
      />
      <button
        class="subscribe__button"
        :class="[forMobile ? 'for-mobile' : '']"
      >
        Subscribe
      </button>
    </form>
  </section>
</template>

<script>
import axios from "@/axios-auth";

export default {
  name: "SubscribeForm",
  props: {
    forMobile: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    subscribe() {
      const name_array = this.name.split(' ');
      const user_data = {
        first_name: name_array.shift(),
        last_name: name_array.join(' '),
        email: this.email,
      };
      axios
          .post("/subscribe", user_data)
          .then(response => {
            if (response.status) {
              this.$swal({
                title: "Subscribed",
                text: "Thank you for subscribing",
              });
            } else {
              this.$swal({
                title: "Error",
                type: 'error',
                text: response.message,
              });
            }
          })
          .catch(error => console.error(error));
    },
  },
};
</script>

<style lang="scss" scoped>
.subscribe {
  margin-top: 2rem;
  margin-bottom: 2rem;
  &.for-mobile {
    padding-left: 0;
    padding-right: 0;
    margin-right: 1rem;
    margin-left: 1rem;
    margin-top: 0;
    padding-top: 2rem;
    border-top: 2px solid #ffe300;
    .subscribe__title {
      font-size: 1.6rem;
      font-family: "Gotham Bold", sans-serif !important;
      text-align: left;
    }
    .subscribe__input {
      border-radius: 0.8rem;
      padding: 2.3rem 0.9rem;
    }
    .subscribe__button {
      border-radius: 3.5rem;
      padding: 2.2rem 1rem;
    }
  }

  &__title {
    @include font-size(1.5rem);
    margin-bottom: 1.5rem;
    text-align: center;
    font-weight: bold;
    // &:hover {
      //color: #ffe300;
    // }
  }

  &__form {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    max-width: 1410px;
    width: 100%;
    margin: 0 auto;

    @include mdMax {
      display: flex;
      flex-direction: column;
    }
    /*@include mdMax {
        grid-template-columns: repeat(2, 1fr);
        max-width: 540px;
      }
      @include smMax {
        grid-template-columns: 1fr;
        max-width: 420px;
      }*/
  }

  &__input {
    text-align: center;
    border-radius: 1rem;
    border: 1px solid #707070;
    font-size: 1rem;
    @include smMax {
      padding: 0.67rem 0.5rem;
    }
    @include mdMax {
      padding: 0.67rem 0.5rem;
    }

    &:focus:required {
      border-color: #FFEC00 !important;
    }
  }

  &__button {
    background-color: #ffe300;
    box-shadow: 0px 1px 3px #000000;
    border: none;
    border-radius: 44px;
    font-size: 1.5rem;
    line-height: 1;
    padding: 1.2rem 1rem;
    transition: background-color .2s, box-shadow .2s;

    &:hover {
      cursor: pointer;
      background-color: darken(#ffe300, 2%);
      box-shadow: 0px 3px 6px rgba(0,0,0,.3);
    }

    @include mdMax {
      grid-column: 1 / span 2;
      padding: 0.8rem 1rem;
    }
    @include smMax {
      grid-column: 1;
    }
  }
}
</style>
