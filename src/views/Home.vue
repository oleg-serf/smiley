<template>
  <div class="home">
    <div class="header-bg">
      <div class="header-content-wrap container">
        <div class="header-content">
          <h1 class="header-content-title">
            Helping You
            <br />Help Others
          </h1>
          <router-link to="/talks" class="header-btn">Learn more</router-link>
        </div>
      </div>
    </div>
    <section class="smiley-talks container">
      <div class="smiley-talks-left">
        <div class="smiley-talks-main-title">
          <img src="img/homepage/smiley-main-title.svg" alt="smiley talks" />
          <P>Talks</P>
        </div>
        <p>Smiley Talks are free live events crafted to tackle social and environmental issues linked to the UN sustainable development goals 2020.</p>
        <router-link to="/talks" class="read-more-link">
          <span></span>Read more
        </router-link>
      </div>

      <div class="smiley-talks-center">
        <router-link :to="'/event/' + topEvent.id" class="article-item" v-if="topEvent">
          <div class="smiley-img-wrap">
            <div class="smiley-img">
              <img src="img/homepage/talks-big-item-x2.jpg" alt="big-photo" />
            </div>
          </div>
          <div class="article-descr">
            <div class="article-date-location">
              <div
                class="article-date"
              >{{new Date(topEvent.date).toLocaleDateString('nl', {day:"2-digit",month:"2-digit",year:"numeric"})}}</div>
              <div class="article-location">{{topEvent.location}}</div>
            </div>
            <div class="article-title">{{topEvent.title}}</div>
            <div class="article-subtitle">{{topEvent.short_description}}</div>
          </div>
        </router-link>
      </div>

      <div class="smiley-talks-right" v-if="eventList">
        <router-link
          :to="'/event/' + event.id"
          class="article-item"
          v-for="(event, index) in eventList"
          :key="event.id"
          v-if="index > 0 && index < 4"
        >
          <div class="smiley-img-wrap">
            <div class="smiley-img">
              <img :src="'/img/homepage/' + ++index + '.jpg'" alt="small preview 1" />
            </div>
          </div>
          <div class="article-descr">
            <div class="article-date-location">
              <div
                class="article-date"
              >{{new Date(event.date).toLocaleDateString('nl', {day:"2-digit",month:"2-digit",year:"numeric"})}}</div>
              <div class="article-location">{{event.location}}</div>
            </div>
            <div class="article-title">{{event.title}}</div>
            <div class="article-subtitle">{{event.short_description}}</div>
          </div>
        </router-link>
      </div>
    </section>

    <section class="smiley-network container">
      <div class="smiley-network-title-wrap">
        <div class="smiley-network-title">
          <svg
            width="170"
            height="55"
            viewBox="0 0 170 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M165.95 25.5531C165.95 25.3528 165.88 25.1769 165.734 25.031C165.591 24.8908 165.393 24.8193 165.153 24.8193H164.329V26.2912H165.153C165.393 26.2912 165.591 26.2211 165.734 26.0766C165.88 25.9336 165.95 25.7619 165.95 25.5531V25.5531ZM165.95 28.9202L164.949 26.9921H164.329V28.9202H163.433V24.0626H165.264C165.498 24.0626 165.707 24.1027 165.899 24.1842C166.09 24.2614 166.254 24.373 166.391 24.5032C166.529 24.6348 166.633 24.8021 166.715 24.9881C166.792 25.164 166.832 25.3571 166.832 25.5531C166.832 25.9035 166.742 26.1882 166.553 26.4056C166.363 26.6259 166.142 26.7804 165.873 26.8748L166.957 28.9202H165.95ZM168.601 26.4957C168.601 25.9879 168.506 25.5045 168.32 25.0639C168.128 24.6076 167.878 24.2228 167.554 23.8996C167.23 23.5691 166.849 23.3188 166.418 23.1186C165.98 22.9326 165.515 22.8396 165.005 22.8396C164.502 22.8396 164.023 22.9326 163.584 23.1186C163.148 23.3188 162.768 23.5691 162.443 23.8996C162.121 24.2228 161.866 24.6076 161.677 25.0639C161.492 25.5045 161.396 25.9879 161.396 26.4957C161.396 27.0149 161.492 27.4955 161.677 27.9404C161.866 28.3867 162.121 28.7743 162.443 29.099C162.768 29.4266 163.148 29.6941 163.584 29.8771C164.023 30.0674 164.502 30.1661 165.005 30.1661C165.515 30.1661 165.98 30.0674 166.418 29.8771C166.849 29.6941 167.23 29.4266 167.554 29.099C167.878 28.7743 168.128 28.3867 168.32 27.9404C168.506 27.4955 168.601 27.0149 168.601 26.4957V26.4957ZM169.5 26.4957C169.5 27.1208 169.387 27.7087 169.143 28.2551C168.906 28.7972 168.589 29.2735 168.19 29.6826C167.783 30.0817 167.309 30.4078 166.758 30.6453C166.214 30.8784 165.622 31 165.005 31C164.376 31 163.801 30.8784 163.245 30.6453C162.705 30.4078 162.231 30.0817 161.82 29.6826C161.415 29.2735 161.093 28.7972 160.854 28.2551C160.623 27.7087 160.5 27.1208 160.5 26.4957C160.5 25.8792 160.623 25.2956 160.854 24.7506C161.093 24.2042 161.415 23.7265 161.82 23.3188C162.231 22.9183 162.705 22.5922 163.245 22.3504C163.801 22.1202 164.376 22 165.005 22C165.622 22 166.214 22.1202 166.758 22.3504C167.309 22.5922 167.783 22.9183 168.19 23.3188C168.589 23.7265 168.906 24.2042 169.143 24.7506C169.387 25.2956 169.5 25.8792 169.5 26.4957V26.4957Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.653143 26.4916L3.65539 22.6851C3.87819 22.4022 4.27227 22.3683 4.5452 22.5938C7.04475 24.6642 9.67937 25.9566 12.8334 25.9566C15.4778 25.9566 17.075 24.844 17.075 23.0226V22.9342C17.075 21.2027 16.0654 20.3126 11.154 18.979C5.23031 17.3786 1.41067 15.6456 1.41067 9.46811V9.37822C1.41067 3.73419 5.69402 0 11.6999 0C15.7493 0 19.2361 1.27175 22.1228 3.55294C22.4013 3.77251 22.4598 4.19839 22.2635 4.50048L19.6135 8.56624C19.4158 8.86981 19.0217 8.94055 18.7307 8.73719C16.3077 7.04987 13.9251 6.04633 11.615 6.04633C9.13629 6.04633 7.8343 7.24587 7.8343 8.75634V8.84624C7.8343 10.8902 9.09452 11.5563 14.1772 12.9341C20.1399 14.5802 23.5 16.8466 23.5 22.2681V22.3565C23.5 28.534 19.0495 32 12.7067 32C8.46093 32 4.17758 30.5057 0.732516 27.4759C0.454015 27.2328 0.42338 26.7833 0.653143 26.4916"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M29.1566 1H35.2478C35.4752 1 35.687 1.12188 35.8064 1.32012L43.5007 14.1072L51.1936 1.32012C51.313 1.12188 51.5234 1 51.7493 1H57.8448C58.2072 1 58.5 1.30396 58.5 1.67841V31.3201C58.5 31.696 58.2072 32 57.8448 32H52.602C52.2382 32 51.9454 31.696 51.9454 31.3201V11.7621L43.5007 25.0029H43.3287L34.9707 11.8928V31.3201C34.9707 31.696 34.6765 32 34.3141 32H29.1566C28.7942 32 28.5 31.696 28.5 31.3201V1.67841C28.5 1.30396 28.7942 1 29.1566 1"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M67.0966 1H71.9034C72.2327 1 72.5 1.30396 72.5 1.67841V31.3201C72.5 31.696 72.2327 32 71.9034 32H67.0966C66.7673 32 66.5 31.696 66.5 31.3201V1.67841C66.5 1.30396 66.7673 1 67.0966 1"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M82.202 1H87.841C88.2291 1 88.543 1.30396 88.543 1.67841V25.8003H103.799C104.186 25.8003 104.5 26.1043 104.5 26.4787V31.3201C104.5 31.696 104.186 32 103.799 32H81.5V1.67841C81.5 1.30396 81.8139 1 82.202 1"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M109.161 1H130.624C130.991 1 131.287 1.30396 131.287 1.67841V6.38767C131.287 6.76211 130.991 7.06608 130.624 7.06608H115.101V13.3554H128.684C129.047 13.3554 129.344 13.6579 129.344 14.0323V18.7445C129.344 19.1189 129.047 19.4229 128.684 19.4229H115.101V25.9325H130.836C131.204 25.9325 131.5 26.2379 131.5 26.6123V31.3201C131.5 31.696 131.204 32 130.836 32H109.161C108.796 32 108.5 31.696 108.5 31.3201V1.67841C108.5 1.30396 108.796 1 109.161 1"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M146.038 19.7768L134.608 2.04258C134.318 1.59178 134.646 1 135.19 1H141.642C141.885 1 142.11 1.12628 142.234 1.33186L149.55 13.4449L156.995 1.32893C157.12 1.12482 157.342 1 157.584 1H163.809C164.354 1 164.683 1.59325 164.391 2.04552L152.967 19.6432V31.3216C152.967 31.696 152.657 32 152.278 32H146.727C146.345 32 146.038 31.696 146.038 31.3216V19.7768Z"
              fill="white"
            />
          </svg>
          <span>Network</span>
        </div>
      </div>

      <div class="smiley-network-descr">
        <div class="network-descr-wrap">
          <div class="smiley-network-descr-title">Add your organisation</div>
          <div
            class="smiley-network-descr-subtitle"
          >Connect your organisation with the Smiley Community and find the skills based support you need and raise awareness of your positive impact projects</div>
        </div>
        <router-link to="/add-organisation" class="create-org-btn">Create organisation</router-link>
      </div>
    </section>

    <section class="smiley-news container">
      <div class="smiley-news-left">
        <div class="smiley-news-main-title">
          <img src="img/homepage/smiley-main-title.svg" alt="smiley news" />
          <P>News</P>
        </div>
        <p>Smiley News brings you inspiring stories of people and communities working together to make the world a better place.</p>
        <a href class="read-more-link">
          <span></span>Read more
        </a>
      </div>

      <div class="smiley-news-center">
        <a href="#" class="article-item">
          <div class="smiley-img-wrap">
            <div class="smiley-img">
              <img src="img/homepage/news-big-item-x1.jpg" alt="big-photo" />
            </div>
          </div>
          <div class="article-descr">
            <div class="article-date-location">
              <div class="article-date"></div>
              <div class="article-location"></div>
            </div>
            <div
              class="article-title"
            >'Lobsters and octopuses are back': the Kenyan women leading a reef revival</div>
            <div class="article-subtitle">Life below water</div>
          </div>
        </a>
      </div>

      <div class="smiley-news-right">
        <a href="#" class="article-item">
          <div class="smiley-img-wrap">
            <div class="smiley-img">
              <img src="img/homepage/news-small-item-1-x2.jpg" alt="small preview 1" />
            </div>
          </div>
          <div class="article-descr">
            <div class="article-date-location">
              <div class="article-date"></div>
              <div class="article-location"></div>
            </div>
            <div class="article-title">Air ambulance kent surrey sussex</div>
            <div class="article-subtitle">Partnerships for the goals</div>
          </div>
        </a>

        <a href="#" class="article-item">
          <div class="smiley-img-wrap">
            <div class="smiley-img">
              <img src="img/homepage/news-small-item-2-x2.jpg" alt="small preview 2" />
            </div>
          </div>
          <div class="article-descr">
            <div class="article-date-location">
              <div class="article-date"></div>
              <div class="article-location"></div>
            </div>
            <div class="article-title">Australia just committed $90 million to help 'close the gap'</div>
            <div class="article-subtitle">Partnerships for the goals</div>
          </div>
        </a>
      </div>
    </section>

    <!--    <section class="smiley-awards">-->
    <!--      <div class="smiley-awards-wrap">-->
    <!--        <div class="smiley-awards-main-title">-->
    <!--          <img src="img/homepage/smiley-awards-main-title.svg" alt="smiley awards">-->
    <!--        </div>-->
    <!--        <div class="smiley-awards-content">-->
    <!--          <img src="img/homepage/smiley-awards-pic.jpg" alt="awards main pic">-->
    <!--          <div class="smiley-awards-text">-->
    <!--            <div class="smiley-awards-title">-->
    <!--              Aplications close on april 1st 2020-->
    <!--            </div>-->
    <!--            <div class="smiley-awards-descr">-->
    <!--              The Smiley Awards were created to reward and encourage extraordinary projects that align with one of the 17 Sustainable Development Goals of 2020.-->
    <!--            </div>-->
    <!--            <div class="smiley-awards-prize">-->
    <!--              Total prize money-->
    <!--            </div>-->
    <!--            <div class="smiley-awards-money">-->
    <!--              £ 100,000-->
    <!--            </div>-->
    <!--            <a href="#" class="read-more-link"><span></span>Learn more about the awards</a>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="selection-link">-->
    <!--        <a href="#">click here for eligibility and selection process</a>-->
    <!--      </div>-->

    <!--    </section>-->

    <!--    <section class="signup-section">-->
    <!--      <div class="signup-section-wrap container">-->
    <!--        <h2>Sign up to our mailing list and find us on social</h2>-->
    <!--        <form class="smiley-signup-form">-->
    <!--          <label for="signup-firstname">-->
    <!--            <input type="text" name="signup-firstname" id="signup-firstname" placeholder="First Name">-->
    <!--          </label>-->

    <!--          <label for="signup-lastname">-->
    <!--            <input type="text" name="signup-lastname" id="signup-lastname" placeholder="Last Name">-->
    <!--          </label>-->

    <!--          <label for="email">-->
    <!--            <input type="text" name="email" id="email" placeholder="Your Email">-->
    <!--          </label>-->
    <!--          <div class="signup-btn-wrap">-->
    <!--            <button class="btn-signup" type="submit" name="submit" value="Sign up">Sign up</button>-->
    <!--          </div>-->

    <!--        </form>-->
    <!--        <div class="social-icons">-->
    <!--          <ul>-->
    <!--            <li>-->
    <!--              <a href="#">-->
    <!--                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
    <!--                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1742 5.32031H17V2.14062C16.6856 2.09766 15.6023 2 14.3409 2C11.7083 2 9.9053 3.65625 9.9053 6.69922V9.5H7V13.0547H9.9053V22H13.4659V13.0547H16.2538L16.697 9.5H13.4659V7.05078C13.4659 6.02344 13.7424 5.32031 15.1742 5.32031Z" fill="#1A1A1A"/>-->
    <!--                </svg>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--            <li>-->
    <!--              <a href="#">-->
    <!--                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
    <!--                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9442 7.98749C19.9569 8.16248 19.9569 8.33751 19.9569 8.5125C19.9569 13.85 15.8326 20 8.29444 20C5.97209 20 3.81473 19.3375 2 18.1875C2.32996 18.225 2.64719 18.2375 2.98985 18.2375C4.90607 18.2375 6.67006 17.6 8.0787 16.5125C6.27666 16.475 4.76649 15.3125 4.24618 13.7125C4.5 13.75 4.7538 13.775 5.02032 13.775C5.38833 13.775 5.75638 13.725 6.099 13.6375C4.22083 13.2625 2.81215 11.6375 2.81215 9.67499V9.62501C3.35782 9.92501 3.99239 10.1125 4.66493 10.1375C3.56087 9.41247 2.83754 8.17498 2.83754 6.77497C2.83754 6.02499 3.04055 5.33749 3.3959 4.73748C5.41369 7.18748 8.4467 8.78745 11.8477 8.96248C11.7843 8.66248 11.7462 8.35001 11.7462 8.03751C11.7462 5.81248 13.5736 4 15.8452 4C17.0254 4 18.0914 4.4875 18.8401 5.275C19.7665 5.10001 20.6548 4.76249 21.4416 4.3C21.137 5.23752 20.4898 6.02502 19.6396 6.52499C20.4645 6.43753 21.264 6.21248 22 5.90001C21.4417 6.69998 20.7437 7.41245 19.9442 7.98749Z" fill="#1A1A1A"/>-->
    <!--                </svg>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--            <li>-->
    <!--              <a href="#">-->
    <!--                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
    <!--                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8251 2H13.1739C14.8492 2.00379 15.2338 2.01855 16.1227 2.0591C17.1871 2.10765 17.9141 2.27672 18.5502 2.52396C19.2079 2.77949 19.7656 3.12144 20.3216 3.6774C20.8775 4.2334 21.2195 4.79111 21.475 5.44873C21.7222 6.08484 21.8913 6.81182 21.9399 7.87626C21.9869 8.90737 21.9992 9.25998 22 11.7357V12.2633C21.9992 14.739 21.9869 15.0916 21.9399 16.1227C21.8913 17.1871 21.7222 17.9141 21.475 18.5502C21.2195 19.2079 20.8775 19.7656 20.3216 20.3216C19.7656 20.8775 19.2079 21.2195 18.5502 21.475C17.9141 21.7222 17.1871 21.8913 16.1227 21.9399C15.0916 21.9869 14.739 21.9992 12.2633 22H11.7357C9.25998 21.9992 8.90737 21.9869 7.87626 21.9399C6.81182 21.8913 6.08484 21.7222 5.44873 21.475C4.79111 21.2195 4.2334 20.8775 3.6774 20.3216C3.12144 19.7656 2.77949 19.2079 2.52396 18.5502C2.27672 17.9141 2.10765 17.1871 2.0591 16.1227C2.01855 15.2338 2.00379 14.8492 2 13.1739V10.8251C2.00379 9.1498 2.01855 8.76515 2.0591 7.87626C2.10765 6.81182 2.27672 6.08484 2.52396 5.44873C2.77949 4.79111 3.12144 4.2334 3.6774 3.6774C4.2334 3.12144 4.79111 2.77949 5.44873 2.52396C6.08484 2.27672 6.81182 2.10765 7.87626 2.0591C8.76515 2.01855 9.1498 2.00379 10.8251 2H13.1739H10.8251ZM12.733 3.80115H11.2659C9.25858 3.80324 8.90746 3.81583 7.9584 3.85914C6.98335 3.9036 6.45383 4.06651 6.10144 4.20347C5.63464 4.38489 5.3015 4.60159 4.95157 4.95157C4.60159 5.3015 4.38489 5.63464 4.20347 6.10144C4.06651 6.45383 3.9036 6.98335 3.85914 7.9584C3.81583 8.90746 3.80324 9.25858 3.80115 11.2659V12.733C3.80324 14.7404 3.81583 15.0915 3.85914 16.0406C3.9036 17.0156 4.06651 17.5451 4.20347 17.8975C4.38489 18.3643 4.60163 18.6975 4.95157 19.0474C5.3015 19.3974 5.63464 19.6141 6.10144 19.7955C6.45383 19.9324 6.98335 20.0954 7.9584 20.1398C9.0128 20.1879 9.32902 20.1981 11.9995 20.1981C14.6699 20.1981 14.9862 20.1879 16.0406 20.1398C17.0156 20.0954 17.5451 19.9324 17.8975 19.7955C18.3643 19.6141 18.6975 19.3974 19.0474 19.0474C19.3974 18.6975 19.6141 18.3643 19.7955 17.8975C19.9324 17.5451 20.0954 17.0156 20.1398 16.0406C20.1879 14.986 20.1981 14.6697 20.1981 11.9995C20.1981 9.32922 20.1879 9.01292 20.1398 7.9584C20.0954 6.98335 19.9324 6.45383 19.7955 6.10144C19.6141 5.63464 19.3974 5.3015 19.0474 4.95157C18.6975 4.60159 18.3643 4.38489 17.8975 4.20347C17.5451 4.06651 17.0156 3.9036 16.0406 3.85914C15.0915 3.81583 14.7404 3.80324 12.733 3.80115ZM11.9995 6.9992C14.7611 6.9992 16.9998 9.23788 16.9998 11.9995C16.9998 14.7611 14.7611 16.9998 11.9995 16.9998C9.23788 16.9998 6.9992 14.7611 6.9992 11.9995C6.9992 9.23788 9.23788 6.9992 11.9995 6.9992ZM11.9995 8.75368C10.2069 8.75368 8.75368 10.2069 8.75368 11.9995C8.75368 13.7921 10.2069 15.2453 11.9995 15.2453C13.7921 15.2453 15.2453 13.7921 15.2453 11.9995C15.2453 10.2069 13.7921 8.75368 11.9995 8.75368ZM17.4164 5.33244C18.1068 5.33244 18.6665 5.89213 18.6665 6.58253C18.6665 7.27293 18.1068 7.83258 17.4164 7.83258C16.7261 7.83258 16.1664 7.27293 16.1664 6.58253C16.1664 5.89213 16.7261 5.33244 17.4164 5.33244Z" fill="#1A1A1A"/>-->
    <!--                </svg>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--            <li>-->
    <!--              <a href="#">-->
    <!--                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
    <!--                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3292 2C21.252 2 22 2.74752 22 3.67079V20.3292C22 21.252 21.2525 22 20.3292 22H3.67079C2.74804 22 2 21.2525 2 20.3292V3.67079C2 2.74804 2.74752 2 3.67079 2H20.3292ZM15.5187 9.5C14.0993 9.5 13.1281 10.1274 12.6957 10.8563L12.625 10.9858V9.625H9.91667V19.2083H12.8333V14.5662C12.8333 13.0104 13.4062 12.0208 14.7833 12.0208C15.7331 12.0208 16.1316 12.8607 16.1644 14.358L16.1667 14.5662V19.2083H19.0833V13.9154C19.0833 11.0575 18.3996 9.5 15.5187 9.5ZM7.83333 9.5H4.91667V19.0833H7.83333V9.5ZM6.375 4.5C5.33958 4.5 4.5 5.33958 4.5 6.375C4.5 7.41042 5.33958 8.25 6.375 8.25C7.41042 8.25 8.25 7.41042 8.25 6.375C8.25 5.33958 7.41042 4.5 6.375 4.5Z" fill="#1A1A1A"/>-->
    <!--                </svg>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </ul>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->

    <section class="thematic-icons container">
      <h2 class="thematic-icons-title">Browse by goal</h2>

      <div class="thematic-icons-wrap">
        <div class="icon-wrap ml0">
          <img src="img/homepage/icon-01.png" alt="icon" />
        </div>
        <div class="icon-wrap">
          <img src="img/homepage/icon-02.png" alt="icon" />
        </div>
        <div class="icon-wrap">
          <img src="img/homepage/icon-03.png" alt="icon" />
        </div>
        <div class="icon-wrap">
          <img src="img/homepage/icon-04.png" alt="icon" />
        </div>
        <div class="icon-wrap">
          <img src="img/homepage/icon-05.png" alt="icon" />
        </div>
        <div class="icon-wrap">
          <img src="img/homepage/icon-06.png" alt="icon" />
        </div>
        <div class="icon-wrap mr0">
          <img src="img/homepage/icon-07.png" alt="icon" />
        </div>
        <div class="icon-wrap ml0">
          <img src="img/homepage/icon-08.png" alt="icon" />
        </div>
        <div class="icon-wrap">
          <img src="img/homepage/icon-09.png" alt="icon" />
        </div>
        <div class="icon-wrap">
          <img src="img/homepage/icon-10.png" alt="icon" />
        </div>
        <div class="icon-wrap">
          <img src="img/homepage/icon-11.png" alt="icon" />
        </div>
        <div class="icon-wrap">
          <img src="img/homepage/icon-12.png" alt="icon" />
        </div>
        <div class="icon-wrap">
          <img src="img/homepage/icon-13.png" alt="icon" />
        </div>
        <div class="icon-wrap mr0">
          <img src="img/homepage/icon-14.png" alt="icon" />
        </div>
        <div class="icon-wrap ml0">
          <img src="img/homepage/icon-15.png" alt="icon" />
        </div>
        <div class="icon-wrap">
          <img src="img/homepage/icon-16.png" alt="icon" />
        </div>
        <div class="icon-wrap">
          <img src="img/homepage/icon-17.png" alt="icon" />
        </div>
      </div>
    </section>

    <section class="smiley-video-section">
      <div class="container">
        <h2>Featured Interviews</h2>
        <div class="video-content">
          <div class="video-content-item">
            <div class="video-container">
              <img src="img/homepage/video-1.jpg" alt="video-1" />
            </div>
            <div class="video-descr">
              <div class="video-content-title">We are changing culture</div>
              <div class="video-content-subtitle">Jo Loughran at Let's Talk Mental Health</div>
            </div>
          </div>

          <div class="video-content-item">
            <div class="video-container">
              <img src="img/homepage/video-2.jpg" alt="video-2" />
            </div>
            <div class="video-descr">
              <div class="video-content-title">We are not alone</div>
              <div class="video-content-subtitle">Georgia Dodsworth at Let's Talk Mental Health</div>
            </div>
          </div>
        </div>

        <div class="comment-block">
          <p>Having attended a Smiley Movement talk for the first time on Suicide Prevention, with the support of Time to Change, I found it to be so informative, enlightening, and to be very lucky to listen to such a good array of speakers, for which made the difference completely. I hope to attend many more talks from this group, and as a Service User believe it can only help to talk, listen and get support at these events, and cannot recommend them enough to come too.</p>
          <h3>ROBERT KOCH - COUNCILLOR & MENTOR IN MENTAL HEALTH & WELLBEING CONSULTANT WITHIN THE WORKPLACE</h3>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Footer from "@/components/Footer.vue";
import axios from "../axios-auth";

export default {
  name: "home",
  components: {
    Footer
  },
  data() {
    return {
      topEvent: null,
      eventList: null
    };
  },
  mounted() {
    axios
      .get("/events")
      .then(res => {
        this.topEvent = res.data.events[0];
        res.data.events.shift();
        this.eventList = res.data.events;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/pages/_homepage.scss";
</style>
