<template>
  <div class="paging-buttons">
    <div class="paging-buttons__text">
      {{ text }}
    </div>
    <div class="paging-buttons__buttons">
      <div class="paging-buttons__buttons-prev">
        <div class="paging-buttons__buttons__triangle paging-buttons__buttons__triangle-left"></div>
      </div>
      <div class="paging-buttons__buttons-next">
        <div class="paging-buttons__buttons__triangle paging-buttons__buttons__triangle-right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TriangleNextPrevButtons",
  /*
  * PROPS */
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.paging-buttons {
  padding: .2rem .1rem .2rem .3rem;
  border: 2px solid #f3f3f3;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: fit-content;

  &__text {
    font-size: 15px;
    font-family: "Gotham Book", sans-serif;
    margin-right: .7rem;
  }

  &__buttons {
    display: flex;

    &-prev, &-next {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:first-child {
        margin-right: .7rem;
      }

      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: #000000;
    }

    &__triangle {
      width: 0;
      height: 0;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;

      &-left {
        border-right: 14px solid white;
        margin-right: 3px;
      }

      &-right {
        border-left: 14px solid white;
        margin-left: 3px;
      }
    }
  }
}
</style>
