<template>
  <div 
    class="title-with-search"
    :class="[borderTop ? 'borderTop' : '']"
  >
    <h3
      :style="styleObject"
      class="title-with-search__title"
      :class="[hoverEffect ? 'hover-effect' : '']"
      v-html="title"
    ></h3>
    <div class="title-with-search__input-search-wrapper">
      <input
        v-if="withSearch"
        v-model="searchKeyword"
        @keyup.enter="$emit('search', searchKeyword)"
        :style="[withDropdown ? { 'margin-right': '1rem' } : {}]"
        class="title-with-search__search-input"
        :class="[searchExpandable ? 'expandable' : '']"
        type="text"
        :placeholder="searchText"
      />
      <div class="dropdown-wrapper" v-if="withDropdown">
        <VDropdown
          for-goals
          class="in-title-with-search"
          :options="dropdownOptions"
          :hovered="hovered"
          @mouseenter="hovered = true"
          @mouseleave="hovered = false"
          v-model="dropdownValue"
          @input="$emit('goalChange', dropdownValue)"
        ></VDropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { VDropdown } from "@/components/app";

export default {
  name: "BottomBorderedTitleWithSearch",
  components: {
    VDropdown,
  },
  props: {
    borderTop: {
      type: Boolean,
      default: false,
    },
    searchText: {
      type: String,
      default: "Search topics...",
    },
    titleClasses: {
      type: String,
      default: "",
    },
    title: {
      // SHOULD BE STRING HTML FOR V-HTML
      type: String,
    },
    titleFontSize: {
      type: Number,
      default: 0,
    },
    withSearch: {
      type: Boolean,
      default: true,
    },
    withDropdown: {
      type: Boolean,
      default: false,
    },
    dropdownOptions: {
      type: Array,
      default: () => [],
    },
    searchExpandable: {
      type: Boolean,
      default: false,
    },
    hoverEffect: {
      type: Boolean,
      default: false,
    },
    hoverColor: {
      type: String,
      default: "yellow",
    },
  },
  /*
   * DATA */
  data() {
    return {
      searchKeyword: "",
      dropdownValue: null,
      hovered: false,
    };
  },
  /*
   * COMPUTED */
  computed: {
    styleObject() {
      if (this.titleFontSize > 0) {
        return {
          "--color-hover": this.hoverColor,
          "font-size": `${this.titleFontSize}px`,
        };
      }
      return {
        "--color-hover": this.hoverColor,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.title-with-search {
  padding: 16px 0;
  border-bottom: 2px solid #ffe300;
  &.borderTop {
    padding: 0;
    border-bottom: none;
    border-top: 2px solid #ffe300;
    text-align: left;
    margin: 0;
    font-size: 1.3rem;
  }
  display: flex;
  margin: 30px 0 15px 0;
  justify-content: space-between;
  @include mdMax {
    display: block;
    text-align: center;
  }

  &__title {
    color: black;
    font-family: "Gotham Light", sans-serif;

    &::v-deep b {
      font-family: "Gotham Bold", sans-serif !important;
    }

    &.hover-effect {
      &:hover {
        color: var(--color-hover);
      }
    }
  }

  &__input-search-wrapper {
    display: flex;
    align-items: center;
    @include mdMax {
      justify-content: center;
    }
  }

  .title-with-search__search-input {
    width: 10rem;
    padding: 0.5rem 1rem;
    height: 1.9rem;
    border-radius: 2rem;
    font-size: 13px;
    color: #666666;
    background-image: url("/images/main/icon-search.svg");
    background-repeat: no-repeat;
    background-position: 95% center;
    background-size: 1rem 1rem;
    outline: 0;

    &.expandable {
      &:hover,
      &:focus-within {
        width: 34rem;
        @include lgMax {
          width: 20rem;
        }
        @include mdMax {
          width: 15rem;
        }
      }
    }
  }

  .dropdown-wrapper {
    width: 16rem;
    height: 2.9rem;
    color: #666666;

    .dropdown {
      height: 100%;

      &__icon {
        top: 14px;
      }
    }

    .dropdown__select {
      padding: 10px;
    }
  }
}
</style>
