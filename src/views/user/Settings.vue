<template>
  <section>
    <div class="profile">
      <div class="profile__background">
        <img src="/images/remove-profile_background.jpg">
      </div>
      <div class="profile__info container">
        <div class="profile__avatar">
          <img v-if="user.avatar != null" :src="$settings.images_path.users + 'm_'+ user.avatar"/>
          <span v-else class="profile__avatar-initials">{{ user.display_name }}</span>
        </div>
        <div class="profile__description">
          <h1 class="profile__name">{{ user.display_name }}</h1>
          <div class="profile__job-title">{{user.job_title}}</div>
          <div class="profile__location">London, United Kingdom</div>
          <div class="profile__slogan">{{user.slogan}}</div>
        </div>
        <div class="profile__holder-actions">
          <div class="profile__actions">
            <div class="profile__actions-item">
              <span class="tag">Matches: <strong class="append">50+</strong></span>
            </div>
            <div class="profile__actions-item">
              <span class="tag">Communities: <strong class="append">5</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tabs container">
      <div class="tabs__navigation">
        <button class="tabs__navigation-item"
                @click="tab = 'about'"
                :class="activeTab('about')"
        >About
        </button>
        <button class="tabs__navigation-item"
                @click="tab = 'images'"
                :class="activeTab('images')"
        >Images
        </button>
        <button class="tabs__navigation-item"
                @click="tab = 'support'"
                :class="activeTab('support')"
        >Support
        </button>
        <button class="tabs__navigation-item"
                @click="tab = 'interests'"
                :class="activeTab('interests')"
        >Interests
        </button>
        <button class="tabs__navigation-item"
                @click="tab = 'settings'"
                :class="activeTab('settings')"
        >Interests
        </button>
      </div>
      <div class="tabs__content">
        <!--            About tab [+]-->
        <div class="tabs__content-item" v-show="tab === 'about'">
          <div class="tab--about">
            <div class="icon-block">
              <span>Real name:</span>
              <div class="edit edit--prepend">
                <i class="fa fa-user-circle-o edit__icon edit__icon--primary"></i>
                <input type="text" v-model="user.full_name" placeholder="https://...">
              </div>
            </div>
            <div class="icon-block">
              <span>Display name:</span>
              <div class="edit edit--prepend">
                <i class="fa fa-user-circle edit__icon edit__icon--primary"></i>
                <input type="text" v-model="user.display_name" placeholder="https://...">
              </div>
            </div>
            <div class="icon-block about">
              <i class="fa fa-info-circle icon-block__icon"></i>
              <span>Bio:</span>
              <ckeditor :editor="editor" :config="editorConfig" v-model="user.bio"></ckeditor>
            </div>
            <div class="icon-block share">
              <i class="fa fa-share-alt icon-block__icon"></i>
              Your Social Media:
              <ul class="social-share">
                <li class="social-share__item">
                  <div class="edit edit--prepend">
                    <i class="fa fa-facebook edit__icon edit__icon--facebook"></i>
                    <input type="url" v-model="user.website" placeholder="facebook">
                  </div>
                </li>
                <li class="social-share__item">
                  <div class="edit edit--prepend">
                    <i class="fa fa-instagram edit__icon edit__icon--instagram"></i>
                    <input type="url" v-model="user.instagram" placeholder="instagram">
                  </div>
                </li>
                <li class="social-share__item">
                  <div class="edit edit--prepend">
                    <i class="fa fa-linkedin edit__icon edit__icon--linkedin"></i>
                    <input type="url" v-model="user.linkedin" placeholder="linkedin">
                  </div>
                </li>
                <li class="social-share__item">
                  <div class="edit edit--prepend">
                    <i class="fa fa-twitter edit__icon edit__icon--twitter"></i>
                    <input type="url" v-model="user.twitter" placeholder="twitter">
                  </div>
                </li>
                <li class="social-share__item">
                  <div class="edit edit--prepend">
                    <i class="fa fa-youtube-play edit__icon edit__icon--youtube"></i>
                    <input type="url" v-model="user.youtube" placeholder="youtube">
                  </div>
                </li>
              </ul>
            </div>
            <div class="icon-block link">
              <i class="fa fa-link icon-block__icon"></i>
              <span>Your website link:</span>
              <div class="edit edit--prepend">
                <i class="fa fa-external-link-square edit__icon edit__icon--primary"></i>
                <input type="url" v-model="user.website" placeholder="https://...">
              </div>
            </div>
          </div>
        </div>
        <!--            About tab [-]-->
        <!--            Images tab [+]-->
        <div class="tabs__content-item" v-show="tab === 'images'"></div>
        <!--            Images tab [-]-->
        <!--            Support tab [+]-->
        <div class="tabs__content-item" v-show="tab === 'support'">
          <div class="icon-block support">
            <i class="fa fa-hand-o-right icon-block__icon"></i>
            Support offered:<br>
            <ul class="support__block">
              <li class="support_block-li" v-for="(item, index) in supportOffer">
                <div class="support__control">
                  <select v-model="supportOffer[index].parent">
                    <option value="-1" selected disabled>Select category</option>
                    <option :value="category.id" v-for="category in supports">{{ category.title }}</option>
                  </select>
                  <button class="support__item-remove" @click.prevent="removeCategory('offered', index)">
                    <i class="fa fa-remove"></i>
                  </button>
                </div>
                <ul class="support__block-sub">
                  <li v-for="(option, counter) in supportOffer[index].child">
                    <div class="support__control">
                      <select v-model="supportOffer[index].child[counter]">
                        <option value="-1" selected disabled>Select option</option>
                        <option :value="category.id"
                                v-for="category in getSupportValues(supportOffer[index].parent)">
                          {{ category.title }}
                        </option>
                      </select>
                      <button class="support__item-remove" @click.prevent="removeItem('offered', index, counter)">
                        <i class="fa fa-remove"></i>
                      </button>
                    </div>
                  </li>
                </ul>
                <button class="support__item-add" @click.prevent="addItem('offered', index)">
                  <i class="fa fa-plus-circle"></i> Add item
                </button>
              </li>
              <li>
                <button class="add_support" @click.prevent="addCategory('offered')">
                  <i class="fa fa-plus-circle"></i>
                  <span>Add need Category</span>
                </button>
              </li>
            </ul>
          </div>
          <div class="icon-block support">
            <i class="fa fa-hand-o-right icon-block__icon"></i>
            Support needed:<br>
            <ul class="support__block">
              <li class="support_block-li" v-for="(item, index) in supportNeeded">
                <div class="support__control">
                  <select v-model="supportNeeded[index].parent">
                    <option selected disabled>Select category</option>
                    <option :value="category.id" v-for="category in supports">{{ category.title }}</option>
                  </select>
                  <button class="support__item-remove" @click.prevent="removeCategory('needed', index)">
                    <i class="fa fa-remove"></i>
                  </button>
                </div>
                <ul class="support__block-sub">
                  <li v-for="(option, counter) in supportNeeded[index].child">
                    <div class="support__control">
                      <select v-model="supportNeeded[index].child[counter]">
                        <option selected disabled>Select option</option>
                        <option :value="category.id"
                                v-for="category in getSupportValues(supportNeeded[index].parent)">
                          {{ category.title }}
                        </option>
                      </select>
                      <button class="support__item-remove" @click.prevent="removeItem('needed', index, counter)">
                        <i class="fa fa-remove"></i>
                      </button>
                    </div>
                  </li>
                </ul>
                <button class="support__item-add" @click.prevent="addItem('needed', index)">
                  <i class="fa fa-plus-circle"></i> Add item
                </button>
              </li>
              <li>
                <button class="add_support" @click.prevent="addCategory('needed')">
                  <i class="fa fa-plus-circle"></i>
                  <span>Add support Category</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <!--            Support tab [-]-->
        <!--            Interests tab [+]-->
        <div class="tabs__content-item" v-show="tab === 'interests'">
          <div class="icon-block goals">
            <i class="fa fa-connectdevelop icon-block__icon"></i>
            <span>Select your Interests | UN Goals:</span>
            <div class="goals__list">
              <label class="goals__list-item" v-for="goal in goals" tabindex="1">
                <input type="checkbox" :value="goal.id" v-model="user.goals">
                <div>
                  <i class="icon-goal icon-fo edit__icon"
                     :class="'icon-fo-un_' + goal.prefix"
                     :style="{'background-color': goal.colour}"
                  ></i>
                </div>
                <span>{{ goal.name }}</span>
              </label>
            </div>
          </div>
        </div>
        <!--            Interests tab [-]-->
        <!--            Settings tab [+]-->
        <div class="tabs__content-item" v-show="tab === 'settings'">
          <div class="icon-block link">
            <i class="fa fa-link icon-block__icon"></i>
            <span>Email:</span>
            <div class="edit edit--prepend">
              <i class="fa fa-external-link-square edit__icon edit__icon--primary"></i>
              <input type="url" v-model="user.email" placeholder="johndoe@gmail.co">
            </div>
          </div>
          <div></div>
          <div class="icon-block link">
            <i class="fa fa-link icon-block__icon"></i>
            <span>Old Password:</span>
            <div class="edit edit--prepend">
              <i class="fa fa-external-link-square edit__icon edit__icon--primary"></i>
              <input :type="passwordDisplay" v-model="user.old_password" placeholder="https://...">
              <button @click.prevent="switchVisibility()">
                <i class="fa fa-eye"></i>
              </button>
            </div>
          </div>
          <div class="icon-block link">
            <i class="fa fa-link icon-block__icon"></i>
            <span>News Password:</span>
            <div class="edit edit--prepend">
              <i class="fa fa-external-link-square edit__icon edit__icon--primary"></i>
              <input :type="passwordDisplay" v-model="user.website" placeholder="https://...">
            </div>
          </div>
        </div>
        <!--            Settings tab [-]-->
      </div>
    </div>
  </section>
</template>

<script>
import axios from "@/axios-auth";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "UserProfile",
  components: {
    ClassicEditor
  },
  data() {
    return {
      user: {},
      goals: [],
      supports: [],
      passwordDisplay: false,
      //
      supportNeeded: [
        {
          parent: 1,
          child: []
        }
      ],
      supportOffer: [
        {
          parent: 1,
          child: []
        }
      ],
      tab: 'about',
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
      },
    };
  },
  methods: {
    activeTab(tab) {
      return tab === this.tab ? 'tabs__navigation-item--active' : '';
    },
    switchVisibility() {
      this.passwordDisplay = this.passwordDisplay === 'password' ? 'text' : 'password'
    },
    getSupportValues(id) {
      const element = this.supports.find(cat => cat.id == id);
      return element?.supports ? element.supports : null;
    },
    addItem(type, category) {
      let items;
      if (type === 'offered') {
        items = this.supportOffer;
      } else {
        items = this.supportNeeded;
      }
      items[category].child.push(-1);
    },
    addCategory(type) {
      let items;
      if (type === 'offered') {
        items = this.supportOffer;
      } else {
        items = this.supportNeeded;
      }
      // items[category].child.push(0);
      items.push({
        parent: 1,
        child: [-1]
      });
    },
  },
  mounted() {
    //  Move api calls to vuex

    // axios
    //     .get("/users/" + this.$route.params.slug)
    axios
        .get("/users/settings")
        .then(response => {
          console.log("User profile", response.data);
          this.user = response.data.user;
          this.goals = response.data.all_goals;
          this.supports = response.data.all_supports;

        })
        .catch(error => console.error(error));
  }
}
</script>

<style lang="scss" scoped>
// TODO: Move to global styles
.container {
  width: 1140px;
  padding: 0px 15px;
  margin: 0 auto;

  @media screen and (max-width: 1199px) {
    width: 960px;
  }
  @media screen and (max-width: 991px) {
    width: 720px;
  }
  @media screen and (max-width: 767px) {
    width: 540px;
  }
  @media screen and (max-width: 575px) {
    width: 100%;
  }
}

// TODO: Move to global styles
.button {
  box-shadow: 0px 3px 6px rgba(0, 0, 0, .15);
  padding: .5rem 1rem;
  line-height: 1;
  font-size: 1rem;
  border-radius: 1rem;
  border: 1px solid #000;
  background-color: #fff;
  width: 100%;
  max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color .2s, transform .2s, box-shadow .2s;

  &:hover {
    background-color: #000;
    color: #fff;
  }

  &:active {
    transform: translateY(1px);
    box-shadow: none;
  }

  .fa-i-prepend {
    margin-right: .8rem;
    @include font-size(.8rem);
  }

  .fa-i-append {
    margin-left: 1rem;
    @include font-size(.8rem);
  }
}

// TODO: Move to global styles
.tag {
  box-shadow: 0px 3px 6px rgba(0, 0, 0, .15);
  padding: .5rem 1rem;
  line-height: 1;
  font-size: 1rem;
  border-radius: 1rem;
  background-color: #FFE300;
  width: 100%;
  max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  strong {
    &.append {
      margin-left: .5rem;
    }

    &.prepend {
      margin-right: .5rem;
    }
  }
}

.profile {
  margin-bottom: 3.5rem;

  &__background {
    position: relative;
    height: 360px;
    width: 100%;

    img {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @include smMax {
      display: none;
    }
  }

  &__info {
    background: #fff;
    display: grid;
    grid-template-columns: .5fr 1fr 1fr;
    grid-gap: 1rem;
    position: relative;

    @include lgMax {
      grid-template-columns: repeat(2, 1fr);
    }
    @include smMax {
      display: block;
      text-align: center;
    }
  }

  &__avatar {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 1rem solid #fff;
    margin-top: -50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0px 0px 6px rgba(0, 0, 0, .15);
    background-color: #FFE300;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &-initials {
      @include font-size(5rem);
      font-weight: bold;

      @include mdMax {
        @include font-size(7rem);
      }
    }

    @include lgMax {
      margin-top: -36%;
    }
    @include smMax {
      margin-top: 0px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  &__name {
    margin-top: 1rem;
    @include font-size(2rem);
  }

  &__slogan {
    color: #717171;
    font-weight: lighter;
  }

  &__holder-actions {
    @include lgMax {
      grid-column: 1 / span 2;
    }
  }

  &__actions {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 1.45rem;

    @include lgMax {
      grid-template-columns: repeat(4, 1fr);
    }
    @include mdMax {
      grid-template-columns: repeat(2, 1fr);
    }
    @include smMax {
      grid-template-columns: 1fr;

      &-item {
        display: flex;
        justify-content: center;
      }
    }
  }
}

.tabs {
  margin-bottom: 1.5rem;

  &__navigation {
    display: flex;
    justify-content: space-between;

    @include smMax {
      display: none;
    }

    &-item {
      padding: .8rem 1rem;
      border-top-left-radius: .5rem;
      border-top-right-radius: .5rem;
      border-left: 1px solid;
      border-right: 1px solid;
      border-top: 1px solid;
      border-bottom: none;
      border-color: transparent;
      line-height: 1;
      margin-bottom: -1px;
      @include font-size(1.25rem);
      font-weight: bold;
      position: relative;
      transition: border-color .2s;
      background-color: #fff;
      cursor: pointer;

      &:hover {
        border-color: rgba(112, 112, 112, .15);
      }

      &--active {
        box-shadow: 0px 3px 6px rgba(0, 0, 0, .15);
        border-bottom: 1px solid #fff;
        border-color: rgba(112, 112, 112, .3);

        &::after {
          content: '';
          position: absolute;
          height: 10px;
          width: 100%;
          background-color: #fff;
          left: 0px;
          bottom: -5px;
          z-index: 3;
        }
      }
    }
  }

  &__content {
    box-shadow: 0px 1px 6px rgba(0, 0, 0, .15);
    border: 1px solid rgba(112, 112, 112, .3);
    position: relative;
    z-index: 2;
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;
    padding: 1rem;
    background-color: #fff;

    @include smMax {
      border-radius: .5rem;
      padding: 0px;
      overflow: hidden;
    }

    &-item {
      @include smMax {
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 1rem;
      }
    }

    &-button {
      width: 100%;
      padding: 1rem;
      @include font-size(1.2rem);
      font-weight: bold;
      background-color: #fff;
      border-radius: .5rem;
      border: none;
      border-top: 1px solid rgba(112, 112, 112, 0.3);

      &:first-child {
        border: none;
      }

      &.tabs__navigation-item--active {
        background-color: #FFE300;
        margin-bottom: 1.5rem;
      }

      @include sm {
        display: none;
      }
    }
  }
}

.icon-block {
  padding-left: 2rem;
  position: relative;
  margin-bottom: 1.5rem;
  box-sizing: border-box;

  i.icon-block__icon {
    position: absolute;
    left: 0px;
    top: .25rem;
  }

  & > span {
    font-weight: bold;
    display: block;
    margin-bottom: .5rem;
  }
}

.share {
  .social-share {
    margin-top: 1rem;

    &__item {
      margin-bottom: .5rem;
    }
  }
}

.tab--about {
  display: grid; grid-template-columns: repeat(2, 50%); grid-gap: 2rem
}

.goals {
  //display: flex;
  //flex-wrap: wrap;

  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;

    &-item {
      font-size: 14px;
      font-weight: bold;
      display: flex;
      cursor: pointer;
      align-items: center;

      i {
        width: 2rem;
        height: 2rem;
        margin-left: 1rem;
        margin-right: 1rem;
        border-radius: 50%;
      }

      span {
        display: flex;
        align-items: center;
      }
    }
  }
}

.support {

  &__block {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-gap: 1rem;
  }

  &__control {
    display: flex;
    align-items: center;
    justify-content: space-between;

    select {
      flex: 1;
      width: 100%;
      max-width: 80%;
    }
  }

  &__item-remove {
    border: none;
    background: #fff;
    transition: backgroound .2s, color .2s;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
      background: #C51A2D;
      color: #fff;
    }
  }

  &__item-add {
    margin-top: 1rem;
    border: none;
    background: transparent;
    cursor: pointer;
    border-radius: .25rem;
    transition: background .2s, color .2s;

    &:hover {
      background: #0F9848;
      color: #fff;
    }
  }
}

.edit {
  display: flex;
  flex-direction: row;
  border-radius: .25rem;
  overflow: hidden;


  input[type="text"],
  input[type="url"],
  input[type="password"],
  span {
    font-size: 16px;
    border: 1px solid #e8e8e8;
    padding-left: .5rem;
    padding-right: .5rem;
    box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.15);
  }

  &__icon {
    width: 2rem;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 0px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, .8);
    flex: 0 0 auto;

    &--primary {
      background-color: #FFE300;
      color: #000;
    }

    &--facebook {
      background-color: #134BCE;
    }

    &--linkedin {
      background-color: #0A66C2;
    }

    &--instagram {
      background-color: #E1306C;
    }

    &--twitter {
      background-color: #15BCDE;
    }

    &--youtube {
      background-color: #E70F0F;
    }
  }

  &--prepend {
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;

    input[type="text"],
    input[type="password"],
    input[type="url"],
    span {
      border-top-right-radius: .25rem;
      border-bottom-right-radius: .25rem;
      border-left: 0px;
    }
  }
}

.add_support {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: .25rem;
  border: 2px dashed #0A97D9;
  padding: 1rem;
  color: #0A97D9;
  font-size: .8rem;
  cursor: pointer;
  background: #fff;
  transition: color .2s, background .2s;

  &:hover {
    color: #fff;
    background: #0A97D9;
  }

  i {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
}
</style>

<style>
.ck-editor__editable_inline {
  height: 150px;
}

.ck-rounded-corners .ck.ck-editor__main > .ck-editor__editable,
.ck.ck-editor__main > .ck-editor__editable.ck-rounded-corners {
  border-bottom-left-radius: .25rem;
  border-bottom-right-radius: .25rem;
}

/*.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners {*/
/*  border-top-right-radius: .5rem;*/
/*  border-top-left-radius: .5rem;*/
/*}*/
</style>
