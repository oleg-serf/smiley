<template>
  <div class="container">
    <div>
      <div class="header">
        <img
            src="/img/goals/goals_main.png"
            alt="goalsImg"
            title="Goals"
        />
      </div>
    </div>

    <div class="textual-banner textual-banner--contained">
      <div>
        <div class="textual-banner__title">17 GOALS TO TRANSFORM OUR WORLD</div>
        <p>The Sustainable Development Goals (SDG’s) are the blueprint for peace and prosperity for people and the
          planet, now and into the future. Everything we do is guided by these goals, from the events we host, content
          we produce to the way organisations and projects are presented to you.Click through each Goal below to uncover
          the latest Smiley News, Events and Charitable Projects related to that goal and learn how you can get
          involved.</p>
        <p>Click on each <strong class="text-bold">Goal</strong> to learn more</p>
      </div>
    </div>
    <div>
      <!--   SOCIAL_NETWORK_SHARE COMPONENT   -->
      <SocialNetworkShare :title="''"></SocialNetworkShare>
    </div>

    <div class="event-category">
      <h3 class="event-category__title"><b>UN Goals</b></h3>
      <input
          class="un_goals_search_input"
          type="text"
          placeholder="Search Topics...">
    </div>

    <section class="goals-grid">
      <div class="goals-grid__grid">
        <div class="goals-grid__item">
          <img src="/img/un-goals.png" alt="icon"/>
        </div>
        <div class="goals-grid__item" v-for="goal in goals" :key="goal.name+goal.id">
          <router-link :to="'/goals/' + goal.slug">
            <img :src="$settings.images_path.goals + 's_' + goal.image" alt="icon"/>
          </router-link>
        </div>
      </div>
    </section>

    <div class="textual-banner textual-banner--contained margin-bottom-six-rem">
      <div>
        <p>
          <a href="https://sustainabledevelopment.un.org/?menu=1300" class="text-bold">Click here</a> to visit the UN
          Goals website
        </p>
      </div>
    </div>

    <Subscribe/>
  </div>
</template>

<script>
// Tools
import axios from "@/axios-auth";
// Components
import Banner from "@/components/homepage/Banner.vue";
import SocialNetworkShare from "@/components/SocialNetworkShare";
import Subscribe from '@/components/forms/Subscribe.vue';

export default {
  name: "Goals",
  components: {
    Subscribe,
    SocialNetworkShare,
    Banner,
  },
  data() {
    return {
      goals: []
    };
  },
  mounted() {
    axios
        .get("/goals")
        .then(res => {
          this.goals = res.data.goals;
        })
        .catch(error => console.error(error));
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/blocks/homepage/_goals-grid";

.event-category {
  padding: 16px 0;
  border-bottom: 2px solid #ffe300;
  display: flex;
  margin: 30px 0;
  justify-content: space-between;

  .event-category__title {
    color: black;
    font-family: "Gotham Light", sans-serif;

    b {
      font-family: "Gotham Bold", sans-serif;
    }
  }
}

.un_goals_search_input {
  width: 10rem;
  padding: .5rem 1rem;
  height: 1.9rem;
  border-radius: 2rem;
  font-size: 13px;
  color: #666666;
  background-image: url('/images/main/icon-search.svg');
  background-repeat: no-repeat;
  background-position: 95% center;
  background-size: 1rem 1rem;
  outline: 0;
}

.header {
  margin-bottom: 4rem;
  @include lgMax {
    margin: 0 1rem;
  }

  img {
    width: 100%;
  }
}

.textual-banner {
  text-align: left;
  padding: 3rem 0 0;

  &.margin-bottom-six-rem {
    margin-bottom: 6rem;
  }

  a {
    text-decoration: none !important;
    border-bottom: none;
  }
}

.text-bold {
  color: #000000 !important;
  font-weight: bold !important;
  text-decoration: none !important;
  font-family: "Gotham Bold", sans-serif !important;
}

.post-title {
  font-family: "Montserrat Regular";
  text-align: center;
  line-height: 1.35;
  @include font-size(1.1rem);
  padding-top: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid #c7c7c7;
  background-color: #a0a0a0;
  box-sizing: border-box;
  color: #fff;

  .post-title__title {
    @include font-size(2rem);
    font-family: "Montserrat SemiBold", sans-serif;
    margin-bottom: 0px;
  }

  p {
    line-height: 1.45;
  }
}

.goals-grid {
  margin-top: 5px;
  margin-bottom: 5px;

  .goals-grid__grid {
    grid-template-columns: repeat(9, 1fr);

    @include xxlMax {
      grid-template-columns: repeat(9, 1fr);
    }
    @include lgMax {
      grid-template-columns: repeat(6, 1fr);
    }
    @include mdMax {
      grid-template-columns: repeat(5, 1fr);
    }
    @include mdMax {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .goals-grid__item {
    border: 1px solid #c7c7c7;
    line-height: 1;

    a {
      font-size: 0px;
      display: block;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
