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

    <section class="latest-news-section">

      <div class="latest-news-wrap">
        <div class="title-colored-block">
          <div class="smiley-news-main-title">
            <img src="img/homepage/smiley-main-title.svg" alt="smiley talks">
            <P>News</P>
          </div>
          <h2 class="news-block-title">Everyday heroes making the world a happier place</h2>
          <p class="news-block-descr">Smiley News brings you inspiring stories of people and communities working together to make the world a better place.</p>

        </div>



        <div class="smiley-news-center">
          <h2>Latest news</h2>
          <a  href="#" class="article-item" v-if="topNews">
            <div class="smiley-img-wrap">
              <div class="smiley-img">
                <img src="img/homepage/news-big-item-x1.jpg" alt="big-photo">
              </div>
            </div>
            <div class="article-descr">
              <div class="article-date-location">
                <div class="article-date"></div>
                <div class="article-location"></div>
              </div>
              <div class="article-title">{{topNews.slug}}</div>
              <div class="article-subtitle">{{topNews.title}}</div>
            </div>
          </a>
        </div>

        <div class="smiley-news-right" v-if="latestNews">
          <div class="wrap-for-category-select">
            <select class="category-filter" name="category">
              <option selected disabled>Choose a category</option>
              <option value="1">Affordable and clean energy</option>
              <option value="2">Clean water and sanitation</option>
              <option value="3">Climate Action</option>
              <option value="4">Decent work and economic growth</option>
              <option value="5">Gender Equality</option>
              <option value="6">Good Health and Wellbeing</option>
              <option value="7">Industry, Innovation and Infrastructure</option>
              <option value="8">Life below water</option>
              <option value="9">Life on Land</option>
              <option value="10">No Poverty</option>
              <option value="11">Partnerships for the Goals</option>
              <option value="12">Peace, Justice and Strong Institutions</option>
              <option value="13">Quality Education</option>
              <option value="14">Reduced Inequalities</option>
              <option value="15">Responsible consumption and production</option>
              <option value="16">Sustainable Cities and Communities</option>
              <option value="17">Zero Hunger</option>
            </select>
            <div class="select-arrows">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0002 8.00025C21.0002 8.25625 20.9023 8.51225 20.7073 8.70725L12.7072 16.7072C12.3162 17.0982 11.6842 17.0982 11.2933 16.7072L3.29325 8.70725C2.90225 8.31625 2.90225 7.68425 3.29325 7.29325C3.68425 6.90225 4.31625 6.90225 4.70725 7.29325L12.0002 14.5862L19.2932 7.29325C19.6842 6.90225 20.3162 6.90225 20.7073 7.29325C20.9023 7.48825 21.0002 7.74425 21.0002 8.00025Z"/>
              </svg>
            </div>
          </div>

          <div class="right-articles-wrap">

            <a  href="#" class="article-item" v-for="(news, index) in  latestNews" :key="index">
              <div class="smiley-img-wrap">
                <div class="smiley-img">
                  <img src="img/homepage/news-small-item-1-x2.jpg" alt="small preview 1">
                </div>
              </div>
              <div class="article-descr">
                <div class="article-date-location">
                  <div class="article-date"></div>
                  <div class="article-location"></div>
                </div>
                <div class="article-title">{{news.slug}}</div>
                <div class="article-subtitle">{{news.title}}</div>
              </div>
            </a>

          </div>
        </div>
      </div>

    </section>

    <section class="news-category-section container">

      <div class="news-category-container" v-for="(news, index) in featuredGoals" :key="index">

        <h2 class="news-category-title">{{news.name}}</h2>

        <router-link to="" class="article-item" v-for="(post, index) in news.blog_posts_latest" :key="index">
          <div class="smiley-img-wrap">
            <div class="smiley-img">
              <img src="img/news/news-category-1-item-1.jpg" alt="News item 1">
            </div>
            <div class="icon-wrap">
              <img src="img/homepage/icon-01.png" alt="icon">
            </div>
          </div>
          <div class="article-descr">
            <div class="article-date-location">
              <div class="article-date">{{new Date(post.created_at).toLocaleDateString('nl', {day:"2-digit",month:"2-digit",year:"numeric"})}}</div>
              <div class="article-location">London</div>
            </div>
            <div class="article-title">{{post.title}}</div>
            <div class="article-subtitle">{{post.description}}</div>
          </div>
        </router-link>


        <div class="more-link-wrap">
          <a href="#" class="read-more-link"><span></span>Read more</a>
        </div>
      </div>

    </section>



    <Footer />
  </div>
</template>

<script>

  import Footer from '@/components/Footer.vue';
  import axios from "../axios-auth";

  export default {
    name: "News",
    components: {
      Footer
    },
    data(){
      return{
        topNews: null,
        latestNews: null,
        featuredGoals: null
      }
    }
    ,mounted() {
      axios.get('/news/latest')
          .then(res => {
            this.topNews = res.data.data.latest_news[0];
            res.data.data.latest_news.shift();
            this.latestNews = res.data.data.latest_news;

            this.featuredGoals = res.data.data.featured_goals;

          })
          .catch(error => console.log(error));
    },
    methods: {

    }
  }
</script>


<style lang="scss" scoped>

  //---------- ARTICLE ITEM

  .article-item{
    display: flex;
    flex-direction: column;
    text-decoration: none;
    .smiley-img-wrap{
      position: relative;
      .icon-wrap{
        background-color: #fff;
        height: 105px;
        width: 105px;
        position: absolute;
        box-sizing: border-box;
        bottom: 0;
        right: 0;
        padding-top: 2px;
        padding-left: 5px;
        overflow: hidden;
        img{
          width: 105px;
        }
      }
    }
    img{
      width: 100%;
    }
    @include md{
      margin-right: 10px;
      &:last-of-type{
        margin-right: 0;
      }
    }
    @include xxl{
      margin-right: 0;
      margin-top: 0;
      margin-bottom: 43px;
      .smiley-img-wrap{
        width: 100%;
      }
      img{
        margin-bottom: 0;
      }
    }
    .article-descr{
      margin-top: 14px;
      padding: 0 0 17px 0;
      @include xxl{
        margin-top: 0;
      }
    }
    .article-date-location{
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      @include xxl{
        margin-top: 10px;
      }
      .article-date{
        color: #a1a1a1;
        font: 600 16px/24px 'Montserrat SemiBold', sans-serif;
      }
      .article-location{
        color: #D21217;
        font: 600 16px/24px 'Montserrat SemiBold', sans-serif;
        text-transform: uppercase;
        margin-left: 10px;
      }
    }
    .article-title{
      color: $default-text;
      font: 700 20px/32px 'Montserrat Bold', sans-serif;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .article-subtitle{
      color: $default-text;
      font: 400 16px/20px 'Muli', sans-serif;
      padding-right: 15px;
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


  .latest-news-section{
    @include xxl{
      margin-bottom: 7px;
    }
    .latest-news-wrap{
      max-width: 1600px;
      margin: 0 auto;
      @include lg{
        display: flex;
        flex-wrap: wrap;
      }
      @include xxl{
        justify-content: space-between;
        flex-wrap: nowrap;
        .title-colored-block{
          text-align: left;
          width: 380px;
          box-sizing: border-box;
        }
      }
      .title-colored-block{
        background-color: $default-orange-btns;
        position: relative;
        text-align: center;
        z-index: 0;
        padding: 0 15px;
        @include lg{
          width: 100%;
          margin-bottom: 20px;
        }
        @include xxl{
          text-align: left;
          padding: 0 60px 0 20px;
          width: 380px;
          height: 526px;
          margin-bottom: 0;
          &:after{
            content: '';
            height: 100%;
            position: absolute;
            right: 0;
            top: 0;
            left: -30vw;
            background-color: $default-orange-btns;
            z-index: -1;
          }
        }
        .smiley-news-main-title {
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
            top: 67px;
            right: 51%;
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
            padding-top: 55px;
            p{
              top: 118px;
              right: 223px;
            }
          }
        }
        .news-block-title{
          color: #fff;
          font: 700 32px/39px 'Montserrat Bold', sans-serif;
          margin: 3px 0 0;
          @include md{
            margin-top: 15px;
            margin-bottom: 16px;
          }
          @include xxl{
            margin: 10px 10px 28px 0;
          }
        }
        .news-block-descr{
          color: #fff;
          font: 400 16px/24px 'Muli', sans-serif;
          padding-bottom: 18px;
          margin-top: 12px;
          margin-bottom: 0;
          @include md{
            margin-top: inherit;
          }
        }
      }
      .wrap-for-category-select{
        border-radius: 4px;
        box-sizing: border-box;
        height: 48px;
        position: relative;
        width: 100%;
        @include xxl{
          max-width: 359px;
          margin-right: 15px;
        }
        select{
          padding: 0 48px 0 16px;
          width: 100%;
          border: 1px solid #C7C7C7;
          background-color: transparent;
          border-radius: 4px;
          height: 100%;
          color: #656565;
          font: 400 16px/24px 'Muli', sans-serif;
          cursor: pointer;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          z-index: 2;
          &::-ms-expand{
            display: none;             /* remove arrow IE     */
          }
          &:focus{
            outline: none;
          }
          option{
            color: $default-text;
            &[disabled]{
              color: #656565;
            }
          }
          &:hover + .select-arrows svg{
            fill: #1A1A1A;
          }

        }
        .select-arrows{
          display: flex;
          position: absolute;
          right: 18px;
          top: 14px;
          z-index: -1;
          svg{
            fill: #656565;
          }
        }
      }
      .smiley-news-center{
        max-width: 762px;
        margin: 16px auto 0;
        padding: 0 15px;

        h2{
          color: $default-text;
          font: 700 32px/48px 'Montserrat Bold', sans-serif;
          text-transform: uppercase;
          display: none;
          margin-top: 0;
          margin-bottom: 17px;
          @include lg{
            display: block;
          }
        }
        @include md{

          .smiley-img-wrap{
            height: 35.484vw;
          }
        }
        @include lg{
          width: 60%;
          box-sizing: border-box;
          margin-top: 0;
        }
        @include xxl{
          max-width: 762px;
          width: 100%;
          padding: 0;
          .smiley-img-wrap{
            height: 475px;
          }
        }
        .article-descr{
          display: flex;
          flex-direction: column;
          padding: 0;
        }
        .article-date-location{
          display: none;
        }
        .article-subtitle{
          color: #a1a1a1;
          font: 600 16px/24px 'Montserrat SemiBold', sans-serif;
          text-transform: uppercase;
          margin-top: 1px;
          margin-bottom: 9px;
          order: 1;
          @include xxl{
            margin-top: 18px;
          }
        }
        .article-title{
          color: $default-text;
          font: 700 32px/43px 'Montserrat Bold', sans-serif;
          text-transform: uppercase;
          order: 2;
          @include md{
            font: 700 32px/48px 'Montserrat Bold', sans-serif;
          }
          @include xxl{
            padding-right: 10px;
          }
        }
      }
      .smiley-news-right{
        padding: 0 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        @include md{
          .smiley-img-wrap{
            height: 27.734vw;
          }
        }


        @include lg{
          width: 40%;
          box-sizing: border-box;
          .smiley-img-wrap{
            height: 21.734vw;
          }
        }
        @include xxl{
          width: auto;
          padding: 0;
          .smiley-img-wrap{
            height: 224px;
          }
        }
        .article-item{
          margin-bottom: 5px;
          margin-top: 13px;
          text-decoration: none;
          width: 100%;
          .article-descr{
            display: flex;
            flex-direction: column;
            margin-top: 0;
            padding: 0;
          }
          @include lg{
            margin-top: 0;
            margin-right: 0;
          }
        }
        .article-date-location{
          display: none;
        }
        .article-title{
          color: $default-text;
          font: 700 20px/32px 'Montserrat Bold', sans-serif;
          text-transform: uppercase;
          margin-bottom: 4px;
          order: 2;
        }
        .article-subtitle{
          color: #a1a1a1;
          font: 600 14px/24px 'Montserrat SemiBold', sans-serif;
          text-transform: uppercase;
          margin-bottom: 8px;
          margin-top: 11px;
          order: 1;
        }
        .right-articles-wrap{
          @include md{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: normal;

            .news-small-item{
              margin-right: 10px;
              &:last-of-type{
                margin-right: 0;
              }
            }
          }
          @include lg{
            flex-direction: column;
            box-sizing: border-box;
            margin-top: 17px;
            .article-item{
              margin: 0 0 25px;
            }
          }
          @include xxl{
            flex-direction: column;
            max-width: 359px;
            padding: 0;
            margin-right: 15px;
            .article-item{
              width: 100%;
              img{
                margin-bottom: 0;
              }
            }
          }
        }

      }
    }
  }

  // ---------- SMILEY NEWS CATEGORY

  .news-category-title{
    color: $default-text;
    font: 700 18px/48px 'Montserrat Bold', sans-serif;
    text-transform: uppercase;
    align-self: flex-start;
    width: 100%;
    border-bottom: 1px solid #e4e4e4;
    @include md{
      font: 700 32px/48px 'Montserrat Bold', sans-serif;
      padding-bottom: 9px;
      margin: 26px 0 28px ;
    }
  }

  .news-category-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 12px;
    &:last-of-type{
      margin-bottom: 50px;
      @include xl{
        margin-bottom: 97px;
      }
    }
    .news-category-container{
      .article-item{
        .article-descr{
          padding-bottom: 19px;
        }
        .article-location{
          display: none;
        }
        .article-title{
          text-transform: none;
          margin-bottom: 7px;
        }
        .article-subtitle{
          padding-right: 0;
        }
      }
      @include md{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 100%;
        .article-item{
          width: 48%;
          margin: 0;
          .smiley-img-wrap{
            height: 27.734vw;
          }
        }
      }
      @include lg{
        justify-content: space-between;
        position: relative;
        .article-item{
          max-width: 492px;
          width: 32%;
          margin: 0;
          box-sizing: border-box;
          .smiley-img-wrap{
            height: 20.443vw;
          }
        }
      }
      @include xxl{
        .article-item{
          flex-direction: column;
          width: 100%;
          .smiley-img-wrap{
            height: 311px;
          }
          .article-descr{
            padding-left: 0;
          }
          .article-date-location{
            margin-bottom: 9px;
          }
        }
      }
    }
    .more-link-wrap{
      width: 100%;
      margin-top: 2px;
      .read-more-link{
        align-self: flex-start;
      }
      @include lg{
        position: absolute;
        right: 0;
        top: 41px;
        width: auto;
      }
    }
    @include xl{
      margin-bottom: 77px;
    }
  }



</style>