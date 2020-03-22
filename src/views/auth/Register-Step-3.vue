<template>
  <section class="registration-step-3 container">
    <h2 class="registration-title">Do you need or want to lend a helping hand?</h2>

    <form class="registration-3" @submit.prevent="submitSupport">
      <div class="section-support-title">What support do you need?</div>
      <label
        for="reg-support"
        v-for="(item, index) in neededItems"
        :key="'needed-items-'+index"
        class="flex-select"
      >
        <div class="wrap-for-support-select">
          <select name="reg-support" id="reg-support" v-model="neededItems[index].parent">
            <option selected disabled>Please select one</option>
            <option
              v-for="parentCategory in supportList"
              :key="parentCategory.id"
              :value="parentCategory.id"
            >{{parentCategory.title}}</option>
          </select>
          <div class="select-arrows">
            <svg
              width="12"
              height="20"
              viewBox="0 0 3.1749999 5.2916668"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(0,-291.70832)" id="layer1">
                <g
                  transform="matrix(0.17602026,0,0,0.17602026,-0.52336255,294.0049)"
                  style="fill:none"
                >
                  <path
                    style="clip-rule:evenodd;fill:#1a1a1a;fill-rule:evenodd"
                    d="m 21.0002,8.00025 c 0,0.256 -0.0979,0.512 -0.2929,0.707 l -8.0001,7.99995 c -0.391,0.391 -1.023,0.391 -1.4139,0 L 3.29325,8.70725 c -0.391,-0.391 -0.391,-1.023 0,-1.414 0.391,-0.391 1.023,-0.391 1.414,0 l 7.29295,7.29295 7.293,-7.29295 c 0.391,-0.391 1.023,-0.391 1.4141,0 0.195,0.195 0.2929,0.451 0.2929,0.707 z"
                  />
                </g>
                <g
                  transform="matrix(-0.17657956,0,0,-0.17657956,3.7031194,294.71295)"
                  style="fill:none"
                >
                  <path
                    style="clip-rule:evenodd;fill:#1a1a1a;fill-rule:evenodd"
                    d="m 21.0002,8.00025 c 0,0.256 -0.0979,0.512 -0.2929,0.707 l -8.0001,7.99995 c -0.391,0.391 -1.023,0.391 -1.4139,0 L 3.29325,8.70725 c -0.391,-0.391 -0.391,-1.023 0,-1.414 0.391,-0.391 1.023,-0.391 1.414,0 l 7.29295,7.29295 7.293,-7.29295 c 0.391,-0.391 1.023,-0.391 1.4141,0 0.195,0.195 0.2929,0.451 0.2929,0.707 z"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div class="wrap-for-support-select">
          <select name="reg-support" id="reg-support" v-model="neededItems[index].child">
            <option selected disabled>Please select one</option>
            <option
              v-for="parentCategory in categoryItems(neededItems[index].parent)"
              :key="parentCategory.id"
              :value="parentCategory.id"
            >{{parentCategory.title}}</option>
          </select>
          <div class="select-arrows">
            <svg
              width="12"
              height="20"
              viewBox="0 0 3.1749999 5.2916668"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(0,-291.70832)" id="layer1">
                <g
                  transform="matrix(0.17602026,0,0,0.17602026,-0.52336255,294.0049)"
                  style="fill:none"
                >
                  <path
                    style="clip-rule:evenodd;fill:#1a1a1a;fill-rule:evenodd"
                    d="m 21.0002,8.00025 c 0,0.256 -0.0979,0.512 -0.2929,0.707 l -8.0001,7.99995 c -0.391,0.391 -1.023,0.391 -1.4139,0 L 3.29325,8.70725 c -0.391,-0.391 -0.391,-1.023 0,-1.414 0.391,-0.391 1.023,-0.391 1.414,0 l 7.29295,7.29295 7.293,-7.29295 c 0.391,-0.391 1.023,-0.391 1.4141,0 0.195,0.195 0.2929,0.451 0.2929,0.707 z"
                  />
                </g>
                <g
                  transform="matrix(-0.17657956,0,0,-0.17657956,3.7031194,294.71295)"
                  style="fill:none"
                >
                  <path
                    style="clip-rule:evenodd;fill:#1a1a1a;fill-rule:evenodd"
                    d="m 21.0002,8.00025 c 0,0.256 -0.0979,0.512 -0.2929,0.707 l -8.0001,7.99995 c -0.391,0.391 -1.023,0.391 -1.4139,0 L 3.29325,8.70725 c -0.391,-0.391 -0.391,-1.023 0,-1.414 0.391,-0.391 1.023,-0.391 1.414,0 l 7.29295,7.29295 7.293,-7.29295 c 0.391,-0.391 1.023,-0.391 1.4141,0 0.195,0.195 0.2929,0.451 0.2929,0.707 z"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </label>
      <div class="add-another-one">
        <a href="#" @click.prevent="addNewSupportItem">Add another one</a>
      </div>
      <br />
      <div class="section-support-title">What support do you offer?</div>
      <label
        for="reg-support"
        v-for="(item, index) in offeredItems"
        :key="'offered-items-'+index"
        class="flex-select"
      >
        <div class="wrap-for-support-select">
          <select name="reg-support" id="reg-support" v-model="offeredItems[index].parent">
            <option selected disabled>Please select one</option>
            <option
              v-for="parentCategory in supportList"
              :key="parentCategory.id"
              :value="parentCategory.id"
            >{{parentCategory.title}}</option>
          </select>
          <div class="select-arrows">
            <svg
              width="12"
              height="20"
              viewBox="0 0 3.1749999 5.2916668"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(0,-291.70832)" id="layer1">
                <g
                  transform="matrix(0.17602026,0,0,0.17602026,-0.52336255,294.0049)"
                  style="fill:none"
                >
                  <path
                    style="clip-rule:evenodd;fill:#1a1a1a;fill-rule:evenodd"
                    d="m 21.0002,8.00025 c 0,0.256 -0.0979,0.512 -0.2929,0.707 l -8.0001,7.99995 c -0.391,0.391 -1.023,0.391 -1.4139,0 L 3.29325,8.70725 c -0.391,-0.391 -0.391,-1.023 0,-1.414 0.391,-0.391 1.023,-0.391 1.414,0 l 7.29295,7.29295 7.293,-7.29295 c 0.391,-0.391 1.023,-0.391 1.4141,0 0.195,0.195 0.2929,0.451 0.2929,0.707 z"
                  />
                </g>
                <g
                  transform="matrix(-0.17657956,0,0,-0.17657956,3.7031194,294.71295)"
                  style="fill:none"
                >
                  <path
                    style="clip-rule:evenodd;fill:#1a1a1a;fill-rule:evenodd"
                    d="m 21.0002,8.00025 c 0,0.256 -0.0979,0.512 -0.2929,0.707 l -8.0001,7.99995 c -0.391,0.391 -1.023,0.391 -1.4139,0 L 3.29325,8.70725 c -0.391,-0.391 -0.391,-1.023 0,-1.414 0.391,-0.391 1.023,-0.391 1.414,0 l 7.29295,7.29295 7.293,-7.29295 c 0.391,-0.391 1.023,-0.391 1.4141,0 0.195,0.195 0.2929,0.451 0.2929,0.707 z"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div class="wrap-for-support-select">
          <select name="reg-support" id="reg-support" v-model="offeredItems[index].child">
            <option>Please select one</option>
            <option
              v-for="parentCategory in categoryItems(offeredItems[index].parent)"
              :key="parentCategory.id"
              :value="parentCategory.id"
            >{{parentCategory.title}}</option>
          </select>
          <div class="select-arrows">
            <svg
              width="12"
              height="20"
              viewBox="0 0 3.1749999 5.2916668"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(0,-291.70832)" id="layer1">
                <g
                  transform="matrix(0.17602026,0,0,0.17602026,-0.52336255,294.0049)"
                  style="fill:none"
                >
                  <path
                    style="clip-rule:evenodd;fill:#1a1a1a;fill-rule:evenodd"
                    d="m 21.0002,8.00025 c 0,0.256 -0.0979,0.512 -0.2929,0.707 l -8.0001,7.99995 c -0.391,0.391 -1.023,0.391 -1.4139,0 L 3.29325,8.70725 c -0.391,-0.391 -0.391,-1.023 0,-1.414 0.391,-0.391 1.023,-0.391 1.414,0 l 7.29295,7.29295 7.293,-7.29295 c 0.391,-0.391 1.023,-0.391 1.4141,0 0.195,0.195 0.2929,0.451 0.2929,0.707 z"
                  />
                </g>
                <g
                  transform="matrix(-0.17657956,0,0,-0.17657956,3.7031194,294.71295)"
                  style="fill:none"
                >
                  <path
                    style="clip-rule:evenodd;fill:#1a1a1a;fill-rule:evenodd"
                    d="m 21.0002,8.00025 c 0,0.256 -0.0979,0.512 -0.2929,0.707 l -8.0001,7.99995 c -0.391,0.391 -1.023,0.391 -1.4139,0 L 3.29325,8.70725 c -0.391,-0.391 -0.391,-1.023 0,-1.414 0.391,-0.391 1.023,-0.391 1.414,0 l 7.29295,7.29295 7.293,-7.29295 c 0.391,-0.391 1.023,-0.391 1.4141,0 0.195,0.195 0.2929,0.451 0.2929,0.707 z"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </label>
      <div class="add-another-one">
        <a href="#" @click.prevent="addNewOfferItem">Add another one</a>
      </div>
      <br />
      <br />
      <div class="register-btn-wrap">
        <!-- <button class="back-btn" type="submit" name="submit" value="register">Back</button> -->
        <button class="next-btn" type="submit" name="submit" value="register">Next</button>
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
      neededItems: [
        {
          parent: 1,
          child: null
        }
      ],
      offeredItems: [
        {
          parent: 1,
          child: null
        }
      ],

      supportList: []
    };
  },
  methods: {
    submitSupport() {
      const offerItemsList = this.offeredItems
        .filter(item => item.child != null)
        .map(item => item.child);

      const neededItemsList = this.neededItems
        .filter(item => item.child != null)
        .map(item => item.child);

      let supports = {
        offer: offerItemsList,
        need: neededItemsList
      };

      axios
        .post("/users/settings", supports)
        .then(response => {
          router.push({
            name: "register-4"
          });
          this.$store.commit("user/SET_USERDATA", response.data);
        })
        .catch(error => {
          let content = JSON.parse(error.request.response);
          let finalMessage = content.errors.join("<br>");
          this.$swal({ text: finalMessage, icon: "error" });
        });
    },
    addNewSupportItem() {
      console.log("add new needed item");
      this.neededItems.push({
        parent: 1,
        child: null
      });
    },
    addNewOfferItem() {
      console.log("add new offered item");

      this.offeredItems.push({
        parent: 1,
        child: null
      });
    },
    manageSupport(elem) {
      let currentValue = elem.target.value;
      console.log(elem.target.dataset.index);
      if (!this.parentCatArray.includes(currentValue)) {
        this.parentCatArray.push(currentValue);
      }
    },
    categoryItems(id) {
      const element = this.supportList.find(cat => cat.id == id);

      return element?.supports ? element.supports : null;
    }
  },
  mounted() {
    axios
      .get("/users/settings")
      .then(res => {
        console.log("Loaded support", res);
        this.supportList = res.data.all_supports;
      })
      .catch(err => console.error("Loading support fail"));
  }
};
</script>

<style lang="scss" scoped>
.registration-step-3 {
  text-align: center;
  margin-top: 74px;
  margin-bottom: 160px;
  .registration-title {
    color: $default-text;
    font: 700 56px/74px "Montserrat Bold", sans-serif;
    max-width: 864px;
    margin: 0 auto 10px;
  }
  .registration-3 {
    width: 100%;
    max-width: 762px;
    text-align: left;
    margin: 52px auto 0;
    display: flex;
    flex-direction: column;
    .support-type-radio-btns {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 17px;
      .radio-btns-group {
        width: 100%;
      }
      label {
        font: 400 16px/36px "Muli", sans-serif;
        color: #656565;
        display: flex;
        align-items: center;
        margin: 9px 0 9px;
        span {
          order: 2;
          margin-left: 15px;
          cursor: pointer;
        }
        input {
          display: none;
          & + div {
            width: 24px;
            height: 24px;
            border: 1px solid #c7c7c7;
            border-radius: 50%;
            cursor: pointer;
            position: relative;
            display: inline-block;
            order: 1;
          }
          &:checked + div {
            &:after {
              content: "";
              width: 13px;
              height: 13px;
              border-radius: 50%;
              background-color: #000;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }
      }
    }
    label[for="reg-offer"],
    label[for="reg-support"] {
      font: 700 16px/24px "Muli", sans-serif;
      text-transform: uppercase;
      color: $default-text;
    }
    .wrap-for-offer-select,
    .wrap-for-support-select {
      border-radius: 4px;
      box-sizing: border-box;
      height: 48px;
      position: relative;
      width: 100%;
      // max-width: 312px;
      margin-top: 17px;
      select {
        padding: 0 48px 0 16px;
        width: 100%;
        border: 1px solid #c7c7c7;
        border-radius: 4px;
        height: 100%;
        color: #656565;
        cursor: pointer;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        &::-ms-expand {
          display: none; /* remove arrow IE     */
        }
        &:focus {
          outline: none;
        }
        option {
          color: $default-text;
          &[disabled] {
            color: #656565;
          }
        }
      }
      .select-arrows {
        display: flex;
        position: absolute;
        right: 18px;
        top: 14px;
      }
    }
    .add-another-one {
      margin-top: 15px;
      margin-bottom: 20px;
      a {
        font: 700 16px/24px "Muli", sans-serif;
        text-decoration: none;
        color: $default-text;
        position: relative;
        padding-left: 60px;
        &:before {
          content: "+";
          font: 400 36px/36px "Montserrat Regular", sans-serif;
          color: #fff;
          position: absolute;
          z-index: 1;
          left: 14px;
          top: -8px;
          //transform: translate(50%,50%);
        }
        &:after {
          content: "";
          height: 46px;
          width: 46px;
          background-color: #656565;
          border-radius: 50%;
          position: absolute;
          left: 0;
          top: -13px;
          z-index: 0;
        }
      }
    }
    .register-btn-wrap {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      @include md {
        flex-direction: row;
        justify-content: space-between;
      }
      button {
        border-radius: 4px;
        height: 48px;
        width: 100%;
        max-width: 360px;
        font: 700 16px/24px "Montserrat Bold", sans-serif;
        color: #000;
        text-transform: uppercase;
        cursor: pointer;
        margin-bottom: 20px;
      }
    }
    .back-btn {
      background: transparent;
      border: 1px solid #c7c7c7;
      &:hover {
        background-color: #fff;
        color: gray;
        transition: 0.2s ease-in;
      }
    }
    .next-btn {
      background-color: $default-yellow-btns;
      border: none;
    }
  }
}

.section-support-title {
  font: 700 16px/24px "Muli", sans-serif;
  text-transform: uppercase;
  color: #1a1a1a;
}

.flex-select {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 15px;

  .wrap-for-support-select {
    width: calc(50% - 15px) !important;
  }
}
</style>