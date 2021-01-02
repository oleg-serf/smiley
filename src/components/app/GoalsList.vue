<template>
  <ul class="goals-list">
    <li v-for="goal in goals" class="goals-list__item">
      <router-link
          class="goals-list__link"
          :to="{name: 'news-category-item', params: {slug: descriptions[goal].slug}}"
          :title="descriptions[goal].name">
        <i class="icon-goal icon-fo" :class="'icon-fo-un_' + goal"></i>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "GoalsList",
  data() {
    return {
      descriptions: {
        1: {
          name: 'No Poverty',
          slug: 'no-poverty',
        },
        2: {
          name: 'Zero Hunger',
          slug: 'zero-hunger',
        },
        3: {
          name: 'Good Health and Well-Being',
          slug: 'good-health-and-well-being',
        },
        4: {
          name: 'Quality Education',
          slug: 'quality-education',
        },
        5: {
          name: 'Gender Equality',
          slug: 'gender-equality',
        },
        6: {
          name: 'Clean Water and Sanitation',
          slug: 'clean-water-and-sanitation',
        },
        7: {
          name: 'Affordable and Clean Energy',
          slug: 'affordable-and-clean-energy',
        },
        8: {
          name: 'Decent Work and Economic Growth',
          slug: 'decent-work-and-economic-growth',
        },
        9: {
          name: 'Industry, Innovation and Infrastructure',
          slug: 'industry-innovation-and-infrastructure',
        },
        10: {
          name: 'Reduced Inequalities',
          slug: 'reduced-inequalities',
        },
        11: {
          name: 'Sustainable Cities and Communities',
          slug: 'sustainable-cities-and-communities',
        },
        12: {
          name: 'Responsible Consumption and Production',
          slug: 'responsible-consumption-and-production',
        },
        13: {
          name: 'Climate Action',
          slug: 'climate-action',
        },
        14: {
          name: 'Life Below Water',
          slug: 'life-below-water',
        },
        15: {
          name: 'Life on Land',
          slug: 'life-on-land',
        },
        16: {
          name: 'Peace, Justice and Strong Institutions',
          slug: 'peace-justice-and-strong-institutions',
        },
        17: {
          name: 'Partnerships for the Goals',
          slug: 'partnerships-for-the-goals',
        },
      }
    }
  },
  props: {
    goals: {
      type: Array,
      default: () => [],
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.goals-list {
  display: flex;
  flex-wrap: wrap;

  &__item {
    margin-right: .5rem;
    margin-bottom: .25rem;
    margin-top: .25rem;
    border-radius: 50%;
    transition: box-shadow .2s, transform .2s;

    &:hover {
      box-shadow: 0px 0px 6px rgba(0, 0, 0, .5);
    }

    &:active {
      transform: translate(1px, 1px);
    }
  }

  &__link {
    text-decoration: none !important;
    color: #fff !important;
  }
}
</style>
