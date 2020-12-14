<template>
  <section class="container breadcrumbs">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <template v-if="breadcrumbs.length > 0">
        <li v-for="(breadcrumb, index) in breadcrumbsWithTitle" :key="'breadcrumb-'+index">
          <template v-if="itemsCount !== index">
            <router-link :to="breadcrumb.path">{{ breadcrumb.meta.title }}</router-link>
          </template>
          <template v-else>
            <span>{{ breadcrumb.meta.title }}</span>
          </template>
        </li>
      </template>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: []
    };
  },
  computed: {
    itemsCount() {
      return this.breadcrumbsWithTitle.length - 1;
    },
    breadcrumbsWithTitle() {
      return this.breadcrumbs.filter(el => el.meta.title)
    }
  },
  mounted() {
    if (!this.custom) {
      this.breadcrumbs = this.$router.currentRoute.matched;
    } else {
      console.log('custom items', this.items);
      this.breadcrumbs = this.items;
    }
  },
  props: {
    custom: {
      default: false,
      type: Boolean
    },
    items: {
      default: () => ([]),
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
  margin-top: 24px;
  margin-bottom: 24px;

  li {
    display: inline-block;
    span {
      color: #B7B7B7 !important;
    }
    a {
      color: #B7B7B7 !important;
      &:hover {
        color: unset !important;
      }
    }
    &::after {
      content: '/';
      padding-left: 10px;
      padding-right: 10px;
      font-size: 12px;
      color: #B7B7B7 !important;
    }

    &:last-child {
      &::after {
        content: '';
      }
    }
  }

  a, span {
    color: #1a1a1a;
    font: 400 16px/21px "Muli", sans-serif;
  }
}
</style>