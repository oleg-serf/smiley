<template>
  <button class="v-button" :class="[color, shape, size]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "VButton",
  props: {
    color: {
      validator(s) {
        return ["yellow"].includes(s);
      },
      default: "yellow",
    },
    shape: {
      validator(s) {
        return ["round", "square"].includes(s);
      },
      default: "square",
    },
    size: {
      validator(s) {
        return ["small", "medium"].includes(s);
      },
      default: "medium",
    },
  },
};
</script>

<style lang="scss" scoped>
.v-button {
  cursor: pointer;
  border: none;
  box-shadow: 0 3px 6px rgba(#000, 0.16);
  font-family: "Gotham Book";
  font-size: 25px;
  line-height: 38px;
  padding: 0 20px;
  transition: 175ms ease;

  &:active {
    box-shadow: 0 3px 3px rgba(#000, 0);
  }

  &:focus {
    outline: none;
  }
}

.yellow {
  background: #ffe300;

  &:hover {
    background: #fffb00;
  }

  &:active {
    background: #ffd000;
  }
}

.round {
  border-radius: 50px;
}

.medium {
  height: 60px;
}
</style>
