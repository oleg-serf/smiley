<template>
  <section class="registration-step-4 container">
    <h2
      class="registration-title"
    >Tell us what you care about most in order to customize the best experience for you (you can select more than one interest)</h2>
    <p class="registration-subtitle"></p>

    <form class="registration-4" v-if="goals.length > 0" @submit.prevent="submitGoals">
      <div class="interest-list">
        <div class="interest-item" v-for="goal in goals" :key="goal.id">
          <label class="interest-checkbox">
            <div class="interest-img-wrap">
              <img :src="$settings.images_path.goals + 'm_' + goal.image" alt />
            </div>
            <input type="checkbox" :value="goal.id" v-model="selectedGoals" />
            <span class="interest-checkmark">
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
      </div>

      <div class="register-btn-wrap">
        <button
          class="complete-btn"
          type="submit"
          name="submit"
          value="complete-profile"
        >Complete Profile</button>
      </div>
    </form>
  </section>
</template>

<script>
import axios from "@/axios-auth";
import router from "@/router";

export default {
  data() {
    return {
      goals: [],
      selectedGoals: []
    };
  },
  methods: {
    submitGoals() {
      axios
        .post("/users/settings", { goals: this.selectedGoals })
        .then(response => {
          router.push({
            name: "profile"
          });
          this.$store.commit("user/SET_USERDATA", response.data);
        })
        .catch(error => {
          let content = JSON.parse(error.request.response);
          let finalMessage = content.errors.join("<br>");
          this.$swal({ text: finalMessage, icon: "error" });
        });
    }
  },
  mounted() {
    axios
      .get("/goals")
      .then(res => {
        this.goals = res.data.goal_categories[0].goals;
      })
      .catch(err => console.error("Load goals error", err));
  }
};
</script>

<style lang="scss" scoped>
.registration-step-4 {
  text-align: center;
  margin-top: 127px;
  margin-bottom: 160px;
  .registration-title {
    color: $default-text;
    font: 700 56px/74px "Montserrat Bold", sans-serif;
    margin-bottom: 24px;
  }
  .registration-subtitle {
    color: $default-text;
    font: 400 22px/36px "Muli", sans-serif;
    max-width: 778px;
    margin: 0 auto 42px;
  }
  .registration-4 {
    max-width: 790px;
    margin: 0 auto;
    .interest-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      @include custom-width(806px) {
        justify-content: flex-start;
      }
      .interest-item {
        max-width: 169px;
        max-height: 169px;
        margin: 14px;
        position: relative;
        .interest-img-wrap {
          display: flex;
          border: 1px solid #efefef;
          max-width: 100%;
          height: auto;
          img {
            width: 100%;
          }
        }
        .interest-checkbox {
          position: relative;
          cursor: pointer;
          color: $default-text;
          font: 400 16px/24px "Muli", sans-serif;
          user-select: none;
          input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
          }
          .interest-checkmark {
            position: absolute;
            top: 5px;
            right: -78px;
            height: 24px;
            width: 24px;
            border: 1px solid #c7c7c7;
            border-radius: 4px;
            box-sizing: border-box;
            transition: all 0.2s ease;
            background: #fff;
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
        .interest-checkbox input:checked ~ .interest-checkmark {
          background-color: $default-yellow-btns;
          border: none;
          transition: all 0.2s ease;
          svg {
            opacity: 1;
          }
        }
      }
    }
    .register-btn-wrap {
      margin-top: 33px;
      display: flex;
      justify-content: center;
      button {
        border-radius: 4px;
        height: 48px;
        width: 100%;
        max-width: 762px;
        font: 700 16px/24px "Montserrat Bold", sans-serif;
        color: #000;
        text-transform: uppercase;
        cursor: pointer;
        margin-bottom: 20px;
      }
    }
    .complete-btn {
      background-color: $default-yellow-btns;
      border: none;
    }
  }
}
</style>