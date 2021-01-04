<template>
  <div>
    <section class="our-story">
      <video controls style="width: 100%; height: auto;">
        <source
            src="https://old-admin.smileymovement.org/app/uploads/2019/07/Smiley-Movement-V03.mp4"
            type="video/mp4"
        />
        Your browser does not support the video tag
      </video>
      <div class="container">
        <div class="our-story__head">
          <div class="content-w">
            <bottom-bordered-title-with-search
                :title="'<b>Our Story</b>'"
                :title-font-size="24"
                :with-search="false"
            ></bottom-bordered-title-with-search>
            <p>The Smiley Movement is a non-profit that aims to tackle the big issues in society by matching the
              people and organisations who can help solve problems with others that need solutions. We want to make it
              as simple as possible for anyone anywhere to start creating a positive impact on the world via our
              unique social network. It couldn’t be easier to get started and it is free and open to everyone.</p>
          </div>
        </div>

        <div class="our-story__blocks">
          <div class="item">
            <div class="item__icon">
              <img
                  src="/img/our-story/vision459@3x.png"
              />
            </div>

            <h2>Vision</h2>

            <p>A world where people, communities and organisations work hand in hand to find the answers to current
              social and environmental problems.</p>
          </div>

          <div class="item">
            <div class="item__icon">
              <img
                  src="/img/our-story/mission461@3x.png"
              />
            </div>

            <h2>Mission</h2>

            <p>To create the technology and ecosystems that empower communities throughout the world to act on issues
              important to them.</p>
          </div>
        </div>

        <div class="our-story__timeline">
          <div class="timeline__head">
            <div>
              <div>January <br> 2021</div>
            </div>
          </div>
          <div class="timeline__body">
            <div class="timeline__year js-tl-year-content" data-year="December 2020">
              <div class="year__image">
                <img src="/img/our-story/talks496@3x.png" style="width: 480px; max-width: unset;"/>
              </div>
              <div class="year__text">
                <div>
                  <h2>REBRAND!</h2>
                  <p>We're ready for 2021 with a new look and tons
                    of new features!</p>
                </div>
              </div>
            </div>
            <div class="timeline__year js-tl-year-content" data-year="December 2020">
              <div class="year__image">
                <img src="/img/our-story/star488@3x.png" style="width: 160px;"/>
              </div>
              <div class="year__delimiter">
                <span>December 2020</span>
              </div>
              <div class="year__text" style="margin-bottom: -26px;">
                <div>
                  <p>We host <b>8</b> virtual Events online reaching over
                    250,000 people!</p>
                </div>
              </div>
            </div>
            <div class="timeline__year js-tl-year-content" data-year="September 2020">
              <div class="year__image">
                <img src="/img/our-story/news485@3x.png" style="width: 350px; max-width: unset;"/>
              </div>
              <div class="year__delimiter">
                <span>September 2020</span>
              </div>
              <div class="year__text"  style="margin-bottom: -26px;">
                <div>
                  <p>Smiley Movement pivots back to its roots,
                    creating an online platform to promote Global
                    <b>Positive News</b></p>
                </div>
              </div>
            </div>
            <div class="timeline__year js-tl-year-content" data-year="March 2020">
              <div class="year__image" style="margin-bottom: -72px;">
                <img src="/img/our-story/covid497@3x.png" style="width: 250px;"/>
              </div>
              <div class="year__delimiter">
                <span>March 2020</span>
              </div>
              <div class="year__text"  style="margin-bottom: -26px;">
                <div style="background-color: gray; color: #FFFFFF">
                  <p><b>COVID 19 hits and the World stands still...</b></p>
                </div>
              </div>
            </div>
            <div class="timeline__year js-tl-year-content" data-year="January 2020">
              <div class="year__image" style="margin-bottom: -70px;">
                <img src="/img/our-story/star488@3x.png" style="width: 160px;"/>
              </div>
              <div class="year__delimiter with-yellow-head" v-if="!widthLessThousand">
                <span>
                  <div class="yellow-timeline__head">
                    <div>
                      <div>January <br> 2020</div>
                    </div>
                  </div>
                </span>
              </div>
              <div class="year__delimiter" v-else>
                <span>January 2020</span>
              </div>
              <div class="year__text" style="margin-bottom: -50px;">
                <div>
                  <p><b>Smiley Talks</b> hosts multiple events welcoming
                    over 100 guests at each</p>
                </div>
              </div>
            </div>
            <div class="timeline__year js-tl-year-content" data-year="December 2019">
              <div class="year__image">
                <img src="/img/our-story/guy@3x.png" style="width: 160px;"/>
              </div>
              <div class="year__delimiter before-with-yellow">
                <span>Dec 2019</span>
              </div>
              <div class="year__text">
                <div>
                  <h2>Reached our first Milestone</h2>

                  <p>Closed our first year having organised 6 Smiley Talks, we lcomed 800 guests, collaborated with 65
                    charity partners, national press coverage and facilitated sizeable corporate donations to charities
                    around the world.</p>
                </div>
              </div>
            </div>
            <div class="timeline__year js-tl-year-content" data-year="June 2019">
              <div class="year__image">
                <img src="/img/our-story/smiley-talks.jpg" style="width: 330px; max-width: unset;"/>
              </div>
              <div class="year__delimiter">
                <span>June 2019</span>
              </div>
              <div class="year__text" style="margin-bottom: -20px;">
                <div>
                  <h2>Launched our first Smiley Talk</h2>

                  <p>Hosted our first Smiley Talk in Brighton during Refugee Week</p>
                </div>
              </div>
            </div>
            <div class="timeline__year js-tl-year-content" data-year="March 2019">
              <div class="year__image">
                <img src="/img/our-story/movement477@3x.png" style="width: 250px;"/>
              </div>
              <div class="year__delimiter">
                <span>March 2019</span>
              </div>
              <div class="year__text">
                <div style="background-color: yellow">
                  <h2>Creation of Smiley Movement (CIC)</h2>

                  <p>The ‘matchmaker for good’ social network sponsored by Smiley, that connects charitable projects
                    with supporters, mobilises good ideas and drives positive action.</p>
                </div>
              </div>
            </div>
            <div class="timeline__year js-tl-year-content" data-year="2005">
              <div class="year__image" style="margin-bottom: -40px;">
                <img
                    style="width: 450px; max-width: unset;"
                    src="/img/our-story/fund479@3x.png"
                />
              </div>
              <div class="year__delimiter">
                <span>2005</span>
              </div>
              <div class="year__text" style="margin-bottom: -100px;">
                <div>
                  <h2>The Smiley Company teamed up with Groupe SOS</h2>

                  <p>Groupe SOS, the largest social enterprise in the world, employing 15,000 staff and directly
                    impacting 1.6 million beneficiaries. Together, they created the SmileyFund that financed trade and
                    social initiatives helping local communities in Africa, India and South America develop sustainable
                    sources of revenues.</p>
                </div>
              </div>
            </div>
            <div class="timeline__year js-tl-year-content" data-year="1997">
              <div class="year__image" style="margin-bottom: -90px;">
                <img
                    style="width: 270px;"
                    src="https://s3-eu-west-2.amazonaws.com/admin.up-movement/app/uploads/2019/03/smiley-yellow-transparent-background.png"
                />
              </div>
              <div class="year__delimiter">
                <span>1997</span>
              </div>
              <div class="year__text">
                <div>
                  <h2>World’s first digital Smileys</h2>

                  <p>Nicolas Loufrani, Franklin's son, joins Smiley and creates and copyrights the world's first digital
                    Smileys, becoming the fastest growing trend in pop culture.</p>
                </div>
              </div>
            </div>
            <div class="timeline__year js-tl-year-content" data-year="1971">
              <div class="year__image" style="margin-bottom: -90px;">
                <img
                    style="width: 380px; max-width: unset;"
                    src="https://s3-eu-west-2.amazonaws.com/admin.up-movement/app/uploads/2018/11/paper.png"
                />
              </div>
              <div class="year__delimiter">
                <span>1971</span>
              </div>
              <div class="year__text" style="margin-bottom: -50px;">
                <div>
                  <h2>The Birth of Smiley</h2>

                  <p>France Soir newspaper editor Franklin Loufrani created the Smiley symbol to highlight all the
                    positive and fun news in the newspaper.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="our-story__subscribe-wrapper">
      <Subscribe/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Subscribe from "@/components/forms/Subscribe";
import BottomBorderedTitleWithSearch from "@/components/BottomBorderedTitleWithSearch";
import Footer from "@/components/Footer.vue";

export default {
  name: "Story",
  components: {
    Subscribe,
    BottomBorderedTitleWithSearch,
    Footer
  },
  data() {
    return {
      widthLessThousand: false
    };
  },
  mounted() {
    const metaPayload = {
      meta: {},
      title: 'Our Story'
    }

    metaPayload.meta.description = 'The history and evolution of licensing brand Smiley that led to the full support and creation of Smiley Movement';
    this.$store.dispatch('meta/setMeta', metaPayload);
  },
  methods: {
    handleResize() {
      this.widthLessThousand = window.innerWidth < 1000;
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>


<style lang="scss" scoped>
@import "@/scss/sections/_page-our-story";

.our-story
.our-story__timeline
.timeline__body
.timeline__year.active.plus
.year__text
p {
  @include font-size(1.3rem);
}

.our-story
.our-story__timeline
.timeline__body
.timeline__year.active.plus
.year__text
h2 {
  @include font-size(1.7rem);
}

.our-story__subscribe-wrapper {
  margin-top: 10rem;
  padding: 0 180px;
  @include lgMax {
    padding: 0 50px;
  }
}
</style>
