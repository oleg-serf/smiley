<template>
  <div class="dropdown">
    <i class="dropdown__icon"></i>
    <select
        class="dropdown__select"
        :id="id"
        ref="select"
        @change="$emit('input', $event.target.value)"
    >
      <option v-if="forGoals" value="" disabled selected>Sort by UN Goals</option>
      <option
          v-for="(option, key) in options"
          :key="'dropdown-option-' + key"
          :value="forGoals ? option.id : option.value"
      >
        {{ forGoals ? (option.prefix < 10 ? '0' : '') + option.prefix + ': ' + option.name : option.text }}
      </option
      >
    </select>
  </div>
</template>

<script>
export default {
  name: "VDropdown",
  props: {
    id: {
      type: String,
      required: false,
    },
    options: {
      validator(s) {
        return s.every(
            (item) => (item.hasOwnProperty("text") || item.hasOwnProperty("name")) && (item.hasOwnProperty("value") || item.hasOwnProperty("prefix"))
        );
      },
      required: true,
    },
    forGoals: {
      type: Boolean,
      default: false
    },
    hovered: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    hovered: {
      handler(newVal) {
        if (newVal) {
          this.$refs.select.focus().click();
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  width: 100%;
  height: 60px;
  border: 1px solid #aca9a9;
  border-radius: 5px;
  transition: 125ms ease;
  font: {
    family: "Gotham Light";
    size: 18px;
  }

  &:hover {
    border-color: #0e0d0d;
  }

  &__icon {
    position: absolute;
    right: 16px;
    top: 18px;
    width: 14px;
    height: 14px;
    border: {
      right: 2px solid #707070;
      bottom: 2px solid #707070;
    }
    transform: rotate(45deg);
  }

  &__select {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    padding: 16px;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &::-ms-expand {
      display: none;
    }
  }

  &.in-title-with-search {
    .dropdown__icon {
      top: 14px;
    }

    .dropdown__select {
      padding: 10px;
    }
  }
}
</style>
