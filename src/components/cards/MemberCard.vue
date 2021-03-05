<template>
  <div class="member-item">
    <div class="member-item__logo">
      <router-link :to="linkedComponent">
        <img
          v-if="member.avatar != null"
          :src="$settings.images_path.users + 'm_' + member.avatar"
          alt
          title
          class="member-item__image"
        />
        <div v-else>{{ member.initials }}</div>
      </router-link>
    </div>
    <div class="member-item__info">
      <h2 class="member-item__info__title">
        {{ member.name }}
      </h2>
      <div class="member-item__info__location">
        <img src="/img/icons/location-icon.svg" alt="city"/>
        <p>{{ member.city }}</p>
      </div>
      <p class="member-item__info__skill">
        {{ member.job_title }}
      </p>
      <p class="member-item__info__work">
        Self employed
      </p>
    </div>
    <div class="member-item__actions">
      <VButton
        class="member-item__actions__button"
        size="height_45"
        shape="round"
        @click.native.prevent="connectFriend"
      >
        Connect
      </VButton>
      <VButton
        class="member-item__actions__button"
        size="height_45"
        shape="round"
      >
        <router-link :to="{name: 'member', params: {slug: member.slug}}"> Profile </router-link>
      </VButton>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/app/VButton";
import axios from "@/axios-auth";

export default {
  name: "MemberCard",
  components: {
    VButton
  },
  data() {
    return {};
  },
  props: {
    member: {
      type: Object,
      required: true
    }
  },
  computed: {
    loggedIn() {
      return this.$store.getters["user/isAuthenticated"];
    },
    linkedComponent: function () {
      return {
        name: this.member.admin_created ? 'member-by-smiley' : 'member',
        params: {
          slug: this.member.slug
        }
      }
    }
  },
  methods: {
    follow() {
      axios
          .post("/members/" + this.member.slug + "/follow")
          .then(result => {
            console.log("following", result);
            this.$swal({
              text: result.data.message,
              icon: "info"
            });
            this.member.is_following = true;
          })
          .catch(err => {
            // TODO: add error
          });
    },
    unfollow() {
      axios
          .post("/members/" + this.member.slug + "/un-follow")
          .then(result => {
            console.log("cancel following", result);
            this.$swal({
              text: result.data.message,
              icon: "info"
            });
            this.member.is_following = false;
          })
          .catch(err => {
            // TODO: add error
          });
    },
    connectFriend() {
      axios
        .post("/users/friends/request", {slug: this.member.slug})
        .then(res => {
          if (res.data?.success == true) {
            this.$emit('reload_lists');
            this.$swal({text: 'Request Sent'});
          } else {
            this.$swal({text: res.data.messages});
            this.$emit('reload_lists');
          }
        })
        .catch(error => console.error(error));
    },
  }
};
</script>

<style lang="scss" scoped>
.member-item {
  border: 1px solid #d8d8d8;
  padding: 20px 15px;
  background-color: #fff;
  transition: transform 0.15s, box-shadow 0.15s;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  /*@include md {
    &:hover {
      transform: scale(1.01);
      box-shadow: 0 15px 29px -23px rgba(0, 0, 0, 0.3);
    }
  }*/
  &__info {
    text-align: left;
    width: 100%;

    &__title {
      color: #393939;
      font-family: "Gotham Bold", sans-serif;
      font-size: 16px;
      line-height: 18px;
    }
    &__skill {
      height: 1rem;
      margin-top: 1rem;
    }
    &__work {
      height: 3rem;
    }
    &__location {
      display: flex;
      height: 1.5rem;
      color: #DC3E2B;
      font-family: "Gotham Bold", sans-serif;
      font-size: 16px;
      line-height: 16px;
      
      img {
        height: 1.5rem;
      }
      p { margin: 0; padding: 6px 0 0 5px }
    }
  }
  &__actions {
    display: flex;
    justify-content: space-around;
    width: 100%;
    &__button {
      display: flex;
      font-size: 18px;
    }

    a {
      color: black;      
    }
  }

  .member-item__logo {
    a {
      border-radius: 50%;
      width: 287px;
      height: 287px;
      overflow: hidden;
      line-height: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px auto 14px auto;
      background-color: #e5e9f0;
      text-decoration: none;
      color: #393939;
      font-family: "Montserrat Bold", sans-serif;
      @include font-size(1.6rem);
      letter-spacing: 2px;
      position: relative;
      border: 1px solid #e5e5e5;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }

      div {
        background-color: #e5e5e5;
        width: 100%;
        height: 100%;
        border: 2px solid #e5e5e5;
        padding: 15px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        &::before {
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0px;
          top: 0px;
          border-radius: 50%;
          border: 5px solid #fff;
        }
      }
    }
  }

  .member-item__categories {
    @include font-size(0.8rem);
  }

  .member-item__spanner {
    flex: 1;
    min-height: 24px;
  }

  .member-item__status {
    @include font-size(0.8rem);
  }

  .member-item__follow-btn {
    display: flex;
    background-color: #f4ed3b;
    border: 2px solid #f4ed3b;
    width: 100%;
    padding: 5px 12px;
    letter-spacing: 2px;
    align-items: center;
    justify-content: center;
    font-family: "Montserrat SemiBold", sans-serif;
    @include font-size(1rem);
    margin-top: 12px;
    margin-bottom: 12px;
    transition: background-color 0.2s, box-shadow 0.2s;
    cursor: pointer;
    text-decoration: none;
    color: #393939;

    &:hover {
      box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.3);
    }

    i {
      margin-right: 12px;
      font-size: 14px;
    }
  }

  .member-item__visit {
    text-decoration: none;
    color: #393939;
    border-bottom: 1px solid #393939;
    transition: border-color 0.2s;
    @include font-size(0.8rem);

    &:hover {
      border-color: transparent;
    }
  }
}
</style>
