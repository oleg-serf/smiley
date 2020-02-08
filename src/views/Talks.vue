<template>
  <div>
    <section class="breadcrumbs">
      <ul>
        <li>
          <a href="#" class="breadcrumbs-item">Homepage</a>
          <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.52699 9L10.9815 4.54545L6.52699 0.0909092L5.76136 0.856534L8.91335 3.99858H0.75V5.09233H8.91335L5.76136 8.24432L6.52699 9Z" fill="#656565"/>
          </svg>
        </li>
        <li>
          <a href="#" class="breadcrumbs-item">One</a>
          <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.52699 9L10.9815 4.54545L6.52699 0.0909092L5.76136 0.856534L8.91335 3.99858H0.75V5.09233H8.91335L5.76136 8.24432L6.52699 9Z" fill="#656565"/>
          </svg>
        </li>
        <li>
          <a href="#" class="breadcrumbs-item">Two</a>
          <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.52699 9L10.9815 4.54545L6.52699 0.0909092L5.76136 0.856534L8.91335 3.99858H0.75V5.09233H8.91335L5.76136 8.24432L6.52699 9Z" fill="#656565"/>
          </svg>
        </li>
      </ul>
    </section>

    <section class="upcoming-talk-section">

      <div class="upcoming-talk-wrap">
        <div class="title-colored-block">
          <div class="smiley-talks-main-title">
            <img src="img/homepage/smiley-main-title.svg" alt="smiley talks">
            <p>Talks</p>
          </div>
          <h2 class="upcoming-block-register">Register for a Smiley Talk!</h2>
          <p class="upcoming-block-descr">Smiley Talks bring expert speakers and members of the public together in a unique, memorable experience.</p>

        </div>

        <div class="upcoming-info-block container">
          <h2 class="upcoming-info-title">Upcoming smiley talk</h2>

          <div class="talk-card-wrap" v-if="topEvent">
            <router-link :to="'/event/' + topEvent.id"  class="talk-card talk-card--featured">
              <div class="pic-wrap">
                <div class="smiley-img-wrap">
                  <div class="smiley-img">
                    <img 
                      :src="imagesPath +'l_'+topEvent.cover_image" 
                      :alt="topEvent.title"
                      sizes="(max-width: 1160px) 100vw, 1160px"
                      :srcset="
imagesPath + `s_`+topEvent.cover_image+` 150w,` +
imagesPath + `m_`+topEvent.cover_image+` 360w,` +
imagesPath + `l_`+topEvent.cover_image+` 1160w`
                     ">
                  </div>
                </div>
                <label class="talk-card-checkbox">
                  <input type="checkbox" name="talk-card-checkbox">
                  <span class="talk-card-checkmark">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91007 17.4958L3.70711 11.2929C3.31658 10.9024 2.68342 10.9024 2.29289 11.2929C1.90237 11.6834 1.90237 12.3166 2.29289 12.7071L9.29289 19.7071C9.71682 20.131 10.4159 20.0892 10.7863 19.6178L21.7863 5.6178C22.1275 5.18353 22.0521 4.55488 21.6178 4.21366C21.1835 3.87245 20.5549 3.94789 20.2137 4.38216L9.91007 17.4958Z" fill="#fff"/>
                    </svg>
                  </span>
                </label>
              </div>
              <div class="info-wrap">
                <div class="info-border">
                  <h2>{{topEvent.title}}</h2>
                  <p>{{topEvent.short_description}}</p>
                  <div class="date-and-time-wrap">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M17 2C17.5523 2 18 2.44772 18 3V4H19C20.6569 4 22 5.34315 22 7V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V7C2 5.34315 3.34315 4 5 4H6V3C6 2.44772 6.44772 2 7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2ZM4 12V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V12H4ZM4 10H20V7C20 6.44772 19.5523 6 19 6H18V7C18 7.55228 17.5523 8 17 8C16.4477 8 16 7.55228 16 7V6H8V7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7V6H5C4.44772 6 4 6.44772 4 7V10Z" fill="#d21217"/>
                    </svg>
                    <div class="date-and-time-info">
                      <div class="date-info">{{new Date(topEvent.date).toLocaleDateString('en-US', {weekday: 'short', day: 'numeric', month: 'long', year: 'numeric'}).replace(',','')}}</div>
                      <div class="time-info">{{topEvent.time_start  | formatTime | formatTime}} - {{topEvent.time_end  | formatTime  | formatTime}}</div>
                    </div>
                  </div>
                  <div class="location-info">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C16.9706 2 21 5.98572 21 10.9024C21 14.1559 18.2777 17.5958 12.9483 21.3432L12 22L11.4278 21.6051C5.85042 17.7559 3 14.2315 3 10.9024C3 5.98572 7.02944 2 12 2ZM12 3.9783C8.13401 3.9783 5 7.07831 5 10.9024C5 13.3049 7.29672 16.2364 12 19.5818C16.7033 16.2364 19 13.3049 19 10.9024C19 7.07831 15.866 3.9783 12 3.9783ZM12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6ZM12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8Z" fill="#d21217"/>
                    </svg>
                    <div>{{topEvent.location}}</div>
                  </div>
                </div>
                <div class="attending-info" v-if="topEvent.attendees_random.length !== 0">
                  <span>Attending:</span>
                  <div class="attending-wrap">
                    <div class="attendees-avatar" :class="{next: index > 0}" v-for="(attendees, index) in topEvent.attendees_random" :key="attendees.id">
                      <img src="img/event/attendees-avatar-1.jpg" alt="avatar">
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>

        </div>
      </div>

    </section>

    <section class="talk-main-section">

      <div class="talk-sidebar">
        <p class="log-sign-req" v-if="!auth">To search and filter please <a href="#">log in</a> or <a href="#">sign up</a></p>
        <div class="smiley-notify" v-if="auth">
          <div class="smiley-notify-text">Love our Smiley Talks? We’ll notify you when we have one coming up</div>
          <label class="notify-checkbox">
            <input type="checkbox" name="notify-checkbox">
            <span class="notify-checkmark"></span>
          </label>
        </div>
        <!-- TODO: - remove hide -->
        <div class="location-search" style="display: none">
          <label for="location">Location
            <input type="text" name="location" id="location" placeholder="exemple: Brighton">
          </label>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2C15.9706 2 20 6.02944 20 11C20 13.1248 19.2637 15.0776 18.0323 16.6172L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3466 22.0676 20.7794 22.0953 20.3871 21.7903L20.2929 21.7071L16.6172 18.0323C15.0776 19.2637 13.1248 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2ZM11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4Z" fill="#1A1A1A"/>
          </svg>
        </div>
        <p class="location-distance" style="display: none">within <a href="#">100 miles</a> of <a href="#">London, GB</a></p>
        <div class="search-by-keyword">
          <label for="keyword-search">
            <input type="text" name="keyword-search" id="keyword-search" placeholder="search by keyword">
          </label>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2C15.9706 2 20 6.02944 20 11C20 13.1248 19.2637 15.0776 18.0323 16.6172L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3466 22.0676 20.7794 22.0953 20.3871 21.7903L20.2929 21.7071L16.6172 18.0323C15.0776 19.2637 13.1248 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2ZM11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4Z" fill="#1A1A1A"/>
          </svg>

        </div>
        <div class="select-period">
          <label for="time-period">
            <input type="text" name="time-period" id="time-period" placeholder="Select a time period">
          </label>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 22C3.34315 22 2 20.6569 2 19V7C2 5.34315 3.34315 4 5 4H6V3C6 2.44772 6.44772 2 7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2C17.5523 2 18 2.44772 18 3V4H19C20.6569 4 22 5.34315 22 7V19C22 20.6569 20.6569 22 19 22H5ZM8 17H4V19C4 19.5523 4.44772 20 5 20H8V17ZM14 17H10V20H14V17ZM20 17H16V20H19C19.5523 20 20 19.5523 20 19V17ZM8 12H4V15H8V12ZM14 12H10V15H14V12ZM20 12H16V15H20V12ZM6 6H5C4.44772 6 4 6.44772 4 7V10H20V7C20 6.44772 19.5523 6 19 6H18V7C18 7.55228 17.5523 8 17 8C16.4477 8 16 7.55228 16 7V6H8V7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7V6Z" fill="#1A1A1A"/>
          </svg>
        </div>
        <div class="checkboxes-block panel">
          <p>Choose {{ currentCategory }}:</p>
          <filter-checkbox 
            v-for="goal in goals" 
            :key="goal.name + goal.id"
            :item="goal"
            v-model="filter.goals"
            />
        </div>
        <div class="talk-sidebar-btns">
          <button class="simple-search-btn">Simple search</button>
          <button class="apply-filters-btn">Apply filters</button>
          <button class="reset-filters-btn">Reset filters</button>
          <button class="advanced-search-btn">Advanced search</button>
        </div>
      </div>

      <div class="talk-content">
        <div class="selected-search-tags">
          <ul>
            <li>
              <a href="#">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.41413 8.00001L12.7071 4.70701C13.0981 4.31601 13.0981 3.68401 12.7071 3.29301C12.3161 2.90201 11.6841 2.90201 11.2931 3.29301L8.00013 6.58601L4.70713 3.29301C4.31613 2.90201 3.68413 2.90201 3.29313 3.29301C2.90213 3.68401 2.90213 4.31601 3.29313 4.70701L6.58613 8.00001L3.29313 11.293C2.90213 11.684 2.90213 12.316 3.29313 12.707C3.48813 12.902 3.74413 13 4.00013 13C4.25613 13 4.51213 12.902 4.70713 12.707L8.00013 9.41401L11.2931 12.707C11.4881 12.902 11.7441 13 12.0001 13C12.2561 13 12.5121 12.902 12.7071 12.707C13.0981 12.316 13.0981 11.684 12.7071 11.293L9.41413 8.00001Z" fill="#1A1A1A"/>
                </svg>
              </a>London
            </li>
            <li>
              <a href="#">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.41413 8.00001L12.7071 4.70701C13.0981 4.31601 13.0981 3.68401 12.7071 3.29301C12.3161 2.90201 11.6841 2.90201 11.2931 3.29301L8.00013 6.58601L4.70713 3.29301C4.31613 2.90201 3.68413 2.90201 3.29313 3.29301C2.90213 3.68401 2.90213 4.31601 3.29313 4.70701L6.58613 8.00001L3.29313 11.293C2.90213 11.684 2.90213 12.316 3.29313 12.707C3.48813 12.902 3.74413 13 4.00013 13C4.25613 13 4.51213 12.902 4.70713 12.707L8.00013 9.41401L11.2931 12.707C11.4881 12.902 11.7441 13 12.0001 13C12.2561 13 12.5121 12.902 12.7071 12.707C13.0981 12.316 13.0981 11.684 12.7071 11.293L9.41413 8.00001Z" fill="#1A1A1A"/>
                </svg>
              </a>Clean water and sanitation
            </li>
            <li>
              <a href="#">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.41413 8.00001L12.7071 4.70701C13.0981 4.31601 13.0981 3.68401 12.7071 3.29301C12.3161 2.90201 11.6841 2.90201 11.2931 3.29301L8.00013 6.58601L4.70713 3.29301C4.31613 2.90201 3.68413 2.90201 3.29313 3.29301C2.90213 3.68401 2.90213 4.31601 3.29313 4.70701L6.58613 8.00001L3.29313 11.293C2.90213 11.684 2.90213 12.316 3.29313 12.707C3.48813 12.902 3.74413 13 4.00013 13C4.25613 13 4.51213 12.902 4.70713 12.707L8.00013 9.41401L11.2931 12.707C11.4881 12.902 11.7441 13 12.0001 13C12.2561 13 12.5121 12.902 12.7071 12.707C13.0981 12.316 13.0981 11.684 12.7071 11.293L9.41413 8.00001Z" fill="#1A1A1A"/>
                </svg>
              </a>Climate action
            </li>
            <li>
              <a href="#">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.41413 8.00001L12.7071 4.70701C13.0981 4.31601 13.0981 3.68401 12.7071 3.29301C12.3161 2.90201 11.6841 2.90201 11.2931 3.29301L8.00013 6.58601L4.70713 3.29301C4.31613 2.90201 3.68413 2.90201 3.29313 3.29301C2.90213 3.68401 2.90213 4.31601 3.29313 4.70701L6.58613 8.00001L3.29313 11.293C2.90213 11.684 2.90213 12.316 3.29313 12.707C3.48813 12.902 3.74413 13 4.00013 13C4.25613 13 4.51213 12.902 4.70713 12.707L8.00013 9.41401L11.2931 12.707C11.4881 12.902 11.7441 13 12.0001 13C12.2561 13 12.5121 12.902 12.7071 12.707C13.0981 12.316 13.0981 11.684 12.7071 11.293L9.41413 8.00001Z" fill="#1A1A1A"/>
                </svg>
              </a>Decent work and economic growth
            </li>
          </ul>
        </div>

        <carousel class="talk-cards-container" v-if="showCarousel && eventList" :nav="false" :items="3" :margin="19" :autoplayHoverPause="true" :loop="true" :autoplay="true" :autoplayTimeout="5000" :autoWidth="true" :autoplaySpeed="3000" smartSpeed="1000">
          <div class="talk-card-wrap" v-for="event in eventList" :key="event.id">
            <router-link :to="'/event/' + event.id" class="talk-card">
              <div class="pic-wrap">
                <div class="smiley-img-wrap">
                  <div class="smiley-img">
                    <img src="img/talk/card-image-1-x2.jpg" alt="talk image 1">
                  </div>
                </div>
                <label class="talk-card-checkbox">
                  <input type="checkbox" name="talk-card-checkbox">
                  <span class="talk-card-checkmark">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91007 17.4958L3.70711 11.2929C3.31658 10.9024 2.68342 10.9024 2.29289 11.2929C1.90237 11.6834 1.90237 12.3166 2.29289 12.7071L9.29289 19.7071C9.71682 20.131 10.4159 20.0892 10.7863 19.6178L21.7863 5.6178C22.1275 5.18353 22.0521 4.55488 21.6178 4.21366C21.1835 3.87245 20.5549 3.94789 20.2137 4.38216L9.91007 17.4958Z" fill="#fff"/>
                    </svg>
                  </span>
                </label>
              </div>
              <div class="info-wrap">
                <div class="info-border">
                  <h2>{{event.title}}</h2>
                  <p class="info-full-height">{{event.short_description}}</p>

                  <div class="date-and-time-wrap">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M17 2C17.5523 2 18 2.44772 18 3V4H19C20.6569 4 22 5.34315 22 7V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V7C2 5.34315 3.34315 4 5 4H6V3C6 2.44772 6.44772 2 7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2ZM4 12V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V12H4ZM4 10H20V7C20 6.44772 19.5523 6 19 6H18V7C18 7.55228 17.5523 8 17 8C16.4477 8 16 7.55228 16 7V6H8V7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7V6H5C4.44772 6 4 6.44772 4 7V10Z" fill="#d21217"/>
                    </svg>
                    <div class="date-and-time-info">
                      <div class="date-info">{{new Date(event.date).toLocaleDateString('en-US', {weekday: 'short', day: 'numeric', month: 'long', year: 'numeric'}).replace(',','')}}</div>
                      <div class="time-info">{{event.time_start  | formatTime}} - {{event.time_end  | formatTime}}</div>
                    </div>
                  </div>

                  <div class="location-info">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C16.9706 2 21 5.98572 21 10.9024C21 14.1559 18.2777 17.5958 12.9483 21.3432L12 22L11.4278 21.6051C5.85042 17.7559 3 14.2315 3 10.9024C3 5.98572 7.02944 2 12 2ZM12 3.9783C8.13401 3.9783 5 7.07831 5 10.9024C5 13.3049 7.29672 16.2364 12 19.5818C16.7033 16.2364 19 13.3049 19 10.9024C19 7.07831 15.866 3.9783 12 3.9783ZM12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6ZM12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8Z" fill="#d21217"/>
                    </svg>
                    <div>{{event.location}}</div>
                  </div>
                </div>

                <div class="attending-info" v-if="event.attendees_random.length !== 0">
                  <span>Attending:</span>
                  <div class="attending-wrap">
                    <div class="attendees-avatar" :class="{next: index > 0}" v-for="(attendees, index) in event.attendees_random" :key="attendees.id">
                      <img src="img/event/attendees-avatar-1.jpg" alt="avatar">
                    </div>
                  </div>
                </div>

              </div>
            </router-link>
          </div>
        </carousel>

        <div class="talk-cards-container owl-carousel" v-if="!showCarousel && eventList">
          <div class="talk-card-wrap" v-for="(event, index) in eventList" :key="event.id">
            <router-link :to="'/event/' + event.id" class="talk-card">
              <div class="pic-wrap">
                <div class="smiley-img-wrap">
                  <div class="smiley-img">
                    <!-- TODO: Fix srcset attribute -->
                    <img 
                      :src="imagesPath +'m_'+event.cover_image" 
                      :alt="event.title"
                      sizes="(max-width: 1160px) 100vw, 1160px"
                      :srcset="
imagesPath + `s_`+event.cover_image+` 150w,` +
imagesPath + `m_`+event.cover_image+` 360w,` +
imagesPath + `l_`+event.cover_image+` 1160w`
                     ">
                  </div>
                </div>
              </div>

              <button v-if="!upcomingEvents[index].attendClicked" class="talk-card-checkbox-dt" :class="{'talk-card-checkbox-rotate':upcomingEvents[index].btnsWrapAttendShow}" @click.prevent="showSecondOverlay(index)" @mouseover="showFirstOverlay(index)" @mouseleave="upcomingEvents[index].btnsWrapShow = false"></button>

              <div class="confirmed-box" v-if="upcomingEvents[index].attendConfirmed">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91007 17.4958L3.70711 11.2929C3.31658 10.9024 2.68342 10.9024 2.29289 11.2929C1.90237 11.6834 1.90237 12.3166 2.29289 12.7071L9.29289 19.7071C9.71682 20.131 10.4159 20.0892 10.7863 19.6178L21.7863 5.6178C22.1275 5.18353 22.0521 4.55488 21.6178 4.21366C21.1835 3.87245 20.5549 3.94789 20.2137 4.38216L9.91007 17.4958Z" fill="#fff"/>
                </svg>
              </div>

              <div class="overlay" :class="index" id="overlay" v-if="upcomingEvents[index].btnsWrapShow"><span>Click to attend</span></div>

              <div class="btns-wrap" >
                <div class="attend" id="attending-overlay" v-if="upcomingEvents[index].btnsWrapAttendShow">
                  <button v-if="!upcomingEvents[index].attendClicked" @click.prevent="onAttendClickHandler(index)">Just Myself</button>
                  <button v-if="!upcomingEvents[index].attendClicked" @click.prevent="onAttendClickHandler(index)">With organisation</button>
                </div>
              </div>

              <div class="attend-loading" v-if="upcomingEvents[index].attendClicked && !upcomingEvents[index].attendComplete && !upcomingEvents[index].attendConfirmed">
                <svg width="90" height="90" viewBox="0 0 90 90">
                  <circle class="outer" cx="45" cy="45" r="37" ></circle>
                  <circle class="inner" cx="45" cy="45" r="37" transform="rotate(-90, 45, 45)"></circle>
                </svg>
                <span>Loading ...</span>
              </div>
              <div class="attend-complete" v-if="upcomingEvents[index].attendComplete">
                <div class="confirmed-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91007 17.4958L3.70711 11.2929C3.31658 10.9024 2.68342 10.9024 2.29289 11.2929C1.90237 11.6834 1.90237 12.3166 2.29289 12.7071L9.29289 19.7071C9.71682 20.131 10.4159 20.0892 10.7863 19.6178L21.7863 5.6178C22.1275 5.18353 22.0521 4.55488 21.6178 4.21366C21.1835 3.87245 20.5549 3.94789 20.2137 4.38216L9.91007 17.4958Z" fill="#fff"/>
                  </svg>
                </div>
                <span>Confirmed</span>
              </div>

              <div class="info-wrap">
                <div class="info-border">
                  <h2>{{event.title}}</h2>
                  <p class="info-full-height">{{event.short_description}}</p>

                  <div class="date-and-time-wrap">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M17 2C17.5523 2 18 2.44772 18 3V4H19C20.6569 4 22 5.34315 22 7V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V7C2 5.34315 3.34315 4 5 4H6V3C6 2.44772 6.44772 2 7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2ZM4 12V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V12H4ZM4 10H20V7C20 6.44772 19.5523 6 19 6H18V7C18 7.55228 17.5523 8 17 8C16.4477 8 16 7.55228 16 7V6H8V7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7V6H5C4.44772 6 4 6.44772 4 7V10Z" fill="#d21217"/>
                    </svg>
                    <div class="date-and-time-info">
                      <div class="date-info">{{new Date(event.date).toLocaleDateString('en-US', {weekday: 'short', day: 'numeric', month: 'long', year: 'numeric'}).replace(',','')}}</div>
                      <div class="time-info">{{event.time_start  | formatTime}} - {{event.time_end  | formatTime}}</div>
                    </div>
                  </div>

                  <div class="location-info">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C16.9706 2 21 5.98572 21 10.9024C21 14.1559 18.2777 17.5958 12.9483 21.3432L12 22L11.4278 21.6051C5.85042 17.7559 3 14.2315 3 10.9024C3 5.98572 7.02944 2 12 2ZM12 3.9783C8.13401 3.9783 5 7.07831 5 10.9024C5 13.3049 7.29672 16.2364 12 19.5818C16.7033 16.2364 19 13.3049 19 10.9024C19 7.07831 15.866 3.9783 12 3.9783ZM12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6ZM12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8Z" fill="#d21217"/>
                    </svg>
                    <div>{{event.location}}</div>
                  </div>
                </div>

                <div class="attending-info" v-if="event.attendees_random.length !== 0">
                  <span>Attending:</span>
                  <div class="attending-wrap">
                    <div class="attendees-avatar" :class="{next: index > 0}" v-for="(attendees, index) in event.attendees_random" :key="attendees.id">
                      <img src="img/event/attendees-avatar-1.jpg" alt="avatar">
                    </div>
                  </div>
                </div>

              </div>

            </router-link>
          </div>
        </div>

        <div class="smiley-pagination">
          <ul>
            <li class="smiley-pagination-back">
              <a href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16 21C15.744 21 15.488 20.902 15.293 20.707L7.29301 12.707C6.90201 12.316 6.90201 11.684 7.29301 11.293L15.293 3.293C15.684 2.902 16.316 2.902 16.707 3.293C17.098 3.684 17.098 4.316 16.707 4.707L9.41401 12L16.707 19.293C17.098 19.684 17.098 20.316 16.707 20.707C16.512 20.902 16.256 21 16 21Z" fill="#1A1A1A"/>
                </svg>
                <span>Back</span></a>
            </li>
            <li><a href="#">1</a></li>
            <li class="smiley-pagination-next">
              <a href="#">Next
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99999 21C8.25599 21 8.51199 20.902 8.70699 20.707L16.707 12.707C17.098 12.316 17.098 11.684 16.707 11.293L8.70699 3.29301C8.31599 2.90201 7.68399 2.90201 7.29299 3.29301C6.90199 3.68401 6.90199 4.31601 7.29299 4.70701L14.586 12L7.29299 19.293C6.90199 19.684 6.90199 20.316 7.29299 20.707C7.48799 20.902 7.74399 21 7.99999 21Z" fill="#1A1A1A"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>

      </div>

    </section>

    <section class="past-talks-section">

      <h2>Past smiley talks</h2>

      <carousel class="talk-cards-container" v-if="showCarousel && eventList" :nav="false" :items="3" :margin="19" :autoplayHoverPause="true" :loop="true" :autoplay="true" :autoplayTimeout="5000" :autoWidth="true" :autoplaySpeed="3000" smartSpeed="1000">
        <div class="talk-card-wrap" v-for="event in eventPastList" :key="event.id">
          <router-link :to="'/event/' + event.id" class="talk-card">
            <div class="pic-wrap">
              <div class="smiley-img-wrap">
                <div class="smiley-img">
                  <img 
                      :src="imagesPath +'m_'+event.cover_image" 
                      :alt="event.title"
                      sizes="(max-width: 1160px) 100vw, 1160px"
                      :srcset="
imagesPath + `s_`+event.cover_image+` 150w,` +
imagesPath + `m_`+event.cover_image+` 360w,` +
imagesPath + `l_`+event.cover_image+` 1160w`
                     ">
                </div>
              </div>
              <label class="talk-card-checkbox">
                <input type="checkbox" name="talk-card-checkbox">
                <span class="talk-card-checkmark">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91007 17.4958L3.70711 11.2929C3.31658 10.9024 2.68342 10.9024 2.29289 11.2929C1.90237 11.6834 1.90237 12.3166 2.29289 12.7071L9.29289 19.7071C9.71682 20.131 10.4159 20.0892 10.7863 19.6178L21.7863 5.6178C22.1275 5.18353 22.0521 4.55488 21.6178 4.21366C21.1835 3.87245 20.5549 3.94789 20.2137 4.38216L9.91007 17.4958Z" fill="#fff"/>
                  </svg>
                </span>
              </label>
            </div>
            <div class="info-wrap">
              <div class="info-border">
                <h2>{{event.title}}</h2>
                <p class="info-full-height">{{event.short_description}}</p>

                <div class="date-and-time-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 2C17.5523 2 18 2.44772 18 3V4H19C20.6569 4 22 5.34315 22 7V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V7C2 5.34315 3.34315 4 5 4H6V3C6 2.44772 6.44772 2 7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2ZM4 12V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V12H4ZM4 10H20V7C20 6.44772 19.5523 6 19 6H18V7C18 7.55228 17.5523 8 17 8C16.4477 8 16 7.55228 16 7V6H8V7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7V6H5C4.44772 6 4 6.44772 4 7V10Z" fill="#d21217"/>
                  </svg>
                  <div class="date-and-time-info">
                    <div class="date-info">{{new Date(event.date).toLocaleDateString('en-US', {weekday: 'short', day: 'numeric', month: 'long', year: 'numeric'}).replace(',','')}}</div>
                    <div class="time-info">{{event.time_start  | formatTime}} - {{event.time_end  | formatTime}}</div>
                  </div>
                </div>

                <div class="location-info">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C16.9706 2 21 5.98572 21 10.9024C21 14.1559 18.2777 17.5958 12.9483 21.3432L12 22L11.4278 21.6051C5.85042 17.7559 3 14.2315 3 10.9024C3 5.98572 7.02944 2 12 2ZM12 3.9783C8.13401 3.9783 5 7.07831 5 10.9024C5 13.3049 7.29672 16.2364 12 19.5818C16.7033 16.2364 19 13.3049 19 10.9024C19 7.07831 15.866 3.9783 12 3.9783ZM12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6ZM12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8Z" fill="#d21217"/>
                  </svg>
                  <div>{{event.location}}</div>
                </div>
              </div>

              <div class="attending-info" v-if="event.attendees_random.length !== 0">
                <span>Attending:</span>
                <div class="attending-wrap">
                  <div class="attendees-avatar" :class="{next: index > 0}" v-for="attendees in event.attendees_random" :key="attendees.id">
                    <img src="img/event/attendees-avatar-1.jpg" alt="avatar">
                  </div>
                </div>
              </div>

            </div>

          </router-link>

        </div>
      </carousel>

<!--      <div class="talk-cards-container owl-carousel" v-if="!showCarousel && eventList">-->
<!--        <div class="talk-card-wrap" v-for="(event, index) in eventPastList" :key="event.id">-->
<!--          <router-link :to="'/event/' + event.id" class="talk-card">-->
<!--            <div class="pic-wrap">-->
<!--              <div class="smiley-img-wrap">-->
<!--                <div class="smiley-img">-->
<!--                  <img src="img/talk/card-image-1-x2.jpg" alt="talk image 1">-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->

<!--            <button v-if="!pastEvents[index].attendClicked" class="talk-card-checkbox-dt" :class="{'talk-card-checkbox-rotate':btnsWrapAttendShow}" @click.prevent="showSecondOverlay(index, 'past')" @mouseover="showFirstOverlay(index, 'past')" @mouseleave="pastEvents[index].btnsWrapShow = false"></button>-->


<!--            <div class="confirmed-box" v-if="pastEvents[index].attendConfirmed">-->
<!--              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91007 17.4958L3.70711 11.2929C3.31658 10.9024 2.68342 10.9024 2.29289 11.2929C1.90237 11.6834 1.90237 12.3166 2.29289 12.7071L9.29289 19.7071C9.71682 20.131 10.4159 20.0892 10.7863 19.6178L21.7863 5.6178C22.1275 5.18353 22.0521 4.55488 21.6178 4.21366C21.1835 3.87245 20.5549 3.94789 20.2137 4.38216L9.91007 17.4958Z" fill="#fff"/>-->
<!--              </svg>-->
<!--            </div>-->

<!--            <div class="overlay" id="overlay" v-if="pastEvents[index].btnsWrapShow"><span>Click to attend</span></div>-->

<!--            <div class="btns-wrap" >-->
<!--              <div class="attend" id="attending-overlay" v-if="pastEvents[index].btnsWrapAttendShow">-->
<!--                <button v-if="!pastEvents[index].attendClicked" @click.prevent="onAttendClickHandler(index, 'past')">Just Myself</button>-->
<!--                <button v-if="!pastEvents[index].attendClicked" @click.prevent="onAttendClickHandler(index, 'past')">With organisation</button>-->
<!--              </div>-->
<!--            </div>-->

<!--            <div class="attend-loading" v-if="pastEvents[index].attendClicked && !pastEvents[index].attendComplete && pastEvents[index].attendConfirmed">-->
<!--              <svg width="90" height="90" viewBox="0 0 90 90">-->
<!--                <circle class="outer" cx="45" cy="45" r="37" > </circle>-->
<!--                <circle class="inner" cx="45" cy="45" r="37" transform="rotate(-90, 45, 45)"> </circle>-->
<!--              </svg>-->
<!--              <span>Loading ...</span>-->
<!--            </div>-->
<!--            <div class="attend-complete" v-if="pastEvents[index].attendComplete">-->
<!--              <div class="confirmed-box">-->
<!--                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91007 17.4958L3.70711 11.2929C3.31658 10.9024 2.68342 10.9024 2.29289 11.2929C1.90237 11.6834 1.90237 12.3166 2.29289 12.7071L9.29289 19.7071C9.71682 20.131 10.4159 20.0892 10.7863 19.6178L21.7863 5.6178C22.1275 5.18353 22.0521 4.55488 21.6178 4.21366C21.1835 3.87245 20.5549 3.94789 20.2137 4.38216L9.91007 17.4958Z" fill="#fff"/>-->
<!--                </svg>-->
<!--              </div>-->
<!--              <span>Confirmed</span>-->
<!--            </div>-->

<!--            <div class="info-wrap">-->
<!--              <div class="info-border">-->
<!--                <h2>{{event.title}}</h2>-->
<!--                <p class="info-full-height">{{event.short_description}}</p>-->

<!--                <div class="date-and-time-wrap">-->
<!--                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 2C17.5523 2 18 2.44772 18 3V4H19C20.6569 4 22 5.34315 22 7V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V7C2 5.34315 3.34315 4 5 4H6V3C6 2.44772 6.44772 2 7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2ZM4 12V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V12H4ZM4 10H20V7C20 6.44772 19.5523 6 19 6H18V7C18 7.55228 17.5523 8 17 8C16.4477 8 16 7.55228 16 7V6H8V7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7V6H5C4.44772 6 4 6.44772 4 7V10Z" fill="#d21217"/>-->
<!--                  </svg>-->
<!--                  <div class="date-and-time-info">-->
<!--                    <div class="date-info">{{new Date(event.date).toLocaleDateString('en-US', {weekday: 'short', day: 'numeric', month: 'long', year: 'numeric'}).replace(',','')}}</div>-->
<!--                    <div class="time-info">{{event.time_start  | formatTime}} - {{event.time_end  | formatTime}}</div>-->
<!--                  </div>-->
<!--                </div>-->

<!--                <div class="location-info">-->
<!--                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C16.9706 2 21 5.98572 21 10.9024C21 14.1559 18.2777 17.5958 12.9483 21.3432L12 22L11.4278 21.6051C5.85042 17.7559 3 14.2315 3 10.9024C3 5.98572 7.02944 2 12 2ZM12 3.9783C8.13401 3.9783 5 7.07831 5 10.9024C5 13.3049 7.29672 16.2364 12 19.5818C16.7033 16.2364 19 13.3049 19 10.9024C19 7.07831 15.866 3.9783 12 3.9783ZM12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6ZM12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8Z" fill="#d21217"/>-->
<!--                  </svg>-->
<!--                  <div>{{event.location}}</div>-->
<!--                </div>-->
<!--              </div>-->

<!--              <div class="attending-info" v-if="event.attendees_random.length !== 0">-->
<!--                <span>Attending:</span>-->
<!--                <div class="attending-wrap">-->
<!--                  <div class="attendees-avatar" :class="{next: index > 0}" v-for="attendees in event.attendees_random" :key="attendees.id">-->
<!--                    <img src="img/event/attendees-avatar-1.jpg" alt="avatar">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->

<!--            </div>-->

<!--          </router-link>-->


<!--        </div>-->
<!--      </div>-->

      <div class="talk-cards-container owl-carousel" v-if="!showCarousel && eventList">
        <div class="talk-card-wrap" v-for="(event, index) in eventPastList" :key="event.id">
          <router-link :to="'/event/' + event.id" class="talk-card">
            <div class="pic-wrap">
              <div class="smiley-img-wrap">
                <div class="smiley-img">
                  <img 
                      :src="imagesPath +'m_'+event.cover_image" 
                      :alt="event.title"
                      sizes="(max-width: 1160px) 100vw, 1160px"
                      :srcset="
imagesPath + `s_`+event.cover_image+` 150w,` +
imagesPath + `m_`+event.cover_image+` 360w,` +
imagesPath + `l_`+event.cover_image+` 1160w`
                     ">
                </div>
              </div>
            </div>

            <button v-if="!pastEvents[index].attendClicked" class="talk-card-checkbox-dt" :class="{'talk-card-checkbox-rotate':pastEvents[index].btnsWrapAttendShow}" @click.prevent="showSecondOverlay(index, 'past')" @mouseover="showFirstOverlay(index, 'past')" @mouseleave="pastEvents[index].btnsWrapShow = false"></button>

            <div class="confirmed-box" v-if="pastEvents[index].attendConfirmed">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91007 17.4958L3.70711 11.2929C3.31658 10.9024 2.68342 10.9024 2.29289 11.2929C1.90237 11.6834 1.90237 12.3166 2.29289 12.7071L9.29289 19.7071C9.71682 20.131 10.4159 20.0892 10.7863 19.6178L21.7863 5.6178C22.1275 5.18353 22.0521 4.55488 21.6178 4.21366C21.1835 3.87245 20.5549 3.94789 20.2137 4.38216L9.91007 17.4958Z" fill="#fff"/>
              </svg>
            </div>

            <div class="overlay" :class="index" id="overlay" v-if="pastEvents[index].btnsWrapShow"><span>Click to attend</span></div>

            <div class="btns-wrap" >
              <div class="attend" id="attending-overlay" v-if="pastEvents[index].btnsWrapAttendShow">
                <button v-if="!pastEvents[index].attendClicked" @click.prevent="onAttendClickHandler(index, 'past')">Just Myself</button>
                <button v-if="!pastEvents[index].attendClicked" @click.prevent="onAttendClickHandler(index, 'past')">With organisation</button>
              </div>
            </div>

            <div class="attend-loading" v-if="pastEvents[index].attendClicked && !pastEvents[index].attendComplete && !pastEvents[index].attendConfirmed">
              <svg width="90" height="90" viewBox="0 0 90 90">
                <circle class="outer" cx="45" cy="45" r="37" ></circle>
                <circle class="inner" cx="45" cy="45" r="37" transform="rotate(-90, 45, 45)"></circle>
              </svg>
              <span>Loading ...</span>
            </div>
            <div class="attend-complete" v-if="pastEvents[index].attendComplete">
              <div class="confirmed-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91007 17.4958L3.70711 11.2929C3.31658 10.9024 2.68342 10.9024 2.29289 11.2929C1.90237 11.6834 1.90237 12.3166 2.29289 12.7071L9.29289 19.7071C9.71682 20.131 10.4159 20.0892 10.7863 19.6178L21.7863 5.6178C22.1275 5.18353 22.0521 4.55488 21.6178 4.21366C21.1835 3.87245 20.5549 3.94789 20.2137 4.38216L9.91007 17.4958Z" fill="#fff"/>
                </svg>
              </div>
              <span>Confirmed</span>
            </div>

            <div class="info-wrap">
              <div class="info-border">
                <h2>{{event.title}}</h2>
                <p class="info-full-height">{{event.short_description}}</p>

                <div class="date-and-time-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 2C17.5523 2 18 2.44772 18 3V4H19C20.6569 4 22 5.34315 22 7V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V7C2 5.34315 3.34315 4 5 4H6V3C6 2.44772 6.44772 2 7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2ZM4 12V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V12H4ZM4 10H20V7C20 6.44772 19.5523 6 19 6H18V7C18 7.55228 17.5523 8 17 8C16.4477 8 16 7.55228 16 7V6H8V7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7V6H5C4.44772 6 4 6.44772 4 7V10Z" fill="#d21217"/>
                  </svg>
                  <div class="date-and-time-info">
                    <div class="date-info">{{new Date(event.date).toLocaleDateString('en-US', {weekday: 'short', day: 'numeric', month: 'long', year: 'numeric'}).replace(',','')}}</div>
                    <div class="time-info">{{event.time_start  | formatTime}} - {{event.time_end  | formatTime}}</div>
                  </div>
                </div>

                <div class="location-info">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C16.9706 2 21 5.98572 21 10.9024C21 14.1559 18.2777 17.5958 12.9483 21.3432L12 22L11.4278 21.6051C5.85042 17.7559 3 14.2315 3 10.9024C3 5.98572 7.02944 2 12 2ZM12 3.9783C8.13401 3.9783 5 7.07831 5 10.9024C5 13.3049 7.29672 16.2364 12 19.5818C16.7033 16.2364 19 13.3049 19 10.9024C19 7.07831 15.866 3.9783 12 3.9783ZM12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6ZM12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8Z" fill="#d21217"/>
                  </svg>
                  <div>{{event.location}}</div>
                </div>
              </div>

              <div class="attending-info" v-if="event.attendees_random.length !== 0">
                <span>Attending:</span>
                <div class="attending-wrap">
                  <div class="attendees-avatar" :class="{next: index > 0}" v-for="(attendees, index) in event.attendees_random" :key="attendees.id">
                    <img src="img/event/attendees-avatar-1.jpg" alt="avatar">
                  </div>
                </div>
              </div>

            </div>

          </router-link>
        </div>
      </div>

      <div class="smiley-pagination">
        <ul>
          <li class="smiley-pagination-back">
            <a href="#">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 21C15.744 21 15.488 20.902 15.293 20.707L7.29301 12.707C6.90201 12.316 6.90201 11.684 7.29301 11.293L15.293 3.293C15.684 2.902 16.316 2.902 16.707 3.293C17.098 3.684 17.098 4.316 16.707 4.707L9.41401 12L16.707 19.293C17.098 19.684 17.098 20.316 16.707 20.707C16.512 20.902 16.256 21 16 21Z" fill="#1A1A1A"/>
              </svg>
              <span>Back</span></a>
          </li>
          <li><a href="#">1</a></li>
          <li class="smiley-pagination-next">
            <a href="#">Next
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99999 21C8.25599 21 8.51199 20.902 8.70699 20.707L16.707 12.707C17.098 12.316 17.098 11.684 16.707 11.293L8.70699 3.29301C8.31599 2.90201 7.68399 2.90201 7.29299 3.29301C6.90199 3.68401 6.90199 4.31601 7.29299 4.70701L14.586 12L7.29299 19.293C6.90199 19.684 6.90199 20.316 7.29299 20.707C7.48799 20.902 7.74399 21 7.99999 21Z" fill="#1A1A1A"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>

    </section>

    <section class="create-hub-section">

      <div class="create-hub-wrap">
        <div class="create-hub-video">
          <img src="img/talk/smiley-hub-image-x2.png" alt="hub main pic">
        </div>
        <div class="create-hub-content">

          <div class="create-hub-title-wrap">
            <div class="create-hub-logo">
              <img src="img/talk/smiley-hub-logo-x2.png" alt="smiley hub">
            </div>
            <div class="create-hub-title">
              Create a smiley hub
            </div>
          </div>
          <div class="create-hub-text">
            <div class="create-hub-descr">
              Smiley Hubs are events organised by you! Hubs are mission-led collaborations initiated by Smiley Movement members online.
            </div>
            <a href="#" class="read-more-link"><span></span>Create a smiley hub</a>
          </div>
        </div>
      </div>

    </section>

    <section class="signup-section">
      <div class="signup-section-wrap container">
        <h2>Don’t miss an event - sign up for our latest event news</h2>
        <form class="smiley-signup-form">
          <label for="signup-firstname">
            <input type="text" name="signup-firstname" id="signup-firstname" placeholder="First Name">
          </label>

          <label for="signup-lastname">
            <input type="text" name="signup-lastname" id="signup-lastname" placeholder="Last Name">
          </label>

          <label for="email">
            <input type="text" name="email" id="email" placeholder="Your Email">
          </label>
          <div class="signup-btn-wrap">
            <button class="btn-signup" type="submit" name="submit" value="Sign up">Sign up</button>
          </div>

        </form>
        <div class="social-icons">
          <ul>
            <li>
              <a href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1742 5.32031H17V2.14062C16.6856 2.09766 15.6023 2 14.3409 2C11.7083 2 9.9053 3.65625 9.9053 6.69922V9.5H7V13.0547H9.9053V22H13.4659V13.0547H16.2538L16.697 9.5H13.4659V7.05078C13.4659 6.02344 13.7424 5.32031 15.1742 5.32031Z" fill="#1A1A1A"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9442 7.98749C19.9569 8.16248 19.9569 8.33751 19.9569 8.5125C19.9569 13.85 15.8326 20 8.29444 20C5.97209 20 3.81473 19.3375 2 18.1875C2.32996 18.225 2.64719 18.2375 2.98985 18.2375C4.90607 18.2375 6.67006 17.6 8.0787 16.5125C6.27666 16.475 4.76649 15.3125 4.24618 13.7125C4.5 13.75 4.7538 13.775 5.02032 13.775C5.38833 13.775 5.75638 13.725 6.099 13.6375C4.22083 13.2625 2.81215 11.6375 2.81215 9.67499V9.62501C3.35782 9.92501 3.99239 10.1125 4.66493 10.1375C3.56087 9.41247 2.83754 8.17498 2.83754 6.77497C2.83754 6.02499 3.04055 5.33749 3.3959 4.73748C5.41369 7.18748 8.4467 8.78745 11.8477 8.96248C11.7843 8.66248 11.7462 8.35001 11.7462 8.03751C11.7462 5.81248 13.5736 4 15.8452 4C17.0254 4 18.0914 4.4875 18.8401 5.275C19.7665 5.10001 20.6548 4.76249 21.4416 4.3C21.137 5.23752 20.4898 6.02502 19.6396 6.52499C20.4645 6.43753 21.264 6.21248 22 5.90001C21.4417 6.69998 20.7437 7.41245 19.9442 7.98749Z" fill="#1A1A1A"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8251 2H13.1739C14.8492 2.00379 15.2338 2.01855 16.1227 2.0591C17.1871 2.10765 17.9141 2.27672 18.5502 2.52396C19.2079 2.77949 19.7656 3.12144 20.3216 3.6774C20.8775 4.2334 21.2195 4.79111 21.475 5.44873C21.7222 6.08484 21.8913 6.81182 21.9399 7.87626C21.9869 8.90737 21.9992 9.25998 22 11.7357V12.2633C21.9992 14.739 21.9869 15.0916 21.9399 16.1227C21.8913 17.1871 21.7222 17.9141 21.475 18.5502C21.2195 19.2079 20.8775 19.7656 20.3216 20.3216C19.7656 20.8775 19.2079 21.2195 18.5502 21.475C17.9141 21.7222 17.1871 21.8913 16.1227 21.9399C15.0916 21.9869 14.739 21.9992 12.2633 22H11.7357C9.25998 21.9992 8.90737 21.9869 7.87626 21.9399C6.81182 21.8913 6.08484 21.7222 5.44873 21.475C4.79111 21.2195 4.2334 20.8775 3.6774 20.3216C3.12144 19.7656 2.77949 19.2079 2.52396 18.5502C2.27672 17.9141 2.10765 17.1871 2.0591 16.1227C2.01855 15.2338 2.00379 14.8492 2 13.1739V10.8251C2.00379 9.1498 2.01855 8.76515 2.0591 7.87626C2.10765 6.81182 2.27672 6.08484 2.52396 5.44873C2.77949 4.79111 3.12144 4.2334 3.6774 3.6774C4.2334 3.12144 4.79111 2.77949 5.44873 2.52396C6.08484 2.27672 6.81182 2.10765 7.87626 2.0591C8.76515 2.01855 9.1498 2.00379 10.8251 2H13.1739H10.8251ZM12.733 3.80115H11.2659C9.25858 3.80324 8.90746 3.81583 7.9584 3.85914C6.98335 3.9036 6.45383 4.06651 6.10144 4.20347C5.63464 4.38489 5.3015 4.60159 4.95157 4.95157C4.60159 5.3015 4.38489 5.63464 4.20347 6.10144C4.06651 6.45383 3.9036 6.98335 3.85914 7.9584C3.81583 8.90746 3.80324 9.25858 3.80115 11.2659V12.733C3.80324 14.7404 3.81583 15.0915 3.85914 16.0406C3.9036 17.0156 4.06651 17.5451 4.20347 17.8975C4.38489 18.3643 4.60163 18.6975 4.95157 19.0474C5.3015 19.3974 5.63464 19.6141 6.10144 19.7955C6.45383 19.9324 6.98335 20.0954 7.9584 20.1398C9.0128 20.1879 9.32902 20.1981 11.9995 20.1981C14.6699 20.1981 14.9862 20.1879 16.0406 20.1398C17.0156 20.0954 17.5451 19.9324 17.8975 19.7955C18.3643 19.6141 18.6975 19.3974 19.0474 19.0474C19.3974 18.6975 19.6141 18.3643 19.7955 17.8975C19.9324 17.5451 20.0954 17.0156 20.1398 16.0406C20.1879 14.986 20.1981 14.6697 20.1981 11.9995C20.1981 9.32922 20.1879 9.01292 20.1398 7.9584C20.0954 6.98335 19.9324 6.45383 19.7955 6.10144C19.6141 5.63464 19.3974 5.3015 19.0474 4.95157C18.6975 4.60159 18.3643 4.38489 17.8975 4.20347C17.5451 4.06651 17.0156 3.9036 16.0406 3.85914C15.0915 3.81583 14.7404 3.80324 12.733 3.80115ZM11.9995 6.9992C14.7611 6.9992 16.9998 9.23788 16.9998 11.9995C16.9998 14.7611 14.7611 16.9998 11.9995 16.9998C9.23788 16.9998 6.9992 14.7611 6.9992 11.9995C6.9992 9.23788 9.23788 6.9992 11.9995 6.9992ZM11.9995 8.75368C10.2069 8.75368 8.75368 10.2069 8.75368 11.9995C8.75368 13.7921 10.2069 15.2453 11.9995 15.2453C13.7921 15.2453 15.2453 13.7921 15.2453 11.9995C15.2453 10.2069 13.7921 8.75368 11.9995 8.75368ZM17.4164 5.33244C18.1068 5.33244 18.6665 5.89213 18.6665 6.58253C18.6665 7.27293 18.1068 7.83258 17.4164 7.83258C16.7261 7.83258 16.1664 7.27293 16.1664 6.58253C16.1664 5.89213 16.7261 5.33244 17.4164 5.33244Z" fill="#1A1A1A"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3292 2C21.252 2 22 2.74752 22 3.67079V20.3292C22 21.252 21.2525 22 20.3292 22H3.67079C2.74804 22 2 21.2525 2 20.3292V3.67079C2 2.74804 2.74752 2 3.67079 2H20.3292ZM15.5187 9.5C14.0993 9.5 13.1281 10.1274 12.6957 10.8563L12.625 10.9858V9.625H9.91667V19.2083H12.8333V14.5662C12.8333 13.0104 13.4062 12.0208 14.7833 12.0208C15.7331 12.0208 16.1316 12.8607 16.1644 14.358L16.1667 14.5662V19.2083H19.0833V13.9154C19.0833 11.0575 18.3996 9.5 15.5187 9.5ZM7.83333 9.5H4.91667V19.0833H7.83333V9.5ZM6.375 4.5C5.33958 4.5 4.5 5.33958 4.5 6.375C4.5 7.41042 5.33958 8.25 6.375 8.25C7.41042 8.25 8.25 7.41042 8.25 6.375C8.25 5.33958 7.41042 4.5 6.375 4.5Z" fill="#1A1A1A"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
  import $ from "jquery";
  import carousel from 'vue-owl-carousel2';
  import axios from "../axios-auth";

  import FilterCheckbox from "../components/events/Filter-Checkbox";

  export default {
    name: "Talks",
    components: { carousel },
    data(){
      return{
        showCarousel: true,
        topEvent: null,
        eventList: null,
        eventPastList: null,
        imagesPath: null,

        filter: {
          goals: []
        },

        upcomingEvents: null,
        pastEvents: null
      }
    },
    filters: {
      formatTime: function(time) {
        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) {
          time = time.slice (1);
          time[5] = +time[0] < 12 ? 'AM' : 'PM';
          time[0] = +time[0] % 12 || 12;
          time[3] = '';
        }
        return time.join ('');
      }
    },
    computed: {
      auth(){
        return this.$store.getters.isAuthenticated;
      },
      goals() {
        return this.$store.getters[`events/getGoals`];
      },
      currentCategory() {
        return this.$store.getters[`events/getCurrentCategory`];
      },
    },
    created(){
      window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy(){
      window.removeEventListener('resize', this.handleResize)
    },
    mounted() {
      this.imagesPath = this.images_path.events
        
      axios.get('/events/past')
          .then(res => {
            axios.get('/events')
                .then(res => {
                  this.showCarousel = false;
                  this.topEvent = res.data.data[0];
                  res.data.data.shift();
                  this.eventList = res.data.data;

                  this.upcomingEvents = new Array(this.eventList.length).fill(null).map(() => (
                    {
                      btnsWrapShow: false,
                      btnsWrapAttendShow: false,
                      attendClicked: false,
                      attendComplete: false,
                      attendConfirmed: false,
                    }
                  ));

                  setTimeout(() => {
                    this.handleResize();
                  },0);
                })
                .catch(error => console.log(error));
            this.eventPastList = res.data.data;

            this.pastEvents = new Array(this.eventPastList.length).fill(null).map(() => (
                {
                  btnsWrapShow: false,
                  btnsWrapAttendShow: false,
                  attendClicked: false,
                  attendComplete: false,
                  attendConfirmed: false,
                }
            ));
          })
          .catch(error => console.log(error));

      this.handleResize();

      setTimeout(() => {
        var acc = document.querySelectorAll(".advanced-search-btn");
        var i;
        var simpleSearch = document.querySelector(".simple-search-btn");
        var advancedSearch = document.querySelector(".advanced-search-btn");
        var panel = document.getElementsByClassName("panel");

        var resetFilters = document.querySelector(".reset-filters-btn");
        var applyFilters = document.querySelector(".apply-filters-btn");


        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.style.display = "none";
            simpleSearch.style.display = "block";
            resetFilters.style.display = "block";
            if (panel[0].style.maxHeight) {
              panel[0].style.maxHeight = null;
            } else {
              panel[0].style.maxHeight = panel[0].scrollHeight + "px";
            }
          });
        }

        simpleSearch.addEventListener("click", function() {
          this.style.display = "none";
          advancedSearch.style.display = "block";
          resetFilters.style.display = "none";
          if (panel[0].style.maxHeight) {
            panel[0].style.maxHeight = null;
          } else {
            panel[0].style.maxHeight = panel[0].scrollHeight + "px";
          }
        });

        let currentWidth = $(window).width();
        let firstInit = true;

        $(window).on('resize', function() {

          if(firstInit){
            if($(window).width()>=1600) {
              resetFilters.style.display = "block";
              applyFilters.style.display = "block";
              advancedSearch.style.display = "none";
              simpleSearch.style.display = "none";
              panel[0].style.maxHeight = panel[0].scrollHeight + "px";

            }
            else{
              resetFilters.style.display = "none";
              advancedSearch.style.display = "block";
              panel[0].style.maxHeight = null;
            }

            firstInit = false;
          }
          else{

            if($(window).width() !== currentWidth){
              currentWidth = $(window).width();

              if($(window).width()>=1600) {
                resetFilters.style.display = "block";
                applyFilters.style.display = "block";
                advancedSearch.style.display = "none";
                simpleSearch.style.display = "none";
                panel[0].style.maxHeight = panel[0].scrollHeight + "px";

              }
              else{
                if(simpleSearch.style.display === "block"){
                  return;
                }
                resetFilters.style.display = "none";
                advancedSearch.style.display = "block";
                simpleSearch.style.display = "none";
                panel[0].style.maxHeight = null;
              }
            }
          }
        });

        $(window).resize();

        $.fn.equalHeights = function() {
          var maxHeight = 0,
              $this = $(this);

          $this.each( function() {
            var height = $(this).innerHeight();

            if ( height > maxHeight ) { maxHeight = height; }
          });

          return $this.css('height', maxHeight);
        };

        // auto-initialize plugin
        $('[data-equal]').each(function(){
          var $this = $(this),
              target = $this.data('equal');
          $this.find(target).equalHeights();
        });

        $('.talk-cards-container .info-wrap').equalHeights();
      }, 0);

      $('.talk-card-checkbox').click(function(){
        $('#overlay').toggleClass('display-none');
        $(this).toggleClass('button-clicked');
      });

      this.$store.dispatch("events/loadEventsData");

    },
    methods: {
      onAttendClickHandler(index, state){
        if(!state){
          this.upcomingEvents[index].attendClicked = true;

          setTimeout(() => {
            this.upcomingEvents[index].attendComplete = true;

            setTimeout(() => {
              this.upcomingEvents[index].attendConfirmed = true;
              this.upcomingEvents[index].btnsWrapAttendShow = false;
              this.upcomingEvents[index].attendComplete = false;
            },2000);

          },3000)
        }
        else{
          this.pastEvents[index].attendClicked = true;

          setTimeout(() => {
            this.pastEvents[index].attendComplete = true;

            setTimeout(() => {
              this.pastEvents[index].attendConfirmed = true;
              this.pastEvents[index].btnsWrapAttendShow = false;
              this.pastEvents[index].attendComplete = false;
            },2000);

          },3000)
        }

      },
      showSecondOverlay(index, state){
        if(!state){
          this.upcomingEvents[index].btnsWrapAttendShow = true;
          this.upcomingEvents[index].btnsWrapShow = false;
        }
        else{
          this.pastEvents[index].btnsWrapAttendShow = true;
          this.pastEvents[index].btnsWrapShow = false;
        }

      },
      showFirstOverlay(index, state){

        if(!state){
          if(!this.upcomingEvents[index].btnsWrapAttendShow){
            this.upcomingEvents[index].btnsWrapShow = true;
          }
        }else{
          if(!this.pastEvents[index].btnsWrapAttendShow){
            this.pastEvents[index].btnsWrapShow = true;
          }
        }

      },
      handleResize(){
        if($(window).width()>=1600){
          this.showCarousel = false;
        }
        else{
          this.showCarousel = true;
        }
      }
    },
    components: {
      FilterCheckbox
    },
  }
</script>


<style lang="scss" scoped>
  .upcoming-talk-section{
    padding-bottom: 20px;
    @include xxl{
      padding-bottom: 42px;
    }
    .upcoming-talk-wrap{
      max-width: 1600px;
      margin: 0 auto;
      @include xxl{
        display: flex;
        justify-content: space-between;
        .title-colored-block{
          text-align: left;
          width: 380px;
          box-sizing: border-box;
        }
      }
      .title-colored-block{
        background-color: #d21217;
        position: relative;
        text-align: center;
        z-index: 0;
        @include xxl{
          text-align: left;
          padding: 0 60px 0 20px;
          &:after{
            content: '';
            height: 100%;
            position: absolute;
            right: 0;
            top: 0;
            left: -30vw;
            background-color: #d21217;
            z-index: -1;
          }
        }
        .smiley-talks-main-title {
          padding-top: 25px;
          img {
            width: 100%;
            max-width: 170px;
          }
          p {
            color: #fff;
            font: 400 14px/17px 'Montserrat Regular', sans-serif;
            text-transform: uppercase;
            letter-spacing: 17px;
            position: absolute;
            display: inline-block;
            top: 62px;
            right: 50.3%;
            margin: 0;
            transform: translateX(50%);
          }
          @include custom-width(1300px) {
            img {
              max-width: 255px;
            }
            p {
              top: 85px;
              letter-spacing: 30px;
            }
          }
          @include xxl{
            padding-top: 60px;
            p{
              right: 244px;
              top: 121px;
            }
          }
        }
        .upcoming-block-register{
          color: #fff;
          font: 700 32px/39px 'Montserrat Bold', sans-serif;
          margin: 9px 0 0;
          @include md{
            margin-top: 15px;
            margin-bottom: 16px;
          }
          @include xxl{
            margin-top: 10px;
            margin-bottom: 17px;
          }
        }
        .upcoming-block-descr{
          color: #fff;
          font: 400 16px/24px 'Muli', sans-serif;
          padding-bottom: 52px;
          margin: 10px 30px 0;
          @include md{
            margin-top: inherit;
          }
          @include xxl{
            margin: 0;
          }
        }
      }
      .upcoming-info-block{
        margin-top: 17px;
        @include xxl{
          margin-left: 42px;
          margin-top: 0;
          padding: 0;
        }
        .upcoming-info-title{
          color: $default-text;
          font: 700 20px/48px 'Montserrat Bold', sans-serif;
          text-transform: uppercase;
          margin: 0 0 4px;
          @include lg{
            font: 700 32px/48px 'Montserrat Bold', sans-serif;
            margin-bottom: 8px;
          }
          @include custom-width(1190px){
            text-align: center;
            transform: translateX(-373px);
          }
          @include xxl{
            transform: none;
            text-align: left;
            margin-top: -4px;
          }
        }
        .talk-card{
          width: 100%;
          max-width: none;
          .pic-wrap{
            height: auto;
          }
          .talk-card-checkbox{
            display: none;
          }
          .info-wrap{
            border: 1px solid #e7e8e7;
            border-top: none;
            .info-border{
              padding: 17px 22px 20px 14px;
            }
            h2{
              color: $default-text;
              font: 700 32px/38px 'Montserrat Bold', sans-serif;
              text-transform: uppercase;
              margin-top: 0;
              margin-bottom: 1px;
              @include xxl{
                margin-bottom: 12px;
              }
            }
            p{
              margin-bottom: 17px;
            }
          }
          @include lg{
            flex-direction: row;
            .smiley-img-wrap{
              height: 34.879vw;
              .smiley-img{
                img{
                  object-fit: cover;
                }
              }
            }
            .info-wrap{
              border-top: 1px solid #e7e8e7;
              border-left: none;
              max-width: 396px;
              width: 100%;
              height: auto;
              flex-direction: column;
              justify-content: space-between;
              h2{
                padding-top: 0;
              }
            }
          }
          @include custom-width(1100px){
            display: flex;
            justify-content: center;
          }
          @include xl{

            .smiley-img-wrap{
              height: 32vw;
              max-width: 762px;
            }
            .info-wrap{
              .info-border{
                padding: 46px 40px 22px 30px;
              }
              .attending-info {
                padding: 16px 10px 21px 30px;
              }
            }

          }

          @include xxl{
            .smiley-img-wrap{
              height: 475px;
            }
            .info-wrap{
              .info-border{
                p{
                  margin-top: 5px;
                }
                .date-and-time-wrap{
                  margin-top: 26px;
                  margin-bottom: 0;
                }
                .date-and-time-info{
                  margin-bottom: 10px;
                }
              }
            }
          }
        }
      }
    }
  }

  // ---------- SMILEY TALK SIDEBAR

  .talk-sidebar{
    width: 100%;
    background-color: #f7f7f7;
    padding: 25px 21px 0 25px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    @include md{
      width: 360px;
    }
    @include lg{
      padding-top: 28px;
    }
    .log-sign-req{
      color: #000;
      font: 400 16px/20px 'Muli', sans-serif;
      margin-bottom: 17px;
      margin-top: 13px;
      order: 2;
      @include lg{
        order: 1;
        margin-bottom: 35px;
      }
      a{
        white-space: nowrap;
      }
    }
    .smiley-notify{
      display: flex;
      flex-wrap: nowrap;
      order: 1;
      @include lg{
        order: 2;
        margin-bottom: 22px;
      }
    }
    .smiley-notify-text{
      font: 400 16px/20px 'Muli', sans-serif;
      color: $default-text;
      @include lg{
        font: 400 16px/24px 'Muli', sans-serif;
      }
    }
    .notify-checkbox {
      position: relative;
      padding-right: 44px;
      height: 24px;
      background-color: #e4e4e4;
      box-sizing: border-box;
      border-radius: 5000px;
      display: inline-block;
      cursor: pointer;
      margin-left: 20px;
      user-select: none;
      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }
      .notify-checkmark {
        position: absolute;
        top: 0;
        left: 1px;
        height: 24px;
        width: 44px;
        transition: all .2s ease;
        border-radius: 5000px;
        box-sizing: border-box;
      }
    }
    .notify-checkbox input:checked ~ .notify-checkmark {
      background-color: #de1c22;
      border-radius: 5000px;
      border: none;
    }
    .notify-checkmark:after {
      content: "";
      position: absolute;
      background-color: #fff;
      left: 1px;
      top: 2px;
      transition: .2s ease;
    }
    .notify-checkbox input:checked ~ .notify-checkmark:after {
      left: 22px;
      top: 2px;
      transition: .2s ease;
    }
    .notify-checkbox .notify-checkmark:after {
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
    .location-distance{
      color: #000;
      font: 400 16px/24px 'Muli', sans-serif;
      margin-top: 13px;
      margin-bottom: 23px;
      order: 4;
    }
    .location-search{
      order: 2;
      input{
        margin-top: 6px;
      }
    }
    .search-by-keyword{
      margin-bottom: 15px;
      order: 5;
    }
    .select-period{
      order: 6;
    }
    .location-search,
    .search-by-keyword,
    .select-period{
      position: relative;
      label{
        color: $default-text;
        font: 700 16px/24px 'Muli', sans-serif;
      }
      input{
        background-color: #fff;
        border: 1px solid #C7C7C7;
        border-radius: 4px;
        height: 48px;
        width: 100%;
        box-sizing: border-box;
        padding: 0 45px 0 16px;
        font: 400 16px/26px 'Montserrat Regular',sans-serif;
        &::placeholder{
          color: #656565;
          font: 400 16px/24px 'Muli', sans-serif;
        }
      }
      svg{
        width: 24px;
        height: 24px;
        position: absolute;
        right: 16px;
        bottom: 12px;
      }
    }
    .checkboxes-block{
      order: 7;
      >p{
        color: $default-text;
        font: 700 16px/24px 'Muli', sans-serif;
        margin: 14px 0 15px;
        @include lg{
          margin-top: 25px;
        }
      }
    }
    .panel {
      background: transparent;
      max-height: 0;
      overflow: hidden;
      transition: 0.2s ease-out;
    }
    .talk-sidebar-btns{
      margin-top: 17px;
      order: 8;
      @include xxl{
        margin-top: 87px;
      }
      button{
        border-radius: 4px;
        font: 700 16px/24px 'Montserrat Bold', sans-serif;
        text-transform: uppercase;
        width: 100%;
        height: 48px;
        margin-bottom: 15px;
        cursor: pointer;
      }
      .apply-filters-btn{
        background-color: #de1c22;
        border: none;
        color: #fff;
        &:hover{
          background-color: #BD0000;
          transition: .2s ease-in;
        }
      }
      .reset-filters-btn,
      .simple-search-btn,
      .advanced-search-btn{
        color: $default-text;
        font: 600 16px/24px 'Montserrat SemiBold', sans-serif;
        border: 1px solid #c7c7c7;
        background: transparent;
        &:hover{
          background-color: #fff;
          color: gray;
          transition: .2s ease-in;
        }
      }
      .simple-search-btn,
      .reset-filters-btn{
        display: none;
      }
      @include lg{
        .simple-search-btn,
        .advanced-search-btn{
          display: none;
        }
        .reset-filters-btn{
          display: block;
        }
      }
    }
  }

  // ---------- SMILEY TALK MAIN SECTION

  .talk-main-section{
    @include md{
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      padding-left: 15px;
      margin-bottom: 43px;
    }
    @include xxl{
      max-width: 1560px;
      padding-right: 14px;
      margin: 0 auto 43px;
      justify-content: space-between;
    }
    .talk-content{
      padding: 0 0 0 15px;
      @include md{
        width: calc(100% - 375px);
        width: -moz-calc(100% - 375px);
        width: -webkit-calc(100% - 375px);
      }
      @include xxl{
        max-width: 1159px;
        padding-bottom: 50px;
      }
      .selected-search-tags{
        margin-top: 13px;
        width: 100%;
        @include lg{
          margin-top: 0;
        }
        li{
          padding: 8px 12px;
          border-radius: 5000px;
          background-color: #E4E4E4;
          color: $default-text;
          font: 400 12px/16px 'Inter Regular', sans-serif;
          letter-spacing: 0.4px;
          display: inline-block;
          margin: 0 10px 16px 0;
          cursor: pointer;
        }
        a{
          text-decoration: none;
          display: inline-block;
          vertical-align: bottom;
        }
        svg{
          vertical-align: middle;
          margin-right: 8px;
        }
      }
      .smiley-pagination{
        display: none;
        @include xxl{
          display: block;
        }
      }
    }
  }
  .talk-cards-container{
    @include xxl{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .owl-item{
      height: 100%;
    }
    .owl-dots{
      text-align: center;
      margin-top: 21px;
      .owl-dot span{
        width: 14px;
        height: 14px;
        margin: 5px 7px;
        display: block;
        transition: .2s ease;
        border-radius: 50%;
        background-color: #d8d8d8;
        outline: none;
      }
      .owl-dot.active span{
        background-color: #de1c22;
      }
    }
    .talk-card-wrap{
      align-items: stretch;
      display: inline-block;
      @include xxl{
        margin-bottom: 39px;
      }
    }
  }

  // ---------- TALK CARD

  .talk-card{
    max-width: 337px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    position: relative;

    @include md{
      max-width: 360px;
    }
    .pic-wrap{
      height: 255px;
      img{
        width: 100%;
        display: block;
        margin: 0 auto;
        height: 255px;
        object-fit: cover;
        object-position: center;
      }
    }

    &--featured {
      .pic-wrap {
        height: 100%;
        img {
          height: 100%
        }
      }
    }

    .info-wrap{
      border: 1px solid #dcddde;
      border-top: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      .info-border{
        padding: 50px 30px 26px 21px;
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      .info-full-height{
        flex: 1
      }
      h2{
        color: $default-text;
        font: 700 20px/26px 'Montserrat Bold', sans-serif;
        text-transform: uppercase;
        margin-top: 0;
        margin-bottom: 0;
      }
      p{
        color: $default-text;
        font: 400 16px/20px 'Muli', sans-serif;
        margin-top: 12px;
        margin-bottom: 11px;
      }
    }
    .date-and-time-wrap{
      color: $default-text;
      font: 700 20px/30px 'Montserrat Bold', sans-serif;
      position: relative;
      margin-bottom: 12px;
      .date-and-time-info{
        margin-left: 42px;
      }
      svg{
        position: absolute;
        width: 24px;
        top: 4px;
        z-index: -1;
      }
    }
    .location-info{
      color: $default-text;
      font: 400 16px/20px 'Muli', sans-serif;
      position: relative;
      div{
        margin-left: 42px;
      }
      svg{
        position: absolute;
        width: 24px;
        top: 0;
        z-index: -1;
      }
    }
    .attending-info{
      padding: 16px 10px 17px 24px;
      border-top: 1px solid #dcddde;
      span{
        color: $default-text;
        font: 700 16px/24px 'Muli', sans-serif;
        margin-right: 5px;
      }
      .attending-wrap{
        display: inline-block;
        vertical-align: middle;
        height: 41px;
      }
      .attendees-avatar{
        width: 41px;
        height: 41px;
        border-radius: 50%;
        overflow: hidden;
        display: inline-block;
        border: 2px solid #FFF;
        box-sizing: border-box;
        img{
          width: 100%;
        }
        &.next{
          margin-left: -22px;
        }
      }
    }

    .talk-card-checkbox-dt {
      position: absolute;
      top: 218px;
      left: 50%;
      margin-left: -35px;
      height: 71px;
      width: 71px;
      border: 3px solid #fff;
      border-radius: 50%;
      background-color: #656565;
      box-sizing: border-box;
      transition: .2s ease-in;
      cursor: pointer;
      z-index: 3;
      outline: none;
      &:hover + .overlay{
        display: block;
      }
      &.button-clicked{
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &:after,
      &:before{
        content: '';
        height: 2px;
        width: 16px;
        background-color: #fff;
        position: absolute;
        opacity: 1;
        top: 32px;
        left: 50%;
        margin-left: -8px;
        transition: .2s ease-in;
      }
      &:before{
        transform: rotate(90deg);
      }
      &.talk-card-checkbox-rotate{
        transform: rotate(45deg);
      }
    }
    .overlay{
      top: 0px;
      left: 0px;
      position: absolute;
      height: 100%;
      width: 100%;
      background: #000000aa;
      z-index: 2;
      box-sizing: border-box;
      text-align: center;
      span{
        font: 700 20px/26px 'Montserrat Bold', sans-serif;
        position: absolute;
        top: 170px;
        transform: translateX(-50%);
        color: #fff;
      }
    }
    .btns-wrap{
      .attend{
        position: absolute;
        top: 0;
        left: 0;
        background: #000000aa;
        height: 100%;
        width: 100%;
        box-sizing: border-box;

        button{
          height: 48px;
          width: 100%;
          max-width: 320px;
          font: 700 16px/24px 'Montserrat Bold', sans-serif;
          background-color: #656565;
          border: 1px solid #979797;
          margin-bottom: 15px;
          border-radius: 4px;
          color: #fff;
          text-transform: uppercase;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          top: 320px;
          cursor: pointer;
          z-index: 3;
          &:after,
          &:before{
            content: '';
            height: 2px;
            width: 16px;
            background-color: #fff;
            position: absolute;
            opacity: 1;
            top: 22px;
            left: 25px;
            margin-left: -8px;
            transition: .2s ease-in;
          }
          &:before{
            transform: rotate(90deg);
          }
        }
      }
      .display-none{
        display: none;
      }
    }
    .attend-loading{
      position: absolute;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      /*animation: spin 1s linear infinite;*/
      width: 90px;
      height: 90px;
      top: 210px;
      right: 50%;
      margin-right: -45px;
      span{
        position: absolute;
        font: 700 16px/24px 'Montserrat Bold', sans-serif;
        text-transform: uppercase;
        color: #fff;
        white-space: nowrap;
        bottom: -50px;
        left: -3px;
      }
      svg {
        position: absolute;
        top: 0;
        left: 0;
        animation: loadingRotate 1s linear infinite;
        @keyframes loadingRotate {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(180deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .outer{
          stroke: #fff;
          stroke-width: 15px;
          fill: transparent;

        }
        .inner {
          fill: transparent;
          stroke: #d21217;
          stroke-width: 15px;
          stroke-dasharray: 539;
          transition: stroke-dashoffset 1s;
          -webkit-animation-play-state: running;
          stroke-dashoffset: 481;
        }

      }
    }
    .attend-complete{

      span{
        color: #fff;
        font: 700 20px/24px 'Montserrat Bold', sans-serif;
        position: absolute;
        left: 50%;
        bottom: -45px;
        transform: translateX(-50%);
        top: 300px;
        left: 50%;
      }

    }
    .confirmed-box{
      position: absolute;
      top: 218px;
      left: 50%;
      margin-left: -35px;
      height: 71px;
      width: 71px;
      border: 3px solid #fff;
      border-radius: 50%;
      background-color: #d21217;
      box-sizing: border-box;
      transition: .2s ease-in;
      cursor: pointer;
      z-index: 3;
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

    .talk-cards-container{
      .talk-card-checkbox {
        position: absolute;
        top: 218px;
        left: 50%;
        margin-left: -35px;
        cursor: pointer;
        user-select: none;
        input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }
        .talk-card-checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 71px;
          width: 71px;
          border: 3px solid #fff;
          border-radius: 50%;
          background-color: #656565;
          box-sizing: border-box;
          transition: .2s ease-in;
          &:after,
          &:before{
            content: '';
            height: 2px;
            width: 16px;
            background-color: #fff;
            position: absolute;
            opacity: 1;
            top: 32px;
            left: 50%;
            margin-left: -8px;
            transition: .2s ease-in;
          }
          &:before{
            transform: rotate(90deg);
          }
          svg{
            position: absolute;
            top: 21px;
            left: 20px;
            opacity: 0;
          }
        }
      }
      .talk-card-checkbox input:checked ~ .talk-card-checkmark {
        background-color: #de1c22;
        transition: .2s ease-in;
      }
      .talk-card-checkbox input:checked ~ .talk-card-checkmark {
        &:after,
        &:before{
          opacity: 0;
          display: none;
        }
        svg{
          transition: .2s ease-in;
          opacity: 1;
        }
      }
    }

  // ---------- SMILEY PAGINATION

  .smiley-pagination{
    font: 600 16px/24px 'Inter SemiBold', sans-serif;
    text-align: center;
    ul{
      display: flex;
      justify-content: center;
    }
    li{
      display: inline-block;
      width: 48px;
      margin: 0 16px;
    }
    a{
      color: $default-text;
      text-decoration: none;
      line-height: 48px;
      display: block;
    }
    svg{
      vertical-align: middle;
      margin-bottom: 2px;
    }
    span{
    }
    .smiley-pagination-back,
    .smiley-pagination-next{
      margin: 0;
      width: 71px;
    }
  }

  // ---------- PAST SMILEY TALKS

  .past-talks-section{
    padding-left: 15px;
    margin-bottom: 23px;
    >h2{
      color: $default-text;
      font: 700 20px/48px 'Montserrat Bold', sans-serif;
      text-transform: uppercase;
      padding-bottom: 9px;
      margin-bottom: 0;
      margin-top: 13px;
      @include lg{
        font: 700 32px/48px 'Montserrat Bold', sans-serif;
        margin-bottom: 38px;
        margin-top: 45px;
        border-bottom: 1px solid #e4e4e4;
      }
    }
    @include xxl{
      padding: 0 20px;
      max-width: 1560px;
      margin: 0 auto;
      .talk-card-wrap{
        margin-bottom: 45px;
      }
    }
    .smiley-pagination{
      display: none;
      @include xxl{
        display: block;
      }
    }
  }

  // ---------- CREATE HUB SECTION

  .create-hub-section{
    margin-bottom: 40px;
    @include lg{
      margin-top: 60px;
      margin-bottom: 80px;
    }
    @include xxl{
      margin-top: 88px;
      margin-bottom: 130px;
    }
    .create-hub-wrap{
      display: flex;
      flex-direction: column;
      align-items: center;
      @include xl{
        flex-direction: row;
        position: relative;
        align-items: flex-start;
        justify-content: center;
        max-width: 1560px;
        margin: 0 auto;
      }
    }
    .create-hub-video{
      order: 2;
      height: 66.7vw;
      max-height: 595px;
      max-width: 892px;
      img{
        width: 100%;
        display: block;
      }
      @include xl{
        order: 1;
        margin-left: 9%;
        height: auto;
        img{
        }
      }
    }
    .create-hub-content{
      padding: 32px 32px 34px;
      background-color: #ffff00;
      display: flex;
      flex-direction: column;
      @include xl{
        order: 2;
        max-width: 407px;
        width: 100%;
        box-sizing: border-box;
        align-self: normal;
        justify-content: center;
      }
      @include custom-width(1400px){
        max-width: 534px;
      }
      @include xxl{
        padding: 90px 50px 20px 40px;
        justify-content: flex-start;
      }
    }
    .create-hub-logo{
      height: 123px;
      display: inline-block;
      margin-right: 32px;
      img{
        height: 100%;
      }
      @include xl{
        position: absolute;
        z-index: 2;
        margin-left: 0;
        width: 359px;
        height: 318px;
        left: 0;
        top: 0;
        transform: translate(0, 43%);
        margin-top: 3px;
        background-color: #ffff00;
        text-align: center;
        img{
          transform: translateY(38px);
          height: 244px;
        }
      }
    }
    .create-hub-title-wrap{
      color: $default-text;
      font: 700 44px/42px 'Montserrat Bold', sans-serif;
      text-transform: uppercase;
      display: flex;
      padding-right: 20px;
      align-self: center;
      @include xxl{
        font: 700 56px/74px 'Montserrat Bold', sans-serif;
      }
    }
    .create-hub-title{
      align-self: center;
    }
    .create-hub-text{
      margin-top: 12px;
    }
    .create-hub-descr{
      color: $default-text;
      font: 400 22px/30px 'Muli', sans-serif;
      margin-bottom: 23px;
      @include xxl{
        margin-bottom: 58px;
      }
    }
  }

  .breadcrumbs{
    margin: 13px auto;
    padding: 0 15px;
    max-width: 1560px;
    li{
      display: inline-block;
    }
    .breadcrumbs-item{
      text-decoration: none;
      color: $default-text;
      font: 400 16px/21px 'Muli', sans-serif;
    }
    svg{
      margin-right: 5px;
    }
    @include lg{
      margin: 37px auto;
    }
  }

  // ---------- SIGN UP INDEX SECTION

  .signup-section{
    background-color: #f7f7f7;
    padding: 40px 0 50px;
    text-align: center;
    h2{
      color: $default-text;
      font: 700 32px/48px 'Montserrat Bold', sans-serif;
      text-transform: uppercase;
    }
    .smiley-signup-form{
      display: flex;
      flex-direction: column;
      align-items: center;
      label,
      input{
        max-width: 331px;
        width: 100%;
      }
      @include md{
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        label{
          margin-right: 30px;
          &:last-of-type{
            margin-right: 0;
          }
        }
      }
      input{
        border: 1px solid #C7C7C7;
        box-sizing: border-box;
        border-radius: 4px;
        height: 48px;
        margin-bottom: 20px;
        text-indent: 16px;
        font: 400 16px/24px 'Montserrat Regular', sans-serif;
        &:focus{
          border: 1px solid #eeb400;
          box-shadow: 0 2px 31px 13px rgba(0,0,0,0.05);
          transition: 0.2s ease-in;
        }
        @include xxl{
          margin-bottom: 0;
        }
        &::placeholder{
          color: #656565;
          font: 400 16px/24px 'Muli', sans-serif;
        }
      }
      .signup-btn-wrap{
        width: 100%;
        @include xl{
          max-width: 218px;
          margin: -1px 30px 0;
        }
      }
      .btn-signup{
        border: none;
        box-sizing: border-box;
        background-color: $default-orange-btns;
        border-radius: 4px;
        color: #fff;
        height: 48px;
        max-width: 218px;
        margin-bottom: -1px;
        text-transform: uppercase;
        font: 700 16px/24px 'Montserrat Bold', sans-serif;
        width: 100%;
        cursor: pointer;
      }
    }
    .social-icons{
      margin-top: 50px;
    }
  }

  .social-icons{
    margin-top: 48px;
    ul{
      li{
        display: inline-flex;
        justify-content: center;
        text-align: center;
        margin: 0 auto;
        width: 100%;
        max-width: 46px;
        &:last-of-type{
        }
      }
      a{
        display: inline-flex;
      }
    }
    i{
      color: $default-text;
      font-size: 24px;
      transition: 0.2s ease-in;
      display: inline-block;
    }
  }

</style>