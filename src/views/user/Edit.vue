<template>
  <div>
    <div class="container">
      <form class="user-settings" @submit.prevent="onSubmit">
        <div class="section-title">
          <h3 class="section-title__heading">Profile picture:</h3>
        </div>
        <div class="upload-user-avatar-wrap" @click="uploadOrgLogo">
          <div class="user-avatar">
            <img
              :src="newAvatar"
              style="width: 100%; height: 100%; background-color: rgba(0,0,0,.5); display: block;"
            />
          </div>

          <div class="add-user-photo">
            <input
              type="file"
              class="file-input"
              ref="fileInput"
              id="userAvatarInput"
              @input="onSelectFile"
              accept=".png, .jpg, .jpeg"
            />
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
        <div class="section-title">
          <h3 class="section-title__heading">Main info:</h3>
        </div>
        <div class="input-row">
          <label for="user-full_name">
            Full name *
            <input
              type="text"
              name="user-full_name"
              id="user-full_name"
              required
              v-model="user.full_name"
            />
          </label>
          <label for="user-displayed_name">
            Displayed name *
            <input
              type="text"
              name="user-displayed_name"
              id="user-displayed_name"
              required
              v-model="user.display_name"
            />
          </label>
          <label for="user-date-of-birth">
            Date of Birth
            <input
              type="date"
              name="user-date-of-birth"
              id="user-date-of-birth"
              v-model="tempDate"
              @change="formatDateOfBirth"
            />
          </label>
        </div>

        <div class="section-title">
          <h3 class="section-title__heading">Security:</h3>
        </div>
        <div class="input-row">
          <label for="user-password">
            Old password
            <input
              type="password"
              name="user-password"
              id="user-password"
              v-model="user.old_password"
            />
          </label>
          <label for="user-password-confirm">
            New password
            <input
              type="password"
              name="user-password-confirm"
              id="user-password-confirm"
              minlength="2"
              v-model="user.password"
            />
          </label>
        </div>

        <div class="section-title">
          <h3 class="section-title__heading">Location:</h3>
        </div>
        <div class="input-row">
          <label for="user-location">
            <input type="text" name="user-location" id="user-location" v-model="user.location" />
          </label>
        </div>

        <div class="section-title">
          <h3 class="section-title__heading">Your social media:</h3>
        </div>
        <div class="input-row">
          <label for="user-social-facebook">
            Facebook
            <input
              type="url"
              name="user-social-facebook"
              id="user-social-facebook"
              v-model="user.facebook"
            />
          </label>
          <label for="user-social-linkedin">
            Linkedin
            <input
              type="url"
              name="user-social-linkedin"
              id="user-social-linkedin"
              v-model="user.linkedin"
            />
          </label>
          <label for="user-social-google-plust">
            Google+
            <input
              type="url"
              name="user-social-google-plust"
              id="user-social-google-plust"
              v-model="user.google"
            />
          </label>
          <label for="user-social-twitter">
            Twitter
            <input
              type="url"
              name="user-social-twitter"
              id="user-social-twitter"
              v-model="user.twitter"
            />
          </label>
          <label for="user-social-instagram">
            Instagram
            <input
              type="url"
              name="user-social-instagram"
              id="user-social-instagram"
              v-model="user.instagram"
            />
          </label>
        </div>

        <div class="section-title">
          <h3 class="section-title__heading">Tell us more about yourself:</h3>
        </div>
        <ckeditor :editor="editor" :config="editorConfig" v-model="user.bio"></ckeditor>

        <div class="section-title">
          <h3 class="section-title__heading">UN goals you are interested in:</h3>
        </div>
        <div class="input-row">
          <label v-for="goal in allGoals" :key="goal.id" class="checkbox-label">
            <input type="checkbox" :value="goal.id" v-model="user.goals" />
            <span>{{goal.name}}</span>
          </label>
        </div>

        <div class="finish-btn-wrap">
          <button
            class="finish-btn"
            type="submit"
            name="submit"
            value="finish-creating"
          >Save profile</button>
          <button type="button" class="discard" @click.prevent="goToProfile">Discard changes</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "@/axios-auth";
import router from "@/router";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  data() {
    return {
      tempDate: null,
      // User fields
      user: {
        full_name: "",
        display_name: "",

        bio: "",

        avatar_image: null,

        old_password: null,
        password: null,
        location: "",
        charity_number: null,
        dob: null,

        // Social links
        facebook: "",
        linkedin: "",
        google: "",
        twitter: "",
        instagram: "",
        goals: []
      },
      // -
      avatarHolder: null,
      // All goals
      allGoals: [],
      // Editor
      editor: ClassicEditor,
      editorConfig: {
        removePlugins: [
          "EasyImage",
          "Image",
          "ImageCaption",
          "ImageStyle",
          "ImageToolbar",
          "ImageUpload"
        ]
      }
    };
  },
  computed: {
    newAvatar() {
      return this.user.avatar_image || this.avatarHolder;
    }
  },
  methods: {
    onSubmit() {
      axios
        .post("/users/settings", this.user)
        .then(response => {
          this.$swal({ text: "Profile Updated", icon: "success" }).then(() => {
            router.push({
              name: "profile"
            });
          });
          this.$store.commit("user/SET_USERDATA", response.data);
        })
        .catch(error => {
          let content = JSON.parse(error.request.response);
          let finalMessage = content.errors.join("<br>");
          this.$swal({ text: finalMessage, icon: "error" });
        });
    },
    formatDateOfBirth() {
      let date = new Date(this.tempDate);
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      this.user.dob = month + "/" + day + "/" + year;
    },
    chooseImage() {
      this.$refs.fileInput.click();
    },
    uploadOrgLogo() {
      document.getElementById("userAvatarInput").click();
    },
    onSelectFile() {
      const input = this.$refs.fileInput;
      const files = input.files;
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
          this.user.avatar_image = e.target.result;
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      }
    },
    goToProfile() {
      router.push({
        name: "profile"
      });
    }
  },
  mounted() {
    axios
      .get("/users/settings")
      .then(response => {
        console.log(response);
        this.user.full_name = response.data.user.full_name;
        this.user.display_name = response.data.user.display_name;
        this.user.dob = response.data.user.dob;
        this.user.bio = response.data.user.bio;
        // this.user.location = response.data.user.location;
        this.user.facebook = response.data.user.facebook;
        this.user.linkedin = response.data.user.linkedin;
        this.user.google = response.data.user.google;
        this.user.instagram = response.data.user.instagram;
        this.user.twitter = response.data.user.twitter;

        this.avatarHolder =
          "https://new-smiley.s3.eu-west-2.amazonaws.com/users/s_" +
          response.data.user.avatar;

        console.log(this.avatarHolder);

        this.user.goals = response.data.goals;

        this.allGoals = response.data.all_goals;
      })
      .catch(error => console.error(error.request));
  }
};
</script>

<style lang="scss">
.user-settings {
  max-width: 960px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 48px auto;
}

.section-title {
  display: flex;
  flex-direction: row;
  align-items: center;

  .section-title__heading {
    font: 700 22px/28px "Muli", sans-serif;
    color: $default-text;
  }
}

.upload-user-avatar-wrap {
  width: 174px;
  height: 174px;
  position: relative;
  margin: 0 auto;

  .user-avatar {
    border-radius: 50%;
    overflow: hidden;
    height: 100%;
    cursor: pointer;

    img {
      height: 100%;
    }
  }

  .add-user-photo {
    width: 53px;
    height: 53px;
    border: 3px solid #fff;
    border-radius: 50%;
    background-color: #656565;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    box-sizing: border-box;
    top: 0;
    right: 0;

    input {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      border-radius: 50%;
      cursor: pointer;
    }

    svg {
      width: 20px;
      height: 20px;
      z-index: 0;
    }
  }
}

.input-row {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: -15px;
  margin-right: -15px;

  label {
    width: calc(50% - 30px);
    margin-left: 15px;
    margin-right: 15px;

    @include smMax() {
      width: 100%;
    }
  }
}

label {
  color: $default-text;
  font: 700 16px/24px "Muli", sans-serif;

  input,
  select {
    display: block;
    margin: 7px auto 25px;
    width: 100%;
    box-sizing: border-box;
    height: 48px;
    border: 1px solid #c7c7c7;
    border-radius: 4px;
    font: 400 16px/24px "Muli", sans-serif;
    color: #656565;
    padding: 0 48px 0 16px;
    background-color: #fff;
  }
}

.ck-editor__editable_inline {
  height: 300px;
}

.finish-btn-wrap {
  display: flex;
  margin-top: 48px;
  justify-content: space-between;
  flex-wrap: wrap;

  button {
    border-radius: 4px;
    background-color: $default-yellow-btns;
    height: 48px;
    width: 45%;
    border: none;
    font: 700 16px/24px "Montserrat Bold", sans-serif;
    color: #000;
    text-transform: uppercase;
    cursor: pointer;
    margin-bottom: 24px;

    @include smMax {
      width: 100%;
    }

    &:hover {
      background-color: #f6f162;
      box-shadow: 0 2px 28px -13px rgba(0, 0, 0, 0.4);
      color: #000;
      transition: all 0.2s ease;
    }

    &.discard {
      background-color: #656565;
      color: #fff;
    }
  }
}

.checkbox-label {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 24px;

  input {
    margin: 0px 12px 0px 0px !important;
    width: 24px;
    height: 24px;
  }

  span {
    flex: 1;
  }
}
</style>