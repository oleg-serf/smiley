<template>
  <form @submit.prevent="onSubmit">
    <input
        type="file"
        class="file-input"
        ref="avatar"
        id="avatar-input"
        @input.prevent="addImage('avatar');"
        accept=".png, .jpg, .jpeg"
        style="display: none;"
    />
    <input
        type="file"
        class="file-input"
        ref="about_image"
        id="about-input"
        @input.prevent="addImage('about_image');"
        accept=".png, .jpg, .jpeg"
        style="display: none;"
    />
    <input
        type="file"
        class="file-input"
        ref="cover_image"
        id="cover-input"
        @input.prevent="addImage('cover_image');"
        accept=".png, .jpg, .jpeg"
        style="display: none;"
    />
    <div class="profile">
      <div class="profile__background">
        <img :src="user.cover_image"
             v-if="user.cover_image != null && isBase64(user.cover_image)"/>
        <img :src="$settings.images_path.users + 'covers/m_'+ user.cover_image" v-else-if="user.cover_image != null"/>
        <img src="/images/default-cover_image.jpg" v-else>
        <button type="button" class="button" style="position: absolute; bottom: 1.5rem; right: 1.5rem;"
                @click.prevent="editBackground">
          <i class="fa fa-edit"></i>
          Edit Background
        </button>
      </div>
      <div class="profile__info container">
        <div class="profile__avatar">
          <template v-if="user.avatar !== null && isBase64(user.avatar)">
            <img :src="user.avatar"/>
          </template>
          <template v-else-if="user.avatar != null">
            <img :src="$settings.images_path.users + 'm_'+ user.avatar"/>
          </template>
          <template v-else>
            <span class="profile__avatar-initials">{{ user.display_name | getInitials }}</span>
          </template>
          <button type="button" class="button" @click.prevent="editAvatar">
            <i class="fa fa-edit"></i>
          </button>
        </div>
        <div class="profile__description">
          <h1 class="profile__name">{{ user.display_name }}</h1>
          <template v-if="user.company_organization && user.job_title">
            <div class="profile__job-title">{{ user.company_organization }} - {{ user.job_title }}</div>
          </template>
          <template v-else-if="user.company_organization">
            <div class="profile__job-title">{{ user.company_organization }}</div>
          </template>
          <template v-else>
            <div class="profile__job-title">{{ user.job_title }}</div>
          </template>
          <div class="profile__location">{{ user.city + ', ' }} {{ user.country }}</div>
          <div class="profile__slogan">{{ user.slogan }}</div>
        </div>
        <div class="profile__holder-actions">
          <div class="profile__actions">
            <div class="profile__actions-item">
              <button class="button" type="submit">
                <i class="fa fa-save fa-i-prepend"></i>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tabs container">
      <div class="tabs__navigation">
        <button type="button" class="tabs__navigation-item"
                @click="tab = 'about'"
                :class="activeTab('about')"
        >About
        </button>
        <button type="button" class="tabs__navigation-item"
                @click="tab = 'support'"
                :class="activeTab('support')"
        >Support
        </button>
        <button type="button" class="tabs__navigation-item"
                @click="tab = 'interests'"
                :class="activeTab('interests')"
        >Interests
        </button>
        <button type="button" class="tabs__navigation-item"
                @click="tab = 'security'"
                :class="activeTab('security')"
        >Security
        </button>
      </div>
      <div class="tabs__content">
        <!--            About tab [+]-->
        <button class="tabs__content-button"
                type="button"
                @click="tab = 'about'"
                :class="activeTab('about')"
        >About
        </button>
        <div class="tabs__content-item" v-show="tab === 'about'">
          <div class="icon-block icon-block--50">
            <span>Real name:</span>
            <div class="edit edit--prepend">
              <i class="fa fa-user edit__icon edit__icon--primary"></i>
              <input type="text" v-model="user.full_name" placeholder="Full Name">
            </div>
          </div>
          <div class="icon-block icon-block--50">
            <span>Display name:</span>
            <div class="edit edit--prepend">
              <i class="fa fa-address-card-o edit__icon edit__icon--primary"></i>
              <input type="text" v-model="user.display_name" placeholder="Display Name">
            </div>
          </div>
          <div class="icon-block icon-block--50">
            <span>Slogan:</span>
            <div class="edit edit--prepend">
              <i class="fa fa-user edit__icon edit__icon--primary"></i>
              <input type="text" v-model="user.slogan" placeholder="Slogan">
            </div>
          </div>
          <div class="icon-block icon-block--50">
            <span>Charity Number:</span>
            <div class="edit edit--prepend">
              <i class="fa fa-hashtag edit__icon edit__icon--primary"></i>
              <input type="text" v-model="user.charity_number" placeholder="Charity Number">
            </div>
          </div>
          <div class="icon-block icon-block--50 link">
            <span>Date of Birth:</span>
            <div class="edit edit--prepend">
              <i class="fa fa-calendar edit__icon edit__icon--primary"></i>
<!--              <input type="date" v-model="user.dob">-->

              <DatePicker
                  v-model="user.dob"
                  format="MM.DD.YYYY"
                  value-type="YYYY-MM-DD"
              />
            </div>
          </div>
          <div class="icon-block icon-block--50">
            <span>Company name:</span>
            <div class="edit edit--prepend">
              <i class="fa fa-bank edit__icon edit__icon--primary"></i>
              <input type="text" v-model="user.company_organization">
            </div>
            <br>
            <span>Job title:</span>
            <div class="edit edit--prepend">
              <i class="fa fa-bank edit__icon edit__icon--primary"></i>
              <input type="text" v-model="user.job_title">
            </div>
          </div>
          <div class="icon-block icon-block--50">
            <span>Country</span>
            <div class="edit">
              <i class="fa fa-location-arrow edit__icon edit__icon--primary"></i>
              <select v-model="user.country">
                <option :value="item.code" v-for="item in countries" :key="item.code">{{ item.name }}</option>
              </select>
            </div>
          </div>
          <div class="icon-block icon-block--50">
            <span>City</span>
            <div class="edit">
              <i class="fa fa-map-pin edit__icon edit__icon--primary"></i>
              <input type="text" v-model="user.city" placeholder="City">
            </div>
          </div>
          <div class="icon-block icon-block--50 link">
            <span>Your website link:</span>
            <div class="edit edit--prepend">
              <i class="fa fa-external-link-square edit__icon edit__icon--primary"></i>
              <input type="url" v-model="user.website" placeholder="https://...">
            </div>
          </div>
          <div class="icon-block icon-block--50">
            <span>How did you hear about us?</span>
            <div class="edit">
              <i class="fa fa-question-circle edit__icon edit__icon--primary"></i>
              <select v-model="user.survey">
                <option value="1">Social Media</option>
                <option value="2">Google (Bing, etc) search</option>
                <option value="3">I attended a Smiley Movement event</option>
                <option value="4">From a friend</option>
                <option value="5">I received an email from Smiley Movement</option>
                <option value="6">I received a call from Smiley Movement</option>
                <option value="7">Other (Please specify)</option>
              </select>
            </div>
            <div class="edit" v-if="user.survey == 7" style="margin-top: 1.5rem;">
              <input
                  type="text"
                  v-model="user.survey_other"
                  placeholder="Specify here"
              />
            </div>
          </div>
          <div class="icon-block icon-block--50 about">
            <span>Bio:</span>
            <ckeditor :editor="editor" :config="editorConfig" v-model="user.bio"></ckeditor>
          </div>
          <div class="icon-block icon-block--50 share">
            <span>Your Social Media:</span>
            <ul class="">
              <li class="social-share__item">
                <div class="edit edit--prepend">
                  <i class="fa fa-facebook edit__icon edit__icon--facebook"></i>
                  <input type="url" v-model="user.facebook" placeholder="facebook">
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
          <div class="icon-block icon-block--50 personal-image">
            <img :src="user.about_image"
                 v-if="user.about_image != null && isBase64(user.about_image)"/>
            <img :src="$settings.images_path.users + 'about/m_'+ user.about_image"
                 v-else-if="user.about_image != null"/>
            <img src="/images/profile_about-placeholder.png" v-else>
          </div>
          <div class="icon-block icon-block--50">
            <button type="button" class="add_support" @click.prevent="editAbout()">
              <i class="fa fa-edit"></i>
              <span>Change Personal Image</span>
            </button>
          </div>
        </div>
        <!--            About tab [-]-->
        <!--            Support tab [+]-->
        <button class="tabs__content-button"
                type="button"
                @click="tab = 'support'"
                :class="activeTab('support')"
        >Support
        </button>
        <div class="tabs__content-item" v-show="tab === 'support'">
          <div class="icon-block support">
            <i class="fa fa-hand-o-right icon-block__icon"></i>
            Support offered:<br>
            <ul class="support__block">
              <li class="support_block-li" v-for="(item, index) in supportOffer">
                <!--                <div class="support__control">-->
                <div class="edit edit--append">
                  <select v-model="supportOffer[index].parent">
                    <option value="-1" selected disabled>Select category</option>
                    <option :value="category.id" v-for="category in supports">{{ category.title }}</option>
                  </select>
                  <button type="button" class="edit__icon edit__icon--danger"
                          @click.prevent="removeCategory('offered', index)">
                    <i class="fa fa-remove"></i>
                  </button>
                </div>
                <!--                </div>-->
                <ul class="support__block-sub">
                  <li v-for="(option, counter) in supportOffer[index].child">
                    <div class="edit edit--append">
                      <select v-model="supportOffer[index].child[counter]">
                        <option value="-1" selected disabled>Select option</option>
                        <option :value="category.id"
                                v-for="category in getSupportValues(supportOffer[index].parent)">
                          {{ category.title }}
                        </option>
                      </select>
                      <button type="button" class="edit__icon edit__icon--danger"
                              @click.prevent="removeItem('offered', index, counter)">
                        <i class="fa fa-remove"></i>
                      </button>
                    </div>
                  </li>
                </ul>
                <button type="button" class="support__item-add" @click.prevent="addItem('offered', index)">
                  <i class="fa fa-plus-circle"></i> Add item
                </button>
              </li>
              <li>
                <button type="button" class="add_support" @click.prevent="addCategory('offered')">
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
                <div class="edit edit--append">
                  <select v-model="supportNeeded[index].parent">
                    <option selected disabled>Select category</option>
                    <option :value="category.id" v-for="category in supports">{{ category.title }}</option>
                  </select>
                  <button type="button" class="edit__icon edit__icon--danger"
                          @click.prevent="removeCategory('needed', index)">
                    <i class="fa fa-remove"></i>
                  </button>
                </div>
                <ul class="support__block-sub">
                  <li v-for="(option, counter) in supportNeeded[index].child">
                    <div class="edit edit--append">
                      <select v-model="supportNeeded[index].child[counter]">
                        <option selected disabled>Select option</option>
                        <option :value="category.id"
                                v-for="category in getSupportValues(supportNeeded[index].parent)">
                          {{ category.title }}
                        </option>
                      </select>
                      <button type="button" class="edit__icon edit__icon--danger"
                              @click.prevent="removeItem('needed', index, counter)">
                        <i class="fa fa-remove"></i>
                      </button>
                    </div>
                  </li>
                </ul>
                <button type="button" class="support__item-add" @click.prevent="addItem('needed', index)">
                  <i class="fa fa-plus-circle"></i> Add item
                </button>
              </li>
              <li>
                <button type="button" class="add_support" @click.prevent="addCategory('needed')">
                  <i class="fa fa-plus-circle"></i>
                  <span>Add support Category</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <!--            Support tab [-]-->
        <!--            Interests tab [+]-->
        <button class="tabs__content-button"
                type="button"
                @click="tab = 'interests'"
                :class="activeTab('interests')"
        >Interests
        </button>
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
        <!--            Security tab [+]-->
        <button class="tabs__content-button"
                type="button"
                @click="tab = 'security'"
                :class="activeTab('security')"
        >Security
        </button>
        <div class="tabs__content-item" v-show="tab === 'security'">
          <div class="icon-block link">
            <span>Email:</span>
            <div class="edit edit--prepend">
              <i class="fa fa-envelope-o edit__icon edit__icon--primary"></i>
              <input type="email" v-model="user.email" placeholder="johndoe@gmail.com">
            </div>
          </div>
          <div></div>
          <div class="icon-block icon-block--50">
            <span>Old Password:</span>
            <div class="edit edit--prepend">
              <i class="fa fa-user-secret  edit__icon edit__icon--primary"></i>
              <input :type="passwordDisplay" v-model="user.old_password">
              <button type="button" @click.prevent="switchVisibility()">
                <i class="fa fa-eye"></i>
              </button>
            </div>
          </div>
          <div class="icon-block icon-block--50">
            <span>New Password:</span>
            <div class="edit edit--prepend">
              <i class="fa fa-user-secret  edit__icon edit__icon--primary"></i>
              <input :type="passwordDisplay" v-model="user.password">
            </div>
          </div>
        </div>
        <!--            Security tab [-]-->
      </div>
    </div>
  </form>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

import axios from "@/axios-auth";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import router from "@/router";

export default {
  name: "UserProfile",
  components: {
    ClassicEditor,
    DatePicker,
  },
  data() {
    return {
      user: {
        cover_image_new: null,
      },
      goals: [],
      supports: [],
      passwordDisplay: 'password',
      //
      supportNeeded: [],
      supportOffer: [],
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
      countries: [
        {name: "Afghanistan", code: "AF"},
        {name: "Åland Islands", code: "AX"},
        {name: "Albania", code: "AL"},
        {name: "Algeria", code: "DZ"},
        {name: "American Samoa", code: "AS"},
        {name: "AndorrA", code: "AD"},
        {name: "Angola", code: "AO"},
        {name: "Anguilla", code: "AI"},
        {name: "Antarctica", code: "AQ"},
        {name: "Antigua and Barbuda", code: "AG"},
        {name: "Argentina", code: "AR"},
        {name: "Armenia", code: "AM"},
        {name: "Aruba", code: "AW"},
        {name: "Australia", code: "AU"},
        {name: "Austria", code: "AT"},
        {name: "Azerbaijan", code: "AZ"},
        {name: "Bahamas", code: "BS"},
        {name: "Bahrain", code: "BH"},
        {name: "Bangladesh", code: "BD"},
        {name: "Barbados", code: "BB"},
        {name: "Belarus", code: "BY"},
        {name: "Belgium", code: "BE"},
        {name: "Belize", code: "BZ"},
        {name: "Benin", code: "BJ"},
        {name: "Bermuda", code: "BM"},
        {name: "Bhutan", code: "BT"},
        {name: "Bolivia", code: "BO"},
        {name: "Bosnia and Herzegovina", code: "BA"},
        {name: "Botswana", code: "BW"},
        {name: "Bouvet Island", code: "BV"},
        {name: "Brazil", code: "BR"},
        {name: "British Indian Ocean Territory", code: "IO"},
        {name: "Brunei Darussalam", code: "BN"},
        {name: "Bulgaria", code: "BG"},
        {name: "Burkina Faso", code: "BF"},
        {name: "Burundi", code: "BI"},
        {name: "Cambodia", code: "KH"},
        {name: "Cameroon", code: "CM"},
        {name: "Canada", code: "CA"},
        {name: "Cape Verde", code: "CV"},
        {name: "Cayman Islands", code: "KY"},
        {name: "Central African Republic", code: "CF"},
        {name: "Chad", code: "TD"},
        {name: "Chile", code: "CL"},
        {name: "China", code: "CN"},
        {name: "Christmas Island", code: "CX"},
        {name: "Cocos (Keeling) Islands", code: "CC"},
        {name: "Colombia", code: "CO"},
        {name: "Comoros", code: "KM"},
        {name: "Congo", code: "CG"},
        {name: "Congo, The Democratic Republic of the", code: "CD"},
        {name: "Cook Islands", code: "CK"},
        {name: "Costa Rica", code: "CR"},
        {name: "Cote D'Ivoire", code: "CI"},
        {name: "Croatia", code: "HR"},
        {name: "Cuba", code: "CU"},
        {name: "Cyprus", code: "CY"},
        {name: "Czech Republic", code: "CZ"},
        {name: "Denmark", code: "DK"},
        {name: "Djibouti", code: "DJ"},
        {name: "Dominica", code: "DM"},
        {name: "Dominican Republic", code: "DO"},
        {name: "Ecuador", code: "EC"},
        {name: "Egypt", code: "EG"},
        {name: "El Salvador", code: "SV"},
        {name: "Equatorial Guinea", code: "GQ"},
        {name: "Eritrea", code: "ER"},
        {name: "Estonia", code: "EE"},
        {name: "Ethiopia", code: "ET"},
        {name: "Falkland Islands (Malvinas)", code: "FK"},
        {name: "Faroe Islands", code: "FO"},
        {name: "Fiji", code: "FJ"},
        {name: "Finland", code: "FI"},
        {name: "France", code: "FR"},
        {name: "French Guiana", code: "GF"},
        {name: "French Polynesia", code: "PF"},
        {name: "French Southern Territories", code: "TF"},
        {name: "Gabon", code: "GA"},
        {name: "Gambia", code: "GM"},
        {name: "Georgia", code: "GE"},
        {name: "Germany", code: "DE"},
        {name: "Ghana", code: "GH"},
        {name: "Gibraltar", code: "GI"},
        {name: "Greece", code: "GR"},
        {name: "Greenland", code: "GL"},
        {name: "Grenada", code: "GD"},
        {name: "Guadeloupe", code: "GP"},
        {name: "Guam", code: "GU"},
        {name: "Guatemala", code: "GT"},
        {name: "Guernsey", code: "GG"},
        {name: "Guinea", code: "GN"},
        {name: "Guinea-Bissau", code: "GW"},
        {name: "Guyana", code: "GY"},
        {name: "Haiti", code: "HT"},
        {name: "Heard Island and Mcdonald Islands", code: "HM"},
        {name: "Holy See (Vatican City State)", code: "VA"},
        {name: "Honduras", code: "HN"},
        {name: "Hong Kong", code: "HK"},
        {name: "Hungary", code: "HU"},
        {name: "Iceland", code: "IS"},
        {name: "India", code: "IN"},
        {name: "Indonesia", code: "ID"},
        {name: "Iran, Islamic Republic Of", code: "IR"},
        {name: "Iraq", code: "IQ"},
        {name: "Ireland", code: "IE"},
        {name: "Isle of Man", code: "IM"},
        {name: "Israel", code: "IL"},
        {name: "Italy", code: "IT"},
        {name: "Jamaica", code: "JM"},
        {name: "Japan", code: "JP"},
        {name: "Jersey", code: "JE"},
        {name: "Jordan", code: "JO"},
        {name: "Kazakhstan", code: "KZ"},
        {name: "Kenya", code: "KE"},
        {name: "Kiribati", code: "KI"},
        {name: "Korea, Democratic People'S Republic of", code: "KP"},
        {name: "Korea, Republic of", code: "KR"},
        {name: "Kuwait", code: "KW"},
        {name: "Kyrgyzstan", code: "KG"},
        {name: "Lao People'S Democratic Republic", code: "LA"},
        {name: "Latvia", code: "LV"},
        {name: "Lebanon", code: "LB"},
        {name: "Lesotho", code: "LS"},
        {name: "Liberia", code: "LR"},
        {name: "Libyan Arab Jamahiriya", code: "LY"},
        {name: "Liechtenstein", code: "LI"},
        {name: "Lithuania", code: "LT"},
        {name: "Luxembourg", code: "LU"},
        {name: "Macao", code: "MO"},
        {name: "Macedonia, The Former Yugoslav Republic of", code: "MK"},
        {name: "Madagascar", code: "MG"},
        {name: "Malawi", code: "MW"},
        {name: "Malaysia", code: "MY"},
        {name: "Maldives", code: "MV"},
        {name: "Mali", code: "ML"},
        {name: "Malta", code: "MT"},
        {name: "Marshall Islands", code: "MH"},
        {name: "Martinique", code: "MQ"},
        {name: "Mauritania", code: "MR"},
        {name: "Mauritius", code: "MU"},
        {name: "Mayotte", code: "YT"},
        {name: "Mexico", code: "MX"},
        {name: "Micronesia, Federated States of", code: "FM"},
        {name: "Moldova, Republic of", code: "MD"},
        {name: "Monaco", code: "MC"},
        {name: "Mongolia", code: "MN"},
        {name: "Montserrat", code: "MS"},
        {name: "Morocco", code: "MA"},
        {name: "Mozambique", code: "MZ"},
        {name: "Myanmar", code: "MM"},
        {name: "Namibia", code: "NA"},
        {name: "Nauru", code: "NR"},
        {name: "Nepal", code: "NP"},
        {name: "Netherlands", code: "NL"},
        {name: "Netherlands Antilles", code: "AN"},
        {name: "New Caledonia", code: "NC"},
        {name: "New Zealand", code: "NZ"},
        {name: "Nicaragua", code: "NI"},
        {name: "Niger", code: "NE"},
        {name: "Nigeria", code: "NG"},
        {name: "Niue", code: "NU"},
        {name: "Norfolk Island", code: "NF"},
        {name: "Northern Mariana Islands", code: "MP"},
        {name: "Norway", code: "NO"},
        {name: "Oman", code: "OM"},
        {name: "Pakistan", code: "PK"},
        {name: "Palau", code: "PW"},
        {name: "Palestinian Territory, Occupied", code: "PS"},
        {name: "Panama", code: "PA"},
        {name: "Papua New Guinea", code: "PG"},
        {name: "Paraguay", code: "PY"},
        {name: "Peru", code: "PE"},
        {name: "Philippines", code: "PH"},
        {name: "Pitcairn", code: "PN"},
        {name: "Poland", code: "PL"},
        {name: "Portugal", code: "PT"},
        {name: "Puerto Rico", code: "PR"},
        {name: "Qatar", code: "QA"},
        {name: "Reunion", code: "RE"},
        {name: "Romania", code: "RO"},
        {name: "Russian Federation", code: "RU"},
        {name: "RWANDA", code: "RW"},
        {name: "Saint Helena", code: "SH"},
        {name: "Saint Kitts and Nevis", code: "KN"},
        {name: "Saint Lucia", code: "LC"},
        {name: "Saint Pierre and Miquelon", code: "PM"},
        {name: "Saint Vincent and the Grenadines", code: "VC"},
        {name: "Samoa", code: "WS"},
        {name: "San Marino", code: "SM"},
        {name: "Sao Tome and Principe", code: "ST"},
        {name: "Saudi Arabia", code: "SA"},
        {name: "Senegal", code: "SN"},
        {name: "Serbia and Montenegro", code: "CS"},
        {name: "Seychelles", code: "SC"},
        {name: "Sierra Leone", code: "SL"},
        {name: "Singapore", code: "SG"},
        {name: "Slovakia", code: "SK"},
        {name: "Slovenia", code: "SI"},
        {name: "Solomon Islands", code: "SB"},
        {name: "Somalia", code: "SO"},
        {name: "South Africa", code: "ZA"},
        {name: "South Georgia and the South Sandwich Islands", code: "GS"},
        {name: "Spain", code: "ES"},
        {name: "Sri Lanka", code: "LK"},
        {name: "Sudan", code: "SD"},
        {name: "Suriname", code: "SR"},
        {name: "Svalbard and Jan Mayen", code: "SJ"},
        {name: "Swaziland", code: "SZ"},
        {name: "Sweden", code: "SE"},
        {name: "Switzerland", code: "CH"},
        {name: "Syrian Arab Republic", code: "SY"},
        {name: "Taiwan, Province of China", code: "TW"},
        {name: "Tajikistan", code: "TJ"},
        {name: "Tanzania, United Republic of", code: "TZ"},
        {name: "Thailand", code: "TH"},
        {name: "Timor-Leste", code: "TL"},
        {name: "Togo", code: "TG"},
        {name: "Tokelau", code: "TK"},
        {name: "Tonga", code: "TO"},
        {name: "Trinidad and Tobago", code: "TT"},
        {name: "Tunisia", code: "TN"},
        {name: "Turkey", code: "TR"},
        {name: "Turkmenistan", code: "TM"},
        {name: "Turks and Caicos Islands", code: "TC"},
        {name: "Tuvalu", code: "TV"},
        {name: "Uganda", code: "UG"},
        {name: "Ukraine", code: "UA"},
        {name: "United Arab Emirates", code: "AE"},
        {name: "United Kingdom", code: "GB"},
        {name: "United States", code: "US"},
        {name: "United States Minor Outlying Islands", code: "UM"},
        {name: "Uruguay", code: "UY"},
        {name: "Uzbekistan", code: "UZ"},
        {name: "Vanuatu", code: "VU"},
        {name: "Venezuela", code: "VE"},
        {name: "Viet Nam", code: "VN"},
        {name: "Virgin Islands, British", code: "VG"},
        {name: "Virgin Islands, U.S.", code: "VI"},
        {name: "Wallis and Futuna", code: "WF"},
        {name: "Western Sahara", code: "EH"},
        {name: "Yemen", code: "YE"},
        {name: "Zambia", code: "ZM"},
        {name: "Zimbabwe", code: "ZW"}
      ]
    };
  },
  filters: {
    getInitials(text) {
      let initials = '';
      if (!text) return;

      const words = text.split(' ');
      words.forEach(item =>
          initials.push(words.charAt(0))
      );
      return initials.join();
    },
  },
  methods: {
    editAvatar() {
      this.$refs.avatar.click();
    },
    editBackground() {
      this.$refs.cover_image.click();
    },
    editAbout() {
      this.$refs.about_image.click();
    },
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
      items.push({
        parent: 1,
        child: [-1]
      });
    },
    addImage(type) {
      const input = this.$refs[type];
      const files = input.files;
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
          this.user[type] = e.target.result;
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      }
    },
    isBase64(image) {
      if (!image) return false;
      return image.includes(';base64,');
    },
    onSubmit() {
      const request = {...this.user, need: [], offer: []};
      this.supportNeeded.forEach(parent => {
        parent.child.forEach(child => {
          request.need.push(child);
        })
      });
      this.supportOffer.forEach(parent => {
        parent.child.forEach(child => {
          request.offer.push(child);
        })
      });

      axios
          .post("/users/settings", request)
          .then(response => {
            this.$swal({text: "Profile Updated", icon: "success"}).then(() => {
              router.push({
                name: "profile"
              });
            });
            this.$store.commit("user/SET_USERDATA", response.data);
          })
          .catch(error => {
            let content = JSON.parse(error.request.response);
            let finalMessage = content.errors.join("<br>");
            this.$swal({text: finalMessage, icon: "error"});
          });
    },
  },
  mounted() {
    axios
        .get("/users/settings")
        .then(response => {
          console.log("GET User profile settings", response.data);
          this.user = response.data.user;
          this.goals = response.data.all_goals;
          this.supports = response.data.all_supports;

          this.user.goals = this.user.goals.map(item => item.id);

          const tempNeeds = [];
          const tempOffers = [];
          const emptyItem = {
            parent: 1,
            child: []
          };
          response.data.need_support.forEach(parent => {
            const children = parent.supports.map(item => item.id);
            tempNeeds.push({
              parent: parent.id,
              child: children,
            });
          });
          response.data.offer_support.forEach(parent => {
            const children = parent.supports.map(item => item.id);
            tempOffers.push({
              parent: parent.id,
              child: children,
            });
          });
          this.supportNeeded = tempNeeds ? tempNeeds : [emptyItem];
          this.supportOffer = tempOffers ? tempOffers : [emptyItem];


          const tempArray = [];
          this.supports.forEach(category => {
            const categoryArray = [];
            category.supports.forEach(element => {

            });
          });
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
    position: relative;

    button {
      position: absolute;
      bottom: -2px;
    }

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
    background-color: #fff;
    padding-top: 1.5rem;

    @include smMax {
      border-radius: .5rem;
      padding: 0px;
      overflow: hidden;
    }

    &-item {
      display: flex;
      flex-wrap: wrap;
      //@include smMax {
      //  padding-left: 1rem;
      //  padding-right: 1rem;
      //  padding-bottom: 1rem;
      //}
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
  padding-right: 2rem;
  position: relative;
  margin: .5rem 2rem 1rem 2rem;
  margin-bottom: 1.5rem;
  box-sizing: border-box;
  width: calc(100% - 4rem);


  &--50 {
    width: calc(50% - 4rem);
  }

  @include mdMax {
    width: 100% !important;
  }

  @include smMax {
    margin-left: .5rem;
    margin-right: .5rem;
    padding-left: .5rem;
    padding-right: .5rem;
  }

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

.goals {
  //display: flex;
  //flex-wrap: wrap;

  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;

    @include mdMax {
      grid-template-columns: 1fr;
    }

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

    @include mdMax {
      grid-template-columns: 1fr;
    }

    &-sub {
      margin-top: 1rem;
      padding-left: 1.5rem;
      list-style: disc;

      li {
        margin-top: .5rem;
      }
    }
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
  input[type="date"],
  select,
  span {
    font-size: 16px;
    border: 1px solid #e8e8e8;
    padding: .25rem .5rem;
    line-height: 1.5;
    box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.15);
    flex: 1 1 auto;
    width: 1%;
  }

  button {
    cursor: pointer;
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
    border: none;

    &--primary {
      background-color: #FFE300;
      color: #000;
    }

    &--danger {
      background-color: #B02541;
      color: #fff;
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
    input[type="date"],
    select,
    span {
      border-top-right-radius: .25rem;
      border-bottom-right-radius: .25rem;
      border-left: 0px;
      flex: 1 1 auto;
      width: 1%;
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

  &--xl {
    font-size: 1rem;
    font-weight: bold;

    i {
      font-size: 2rem;
    }
  }
}

.mx-datepicker {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  border-left: 0px;
  flex: 1 1 auto;
  width: 1%;

  ::v-deep .mx-input {
    font-size: 16px;
    border: 1px solid #e8e8e8;
    padding: 0.25rem 0.5rem;
    line-height: 1.5;
    box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.15);
  }
}

.personal-image {
  img {
    max-width: 100%;
    height: auto;
  }
}
</style>

<style>
.ck-editor__editable_inline {
  height: 160px;
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
