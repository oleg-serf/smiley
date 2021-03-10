<template>
  <div class="dropdown">
    <i class="dropdown__icon"></i>
    <!-- <select
        class="dropdown__select"
        :id="id"
        ref="select"
        @change="$emit('input', $event.target.value)"
    >
      <option v-if="forGoals" value="" disabled selected>Sort by UN Goals</option>
      <option
          v-for="(option, key) in options"
          :key="'dropdown-option-' + key"
          :value="forGoals ? option.slug : option.value"
      >
        {{ forGoals ? (option.prefix < 10 ? '0' : '') + option.prefix + ': ' + option.name : option.text }}
      </option
      >
    </select> -->
    <div class="custom-select" @blur="open = false">
      <div class="selected" :id="id" :class="{ open: open }" @click="open = !open">
        {{ selected }}
      </div>
      <div class="items" :class="{ selectHide: !open }">
        <div
          v-for="(option, i) of options"
          :key="i"
          @click="
            selected = forGoals ? option.slug : option.value;
            open = false;
            $emit('input', forGoals ? option.slug : option.value);
          "
        >
          {{ forGoals ? (option.prefix < 10 ? '0' : '') + option.prefix + ': ' + option.name : option.text }}
        </div>
      </div>
    </div>
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
  },
  data() {
    return {
      selected: this.forGoals
        ? "Sort by UN Goals"
        : this.options.length > 0 ? this.options[0].value : null,
      open: false,
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
    border: none;
    .dropdown__icon {
      top: 14px;
    }

    .dropdown__select {
      padding: 10px;
      option {
        max-width: 100px;
      }
    }
  }

  .custom-select {
    position: relative;
    width: 100%;
    text-align: left;
    outline: none;
    height: 47px;
    line-height: 47px;
    border: none;
  }

  .custom-select .selected {
    background-color: #fff;
    border-radius: 6px;
    border: 1px solid #666666;
    color: #000;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
  }

  .custom-select .selected.open {
    border: 1px solid #ad8225;
    border-radius: 6px 6px 0px 0px;
  }

  .custom-select .selected:after {
    position: absolute;
    content: "";
    top: 22px;
    right: 1em;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-color: #000 transparent transparent transparent;
  }

  .custom-select .items {
    color: #fff;
    border-radius: 0px 0px 6px 6px;
    overflow: auto;
    white-space: nowrap;
    height: 400px;
    border-right: 1px solid #ad8225;
    border-left: 1px solid #ad8225;
    border-bottom: 1px solid #ad8225;
    position: absolute;
    background-color: #ffffff;
    left: 0;
    right: 0;
    z-index: 1000;
  }

  .custom-select .items div {
    color: #000;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
  }

  .custom-select .items div:hover {
    background-color: #8137f9;
  }

  .selectHide {
    display: none;
  }

}
</style>
