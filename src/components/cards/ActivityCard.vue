<template>
  <div class="card">
    <div class="card__header">
      <div class="card__avatar">
        <img src="https://new-smiley.s3.eu-west-2.amazonaws.com/users/m_V96cBp1v3880372851.jpg">
      </div>
      <div class="card__info">
        <div><strong>Anica Nilise</strong> was interviewed for latest The Big Issue - Project</div>
        <div class="card__info-date">1 day ago at 12:15 PM GMT</div>
      </div>
    </div>
    <div class="card__content">
      <template v-if="type === 'video'">
        <div class="card__video">
          <iframe src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
        </div>
      </template>
      <template v-if="type === 'image'">
        <div class="card__image">
          <img :src="source">
        </div>
      </template>
      <template v-if="type === 'news'">
      </template>
    </div>
    <div class="card__footer">
      <div class="card__footer-column card__footer-column--actions">
        <button class="card__actions-button card__actions-button--like"><i class="fa fa-heart-o"></i></button>
        <button class="card__actions-button card__actions-button--donate" title="Donate"><i class="fa fa-money"></i></button>
      </div>
      <div class="card__footer-column card__footer-column--share">
        <ul class="social-share">
          <li class="social-share__item">
            <a :href="'test'"
               class="social-share__link social-share__link--facebook"
               target="_blank">
              <i class="fa fa-facebook"></i>
            </a>
          </li>
          <li class="social-share__item">
            <a :href="'test'"
               class="social-share__link social-share__link--instagram" target="_blank">
              <i class="fa fa-instagram"></i>
            </a>
          </li>
          <li class="social-share__item">
            <a :href="'test'"
               class="social-share__link social-share__link--linkedin" target="_blank">
              <i class="fa fa-linkedin"></i>
            </a>
          </li>
          <li class="social-share__item">
            <a :href="'test'"
               class="social-share__link social-share__link--twitter" target="_blank">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="card__footer-column card__footer-column--more">
        <div class="button">Read More</div>
      </div>
      <div class="card__footer-column card__footer-column--comments">2 Comments</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActivityCard",
  data() {
    return {}
  },
  props: {
    info: {
      type: Object,
      default: () => {
      },
    },
    type: {
      type: String,
      default: 'video',
    },
    source: {
      type: String,
      default: '',
    }
  }
}
</script>

<style lang="scss" scoped>
// TODO: Move to global
.social-share {
  display: inline-flex;

  &__item {
    margin: 0px .3rem;
  }

  &__link {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #fff !important;
    text-decoration: none !important;
    transition: background-color .2s, box-shadow .2s, transform .2s;

    &:active {
      transform: translate(1px, 1px);
    }

    &:hover {
      box-shadow: 0px 0px 6px rgba(0, 0, 0, .5);
    }

    &--facebook {
      background-color: #134BCE;

      &:hover {
        background-color: lighten(#134BCE, 15%);
      }
    }

    &--linkedin {
      background-color: #0A66C2;

      &:hover {
        background-color: lighten(#0A66C2, 15%);
      }
    }

    &--instagram {
      background-color: #E1306C;

      &:hover {
        background-color: darken(#E1306C, 15%);
      }
    }

    &--twitter {
      background-color: #15BCDE;

      &:hover {
        background-color: darken(#15BCDE, 15%);
      }
    }

    &--youtube {
      background-color: #E70F0F;

      &:hover {
        background-color: lighten(#E70F0F, 15%);
      }
    }
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

.card {
  border-radius: .5rem;
  box-shadow: 0px 3px 6px rgba(112, 112, 112, .3);
  border: 1px solid rgba(112, 112, 112, .3);
  padding: 1rem;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  &__header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  &__avatar {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 1.5rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    @include font-size(1.1rem);

    strong {
      font-weight: 700;
      font-family: "Gotham Bold";
    }

    &-date {
      @include font-size(.9rem);
    }
  }

  &__content {
    margin: 1rem -1rem;
  }

  &__video {
    width: 100%;
    height: 0px;
    padding-top: 56.25%;
    position: relative;

    iframe,
    video {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
    }
  }

  &__image {
    width: 100%;
    height: 0px;
    padding-top: 56.25%;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      object-fit: cover;
    }
  }

  &__footer {
    //display: flex;
    //justify-content: space-between;
    //align-items: center;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @include lgMax {
      grid-template-columns: repeat(2, 1fr);
    }

    @include smMax {
      grid-template-columns: 1fr;
      grid-gap: 1.5rem;
    }

    &-column {
      display: flex;
      align-items: center;

      @include lgMax {
        margin-top: 1.5rem;
      }
      @include smMax {
        margin-top: 0px;
      }

      &--actions {
        @include smMax {
          justify-content: center;
        }
      }

      &--share {
        @include lgMax {
          justify-content: flex-end;
        }
        @include smMax {
          justify-content: center;
        }
      }

      &--more {
        justify-content: center;

        @include lgMax {
          justify-content: flex-start;
        }
        @include smMax {
          justify-content: center;
        }
      }

      &--comments {
        justify-content: flex-end;
        @include smMax {
          justify-content: center;
        }
      }
    }
  }

  &__actions {
    &-button {
      border: none;
      background: #fff;
      transition: transform .2s, color .2s, background .2s;
      cursor: pointer;
      border-radius: .5rem;
      &:active {
        transform: translate(1px, 1px);
      }

      &:not(:last-child) {
        margin-right: .5rem;
      }

      &:hover {
        box-shadow: 0px 0px 2px rgba(255, 0, 0, .5);
      }

      &--donate {
        background-color: #0F9848;
        color: #fff;

        &:hover,
        &:active {
          background-color: darken(#0F9848, 10%);
        }
      }

      &--like {
        &:hover,
        &:active {
          background: #C11F2C;
          color: #fff;
        }
      }
    }
  }
}
</style>
