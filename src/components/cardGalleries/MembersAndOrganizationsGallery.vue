<template>
  <div class="projects-gallery__container">
    <template v-if="withSlider">
      <ButtonArrow
          :id="'news-gallery-button-prev-' + id"
          class="news-gallery-button news-gallery-button-prev"
      />
      <Swiper class="news-gallery" :key="key" :options="options">
        <SwiperSlide v-for="el in dataArray" :key="el.slug">
          <member-card
              v-if="type === 'member'"
              class="news-gallery__card"
              :key="'member-'+el.slug"
              :button-text="buttonText"
              :member="el"/>

          <organisation-card
              v-else
              class="news-gallery__card"
              :key="el.slug+'-org-archive'"
              :organisation="el"/>
        </SwiperSlide>
      </Swiper>
      <ButtonArrow
          :id="'news-gallery-button-next-' + id"
          class="news-gallery-button news-gallery-button-next"
      />
    </template>
    <section v-else class="section" id="section-news">
      <div class="grid grid--news">
        <member-card
            v-if="type === 'member'"
            class="news-gallery__card"
            v-for="member in dataArray"
            :key="'member-'+member.slug"
            :button-text="buttonText"
            :member="member"/>

        <organisation-card
            v-else
            class="news-gallery__card"
            v-for="(organisation,index) in dataArray"
            :key="organisation.slug+index+'-org-archive'"
            :organisation="organisation"/>
      </div>
    </section>
  </div>
</template>

<script>
import {ButtonArrow} from "@/components/buttons";
import MemberCard from "@/components/cards/MemberCard";
import OrganisationCard from "@/components/cards/OrganisationCard";

export default {
  name: "MembersAndOrganizationsGallery",
  props: {
    dataArray: {
      type: Array,
      required: true,
    },
    withSlider: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      default: 'View Project'
    },
    type: {
      type: String,
      default: 'member'
    }
  },
  components: {
    MemberCard,
    OrganisationCard,
    ButtonArrow,
  },
  data() {
    return {
      id: 0,
      key: 0,
      options: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 25,
        // loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: "",
          prevEl: "",
        },
        breakpoints: {
          900: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 40,
          },
        },
      },
    };
  },
  created() {
    this.id = this._uid;
    this.options.navigation = {
      nextEl: `#news-gallery-button-next-${this.id}`,
      prevEl: `#news-gallery-button-prev-${this.id}`,
    };
  },
};
</script>

<style lang="scss" scoped>
.projects-gallery__container {
  position: relative;
}

.grid {
  &--news {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);

    @include xlMax {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mdMax {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}

.news-gallery {
  padding: 10px;
  .swiper-slide {
    height: unset;
  }
}

.news-gallery-button {
  position: absolute;
  cursor: pointer;
  z-index: 5;
  top: 50%;
  transform: translate(0, -49%);
}

.news-gallery-button-prev {
  @include custom-max-width(1600px) {
    left: -100px;
    top: 50%;
    opacity: 0.8;
  }
  transform: translate(0, -49%);
  left: -80px;
}

.news-gallery-button-next {
  @include custom-max-width(1600px) {
    right: -100px;
    top: 50%;
    opacity: 0.8;
  }

  right: -80px;
  transform: translate(0, -53%) rotate(180deg);
}

</style>
