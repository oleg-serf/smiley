<template>
  <header>
    <div class="nav nav-shadow">
      <div class="top-line">
        <div class="top-line-wrap">
          <div class="top-menu">
            <div class="menu-icon">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="tm-left">
              <router-link class="tm-logo" to="/">
                <img src="/img/homepage/logo.png" alt="logo" />
              </router-link>
            </div>
            <div class="menu-links">
              <router-link to="/talks" class="menu-item">
                <span>Smiley talks</span>
              </router-link>
              <router-link to="/news" class="menu-item">
                <span>Smiley news</span>
              </router-link>
              <!--              <a class="menu-item" href="#"><span>Smiley awards</span></a>-->
              <span class="menu-item" href="#">
                <span>Network</span>

                <ul class="submenu">
                  <li>
                    <router-link :to="{name: 'partners'}" class="menu-item">
                      <span>Our Partners</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{name: 'organisations'}" class="menu-item">
                      <span>Organisations</span>
                    </router-link>
                  </li>
                </ul>
              </span>
              <router-link to="/our-story" class="menu-item">
                <span>Our story</span>
              </router-link>
              <div class="btn-wrap">
                <!--                <button class="login-join-btn">Login | Join</button>-->
                <router-link to="login" v-if="!auth" class="login-join-btn">Login | Join</router-link>
                <div v-else @click="onLogout" class="login-join-btn">Sign out</div>
              </div>
            </div>

            <div class="tm-right">
              <div class="login-block" v-if="auth">
                <a class="search-icon" href="#" style="display: none">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11 2C15.9706 2 20 6.02944 20 11C20 13.1248 19.2637 15.0776 18.0323 16.6172L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3466 22.0676 20.7794 22.0953 20.3871 21.7903L20.2929 21.7071L16.6172 18.0323C15.0776 19.2637 13.1248 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2ZM11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4Z"
                      fill="#1A1A1A"
                    />
                  </svg>
                </a>
                <a class="second-icon" href="#" style="display: none">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.99995 20C4.29569 20 3.82468 19.2979 4.05973 18.6586L4.10552 18.5528L5.26094 16.242C5.69833 15.3672 5.94701 14.4115 5.99238 13.4369L5.99995 13.1115V10C5.99995 7.02694 8.16233 4.55893 11.0001 4.08293L10.9999 3C10.9999 2.44772 11.4477 2 11.9999 2C12.5522 2 12.9999 2.44772 12.9999 3L13.0008 4.08309C15.7593 4.54627 17.8793 6.89172 17.995 9.75347L17.9999 10V13.1115C17.9999 14.0895 18.2049 15.0555 18.6002 15.9474L18.739 16.242L19.8944 18.5528C20.2093 19.1827 19.792 19.918 19.1151 19.9936L18.9999 20H13.9999C13.9999 21.1046 13.1045 22 11.9999 22C10.8954 22 9.99995 21.1046 9.99995 20H4.99995ZM11.9999 6C9.85775 6 8.10887 7.68397 8.00484 9.80036L7.99995 10V13.1115C7.99995 14.3922 7.7266 15.6569 7.19975 16.8213L7.04979 17.1364L6.61798 18H17.3819L16.9501 17.1364C16.3773 15.9908 16.0562 14.7374 16.0067 13.4603L15.9999 13.1115V10C15.9999 7.79086 14.2091 6 11.9999 6Z"
                      fill="#1A1A1A"
                    />
                  </svg>
                </a>
                <div class="avatar-icon">
                  <div class="user-avatar">
                    <template v-if="avatar !== 'null'">
                      <img :src="$settings.images_path.users + 's_' + avatar" />
                    </template>
                    <template v-else>
                      <span>{{ avatarTextual | filterAvatar }}</span>
                    </template>
                  </div>
                  <ul>
                    <li>
                      <router-link :to="{name: 'feed'}">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6 16C3.79086 16 2 14.0812 2 11.7143C2 9.78982 3.19155 8.13306 4.86361 7.60405C5.74104 5.4454 7.7417 4 10 4C12.8522 4 15.2063 6.28456 15.5554 9.23893C16.9581 9.60266 18 10.9567 18 12.5714C18 14.3901 16.6749 15.8894 14.9641 15.9953L14.8 16H6ZM6 14L14.8406 13.9991C15.4685 13.9603 16 13.3602 16 12.5714C16 11.876 15.58 11.3115 15.0534 11.1749C14.2553 10.968 13.6659 10.2924 13.5692 9.47359C13.3328 7.47287 11.7844 6 10 6C8.59574 6 7.30266 6.91486 6.7164 8.35716C6.51471 8.85335 6.12357 9.24551 5.63372 9.44985L5.32061 9.56428C4.55329 9.88244 4 10.7274 4 11.7143C4 13.0063 4.92744 14 6 14Z"
                            fill="#1A1A1A"
                          />
                        </svg>
                        My News Feed
                      </router-link>
                    </li>
                    <li v-if="isOrganisationAdmin !== null">
                      <router-link :to="'/organisation/' + organisationSlug">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 10C8.8739 10 10.1301 10.5129 11.0941 11.361C11.6809 11.1285 12.3248 11 13 11C15.7614 11 18 13.149 18 15.8C18 16.4627 17.4404 17 16.75 17H3.375C2.61561 17 2 16.3732 2 15.6C2 12.5072 4.46243 10 7.5 10ZM7 3C8.65685 3 10 4.34315 10 6C10 7.65685 8.65685 9 7 9C5.34315 9 4 7.65685 4 6C4 4.34315 5.34315 3 7 3ZM14 5C15.1046 5 16 5.89543 16 7C16 8.10457 15.1046 9 14 9C12.8954 9 12 8.10457 12 7C12 5.89543 12.8954 5 14 5Z"
                            fill="#1A1A1A"
                          />
                        </svg>
                        My Organisation
                      </router-link>
                    </li>
                    <li v-else>
                      <router-link :to="{name: 'add-organisation'}">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 10C8.8739 10 10.1301 10.5129 11.0941 11.361C11.6809 11.1285 12.3248 11 13 11C15.7614 11 18 13.149 18 15.8C18 16.4627 17.4404 17 16.75 17H3.375C2.61561 17 2 16.3732 2 15.6C2 12.5072 4.46243 10 7.5 10ZM7 3C8.65685 3 10 4.34315 10 6C10 7.65685 8.65685 9 7 9C5.34315 9 4 7.65685 4 6C4 4.34315 5.34315 3 7 3ZM14 5C15.1046 5 16 5.89543 16 7C16 8.10457 15.1046 9 14 9C12.8954 9 12 8.10457 12 7C12 5.89543 12.8954 5 14 5Z"
                            fill="#1A1A1A"
                          />
                        </svg>
                        Create an Organisation
                      </router-link>
                    </li>
                    <li style="display: none;">
                      <a href="#">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9.22673 2L10.792 2.00092C10.8513 2.00374 10.9206 2.01157 10.996 2.02798L11.1691 2.07097C11.5713 2.18771 11.7606 2.3983 12.1292 3.25077L12.2871 3.62729L12.451 4.03345L12.8342 3.86293C13.5976 3.5299 13.9434 3.42718 14.2162 3.42718C14.4976 3.42718 14.7823 3.52607 15.0015 3.69975L15.1053 3.79271L16.162 4.84498L16.3131 5.00911C16.5965 5.34082 16.6592 5.6034 16.4605 6.23104L16.3501 6.54822L16.2017 6.92673L15.9559 7.51329L16.5451 7.73561C17.4648 8.09429 17.7359 8.28039 17.8846 8.65252L17.9112 8.72456L17.9589 8.88382C17.983 8.97411 17.9932 9.03819 17.9974 9.10962L18 9.22647V10.7103C18 10.8339 17.9957 10.9055 17.9638 11.0333C17.8364 11.5449 17.6948 11.7264 16.7372 12.1393L16.5479 12.2196L15.9705 12.4545L16.1501 12.8493C16.699 14.0756 16.7553 14.4343 16.4201 14.8678L16.3669 14.9335L16.2432 15.0712L15.1562 16.1575C14.9192 16.3971 14.5856 16.5274 14.2606 16.5274C14.0898 16.5274 13.8749 16.4815 13.5706 16.3792L13.4107 16.3234L13.0414 16.1822L12.4851 15.9527L12.3291 16.3681C11.9164 17.4488 11.7331 17.738 11.3315 17.8915L11.2583 17.9173L11.1043 17.9615C11.0169 17.9841 10.955 17.9937 10.8862 17.9975L10.7735 18L9.20804 17.9991C9.14892 17.9963 9.0799 17.9885 9.00474 17.9722C8.54231 17.872 8.34049 17.7504 8.01586 17.071L7.94428 16.9167L7.78648 16.5521L7.548 15.9666L7.16457 16.1371C6.40086 16.47 6.05525 16.5726 5.78293 16.5726C5.50495 16.5726 5.22404 16.4758 4.99889 16.3004L4.89124 16.2062L3.80292 15.1181C3.39492 14.6856 3.29446 14.454 3.58402 13.6276L3.64716 13.4541L3.79474 13.0796L4.04309 12.488L3.63394 12.3344C2.56805 11.9272 2.27115 11.7406 2.11385 11.3438L2.08741 11.2715L2.04015 11.1117C2.01662 11.0224 2.00662 10.959 2.00257 10.8884L2 10.7728V9.28807C2 9.16346 2.00443 9.09116 2.03688 8.96228C2.14872 8.51808 2.27014 8.32367 2.93112 8.00948L3.09347 7.93468L3.45277 7.7802L4.02991 7.54625L3.85081 7.15004C3.24863 5.79456 3.24293 5.47232 3.72774 4.95938L3.79688 4.88814L4.84611 3.84129C5.08115 3.60495 5.41329 3.47332 5.73894 3.47332C5.93873 3.47332 6.19675 3.53525 6.59065 3.67775L6.768 3.7438L7.12861 3.88661L7.51564 4.04737L7.74446 3.4443C8.11371 2.50387 8.30627 2.2324 8.69908 2.09454L8.77516 2.07013L8.93507 2.02947C9.01225 2.01219 9.06675 2.00485 9.12744 2.00188L10.792 2.00092L9.22673 2ZM10.2654 4H9.68478L9.59598 4.21539L9.49017 4.4849L9.19618 5.26965C9.11261 5.49033 8.95422 5.67311 8.75061 5.78744L8.64518 5.83875L8.00809 6.10386C7.80128 6.18992 7.57287 6.20358 7.35928 6.14497L7.23321 6.10113L6.57075 5.82099L6.24104 5.68718L5.94281 5.57228L5.5309 5.98326L5.73485 6.45907L6.0825 7.22097C6.17926 7.43127 6.19949 7.66722 6.14237 7.88868L6.09881 8.01951L5.8383 8.65256C5.74962 8.86805 5.58902 9.04463 5.38569 9.15353L5.28061 9.2022L4.48631 9.52093L4.215 9.63473L4 9.7291V10.3211L4.1007 10.3632L4.48192 10.5142L5.25883 10.8036C5.48612 10.8856 5.67472 11.0465 5.79169 11.2548L5.84406 11.3628L6.1046 11.994C6.19063 12.2024 6.20322 12.4324 6.14273 12.647L6.09767 12.7735L5.76187 13.5636L5.56652 14.054L5.97824 14.4652L6.23658 14.358L6.73453 14.1392L7.20477 13.9233C7.42382 13.8187 7.6721 13.7978 7.90343 13.8621L8.01747 13.9013L8.6583 14.1659C8.8767 14.256 9.05489 14.42 9.16311 14.6273L9.21125 14.7344L9.5246 15.5138L9.7339 16H10.3168L10.405 15.7852L10.5103 15.5164L10.8036 14.732C10.8871 14.5094 11.0467 14.325 11.2521 14.2103L11.3585 14.1588L11.9966 13.8955C12.201 13.8112 12.4263 13.7974 12.6375 13.8541L12.7623 13.8967L13.2451 14.1021L13.7597 14.3135L14.0574 14.4284L14.47 14.0166L14.4286 13.9165L14.1971 13.3887L13.917 12.7794C13.8199 12.5687 13.7996 12.3323 13.857 12.1104L13.9007 11.9793L14.1608 11.349C14.249 11.1352 14.4081 10.9597 14.6095 10.8508L14.7136 10.802L15.5124 10.4801L16 10.2705V9.67935L15.8992 9.63741L15.5173 9.48681L14.7378 9.19724C14.511 9.11473 14.323 8.95356 14.2066 8.74517L14.1546 8.63719L13.8945 8.00344C13.8092 7.79556 13.7968 7.56631 13.8571 7.35247L13.902 7.22631L14.2372 6.43685L14.4323 5.94503L14.0203 5.53474L13.8981 5.58478L13.4412 5.78197L12.7801 6.08244C12.5701 6.17864 12.3348 6.19865 12.1138 6.14168L11.9833 6.09825L11.3429 5.835C11.1273 5.7464 10.9507 5.58585 10.8417 5.38255L10.793 5.27747L10.5393 4.64409L10.3603 4.21528L10.2654 4ZM10.0003 8C11.1028 8 12 8.89682 12 9.99942C12 11.102 11.1029 12 10.0003 12C8.89731 12 8 11.1022 8 9.99942C8 8.89663 8.89734 8 10.0003 8Z"
                            fill="#1A1A1A"
                          />
                        </svg>
                        Account Settings
                      </a>
                    </li>
                    <li>
                      <router-link to="login" v-if="!auth">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.14354 5.8762C3.42858 5.40316 4.04313 5.25076 4.51617 5.5358C4.98922 5.82085 5.14162 6.4354 4.85657 6.90844C4.29883 7.83403 4 8.89388 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 8.89457 15.7015 7.83536 15.1445 6.91016C14.8596 6.43703 15.0122 5.82253 15.4853 5.53764C15.9585 5.25276 16.573 5.40536 16.8578 5.8785C17.6012 7.113 18 8.52846 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 8.52754 2.39934 7.11123 3.14354 5.8762ZM10 2C10.5523 2 11 2.44772 11 3V7C11 7.55228 10.5523 8 10 8C9.44772 8 9 7.55228 9 7V3C9 2.44772 9.44772 2 10 2Z"
                            fill="#1A1A1A"
                          />
                        </svg>
                        Login
                      </router-link>
                      <div v-else @click="onLogout">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.14354 5.8762C3.42858 5.40316 4.04313 5.25076 4.51617 5.5358C4.98922 5.82085 5.14162 6.4354 4.85657 6.90844C4.29883 7.83403 4 8.89388 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 8.89457 15.7015 7.83536 15.1445 6.91016C14.8596 6.43703 15.0122 5.82253 15.4853 5.53764C15.9585 5.25276 16.573 5.40536 16.8578 5.8785C17.6012 7.113 18 8.52846 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 8.52754 2.39934 7.11123 3.14354 5.8762ZM10 2C10.5523 2 11 2.44772 11 3V7C11 7.55228 10.5523 8 10 8C9.44772 8 9 7.55228 9 7V3C9 2.44772 9.44772 2 10 2Z"
                            fill="#1A1A1A"
                          />
                        </svg>
                        Sign Out
                      </div>
                    </li>
                  </ul>
                </div>
                <a class="arrow-icon" href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.0002 8.00025C21.0002 8.25625 20.9023 8.51225 20.7073 8.70725L12.7072 16.7072C12.3162 17.0982 11.6842 17.0982 11.2933 16.7072L3.29325 8.70725C2.90225 8.31625 2.90225 7.68425 3.29325 7.29325C3.68425 6.90225 4.31625 6.90225 4.70725 7.29325L12.0002 14.5862L19.2932 7.29325C19.6842 6.90225 20.3162 6.90225 20.7073 7.29325C20.9023 7.48825 21.0002 7.74425 21.0002 8.00025Z"
                      fill="#1A1A1A"
                    />
                  </svg>
                </a>
              </div>

              <div class="register-block" v-else>
                <!--                <a class="search-icon" href="#">-->
                <!--                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
                <!--                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2C15.9706 2 20 6.02944 20 11C20 13.1248 19.2637 15.0776 18.0323 16.6172L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3466 22.0676 20.7794 22.0953 20.3871 21.7903L20.2929 21.7071L16.6172 18.0323C15.0776 19.2637 13.1248 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2ZM11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4Z" fill="#1A1A1A"/>-->
                <!--                  </svg>-->
                <!--                </a>-->
                <!--                <a class="second-icon" href="#">-->
                <!--                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
                <!--                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.99995 20C4.29569 20 3.82468 19.2979 4.05973 18.6586L4.10552 18.5528L5.26094 16.242C5.69833 15.3672 5.94701 14.4115 5.99238 13.4369L5.99995 13.1115V10C5.99995 7.02694 8.16233 4.55893 11.0001 4.08293L10.9999 3C10.9999 2.44772 11.4477 2 11.9999 2C12.5522 2 12.9999 2.44772 12.9999 3L13.0008 4.08309C15.7593 4.54627 17.8793 6.89172 17.995 9.75347L17.9999 10V13.1115C17.9999 14.0895 18.2049 15.0555 18.6002 15.9474L18.739 16.242L19.8944 18.5528C20.2093 19.1827 19.792 19.918 19.1151 19.9936L18.9999 20H13.9999C13.9999 21.1046 13.1045 22 11.9999 22C10.8954 22 9.99995 21.1046 9.99995 20H4.99995ZM11.9999 6C9.85775 6 8.10887 7.68397 8.00484 9.80036L7.99995 10V13.1115C7.99995 14.3922 7.7266 15.6569 7.19975 16.8213L7.04979 17.1364L6.61798 18H17.3819L16.9501 17.1364C16.3773 15.9908 16.0562 14.7374 16.0067 13.4603L15.9999 13.1115V10C15.9999 7.79086 14.2091 6 11.9999 6Z" fill="#1A1A1A"/>-->
                <!--                  </svg>-->
                <!--                </a>-->
                <div class="login-register-btns-wrap">
                  <a
                    class="login-register-btn"
                    @click="registerDropdownShow = !registerDropdownShow"
                  >Login / Register</a>
                  <div
                    class="login-and-new-account-btns"
                    v-on-clickaway="away"
                    v-if="registerDropdownShow"
                    id="dropdown-content"
                  >
                    <button class="login-btn" @click="goToLogin">Login</button>
                    <p>New Smiley Movement?</p>
                    <button class="register-btn" @click="goToRegister">Create an account</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>


<script>
import $ from "jquery";
import { mixin as clickaway } from "vue-clickaway";
import { mapState } from "vuex";

export default {
  name: "Header",
  mixins: [clickaway],
  components: {},
  data() {
    return {
      registerDropdownShow: false
    };
  },
  filters: {
    filterAvatar: text => {
      console.log(text.split(" "));
      let username = text.split(" ").map(item => {
        return item.charAt(0);
      });

      username = username.join("");
      return username;
    }
  },
  computed: {
    auth() {
      return this.$store.getters["user/isAuthenticated"];
    },
    ...mapState("user", {
      isOrganisationAdmin: state => state.organisation.admin,
      organisationSlug: state => state.organisation.slug,
      avatar: state => state.info.avatar,
      avatarTextual: state => state.info.full_name
    })
  },
  mounted() {
    $(".menu-icon").on("click", function() {
      $(this)
        .closest(".top-menu")
        .toggleClass("menu-state-open");
    });

    $(".menu-item").on("click", function() {
      $(this)
        .closest(".top-menu")
        .removeClass("menu-state-open");
    });

    // $('.login-register-btn').on('click', function() {
    //   $(this).next().toggleClass('show');
    // });
  },
  methods: {
    away: function() {
      this.registerDropdownShow = false;
    },
    onLogout() {
      this.$store.dispatch("user/logout");
    },
    goToLogin() {
      this.registerDropdownShow = false;
      this.$router.push({ name: "login" });
    },
    goToRegister() {
      this.registerDropdownShow = false;
      this.$router.push({ name: "register" });
    }
  }
};
</script>

<style lang="scss" scoped>
.nav.nav-shadow {
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 3px -2px rgba(0, 0, 0, 0.12);
}

.top-line-wrap {
  height: 65px;
  z-index: 9999;
  position: relative;
  max-width: 1780px;
  padding: 0 15px;
  margin: 0 auto;

  .tm-logo {
    display: inline-block;
  }
  .tm-left {
    display: inherit;
    width: 154px;
    order: 2;
    img {
      width: 100%;
      display: block;
    }
    @include xl {
      width: 268px;
    }
  }

  .menu-item {
    padding: 0 30px;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    position: relative;
    color: $default-text;
    font: 16px/24px "Montserrat SemiBold", sans-serif;
    border-top: 1px solid #dcddde;
    &:last-child {
      border-bottom: 1px solid #dcddde;
    }
    &.active,
    &.router-link-active {
      color: $default-orange-btns;
    }

    .submenu {
      .menu-item {
        border-bottom-color: transparent !important;
      }
      li {
        position: relative;
        &:not(:last-child) {
          margin-bottom: 24px;
        }

        &::before {
          width: 5px;
          height: 5px;
          background-color: #000;
          content: "";
          position: absolute;
          left: 0px;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 50%;
        }
        a {
          border: none;
        }
      }
    }

    @include xl {
      .submenu {
        position: absolute;
        background-color: #fff;
        width: 200px;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.4s;
        padding: 5px;

        padding: 24px 15px;
        border-radius: 4px;
        border: 1px solid #c7c7c7;
        box-shadow: 0 12px 32px -8px rgba(26, 26, 26, 0.24);

        &::before {
          content: "";
          display: block;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 5px 5px 5px;
          border-color: transparent transparent rgba(26, 26, 26, 0.24)
            transparent;
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%);
        }

        li {
          &::before,
          &::after {
            // display: none;
            background-color: #707070;
            display: inline-block;
            position: static;
            opacity: 0;
            transition: opacity 0.4s;
          }

          &::after {
            width: 5px;
            height: 5px;
            background-color: #000;
            content: "";
            transform: translateY(-50%);
            border-radius: 50%;
          }

          &:hover {
            &::before,
            &::after {
              opacity: 1;
            }
          }
        }
      }

      &:hover .submenu {
        opacity: 1;
        pointer-events: all;
      }
    }
  }

  .menu-icon {
    display: inline-block;
    width: 22px;
    height: 25px;
    position: relative;
    cursor: pointer;
  }

  .menu-icon span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #333333;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  .menu-icon span:nth-child(1) {
    top: 3px;
  }

  .menu-icon span:nth-child(2),
  .menu-icon span:nth-child(3) {
    top: 11px;
  }

  .menu-icon span:nth-child(4) {
    top: 19px;
  }

  .menu-links {
    position: absolute;
    display: none;
    top: 0;
    right: 0;
    left: 0;
    background-color: #fff;
    margin-top: 65px;
    z-index: 2;
    // overflow: auto;
    width: 100%;
    height: 100vh;
    opacity: 0;
    .btn-wrap {
      padding: 0 15px;
      text-align: center;
    }
    .login-join-btn {
      width: 100%;
      max-width: 382px;
      height: 48px;
      color: #fff;
      font: 16px/24px "Montserrat Bold", sans-serif;
      border: none;
      background: $default-orange-btns;
      border-radius: 4px;
      margin: 23px auto 0;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      text-decoration: none;
    }
  }

  .top-menu.menu-state-open .menu-icon span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  .top-menu.menu-state-open .menu-icon span:nth-child(2) {
    transform: rotate(45deg);
  }

  .top-menu.menu-state-open .menu-icon span:nth-child(3) {
    transform: rotate(-45deg);
  }

  .top-menu.menu-state-open .menu-icon span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  .top-menu.menu-state-open .menu-links {
    display: block;
  }

  .top-menu {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    height: 100%;
    align-items: center;
    .menu-item {
      display: block;
      padding: 16px 0 12px;
      text-align: left;
      z-index: 1;
    }
    &.menu-state-open {
      .menu-links {
        opacity: 1;
      }
      .menu-item {
        margin: 0 16px;
        @include xl {
          margin: 0;
        }
      }
    }
  }

  .tm-right {
    text-align: center;
    order: 3;
    bottom: 15px;
    left: 0;
    .register-block {
      display: flex;
      align-items: center;
      .login-register-btns-wrap {
        position: relative;
        margin-left: 0;
        display: none;
        a {
          height: 48px;
          font: 700 16px/24px "Montserrat Bold", sans-serif;
          text-transform: uppercase;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: #000;
        }
        @include xl {
          display: block;
          margin-left: 20px;
        }
        @include xxl {
          margin-left: 40px;
        }
      }
      .login-register-btn {
        width: 240px;
        color: #000;
        background-color: #eeb400;
        transition: background-color 0.2s ease-in-out;

        &:hover {
          background-color: #c09205;
        }
      }
      .login-and-new-account-btns {
        position: absolute;
        z-index: 1;
        padding: 34px 15px;
        border-radius: 4px;
        border: 1px solid #c7c7c7;
        box-shadow: 0 12px 32px -8px rgba(26, 26, 26, 0.24);
        background-color: #fff;
        left: -78px;
        top: 63px;
        &.show {
          display: block;
        }
        p {
          color: $default-text;
          font: 700 16px/24px "Muli", sans-serif;
          text-align: left;
          margin-top: 19px;
          margin-bottom: 9px;
        }
        button {
          width: 288px;
          margin: 0 auto;
          height: 48px;
          font: 700 16px/24px "Montserrat Bold", sans-serif;
          text-transform: uppercase;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          color: #000;
        }
        .login-btn {
          color: #fff;
          background-color: #a1a1a1;
        }
        .register-btn {
          background-color: $default-yellow-btns;
        }
      }
    }
    .search-icon,
    .second-icon,
    .avatar-icon,
    .arrow-icon {
      text-decoration: none;
      display: inline-block;
      svg {
        vertical-align: middle;
      }
    }
    .search-icon {
      margin-right: 20px;
      display: none;
    }
    .second-icon {
      margin-right: 12px;
    }
    .avatar-icon {
      position: relative;
      cursor: pointer;
      margin-top: 8px;
      margin-right: 8px;
      padding-bottom: 8px;
      > svg {
        width: 22px;
        height: 22px;
      }
      &:hover > ul {
        display: block;
      }
      ul {
        display: none;
        position: absolute;
        top: 33px;
        right: -14px;
        background-color: #fff;
        border: 1px solid #c7c7c7;
        border-radius: 4px;
        width: 258px;
        // padding-bottom: 25px;
        @include xl {
          right: -40px;
          top: 55px;
        }
        a,
        div {
          color: $default-text;
          font: 400 16px/20px "Muli", sans-serif;
          display: block;
          text-decoration: none;
          text-align: left;
          padding: 15px 0 15px 16px;
          &:hover {
            background-color: #eef3ff;
            transition: 0.15s ease-in-out;
          }
          svg {
            margin-right: 2px;
            vertical-align: bottom;
          }
        }
      }
    }
    .arrow-icon {
      display: none;
    }
  }

  @include xl {
    height: 133px;
    .menu-icon {
      display: none;
    }
    .menu-links {
      display: block;
      margin: 15px 0 8px;
      position: initial;
      opacity: 1;
      background-color: transparent;
      height: auto;
      order: 2;
      width: auto;

      display: flex;
      justify-content: center;
      flex: 1;
      .menu-item {
        display: inline-block;
        border: none;
        padding: 0 11px;
      }
      .btn-wrap {
        display: none;
      }
    }
    .tm-right {
      .search-icon,
      .arrow-icon {
        display: inline-block;
      }
      .avatar-icon {
        > svg {
          width: 48px;
          height: 48px;
        }
      }
    }
  }

  @include xxl {
    .top-menu {
      justify-content: space-between;
      width: 100%;
    }
    .menu-links {
      margin-right: auto;
      padding-left: 65px;
      .menu-item {
        display: inline-block;
        border: none;
        padding: 0 21px;
      }
    }
  }
}

.user-avatar {
  width: 48px;
  height: 48px;
  background-color: #7a7a7a;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  color: #fff;
  text-transform: uppercase;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>
