<template>
  <v-form :class="{
    'd-flex align-center justify-center': true,
    'flex-column': $vuetify.breakpoint.xs,
  }">
    <div v-for="(input, index) in inputs" :key="index" class="input-outer-box">
    <v-text-field
      :class="{ 
        'inp': true, 
        'pb-4': $vuetify.breakpoint.xs,
        'pr-4': $vuetify.breakpoint.mdAndUp,
        'pr-5': $vuetify.breakpoint.smAndUp,
      }" 
      color="black" 
      v-model="input.value" 
      :label="input.label" 
      outlined 
      clearable
      hide-details
    />
    </div>
    <div class="btn-outer-box">
      <v-btn 
        depressed
        color="#ffe61f" 
        class="pl-14 pr-14 text-capitalize"
        style="height: 55px;"
        @click="subscribe()"
      >
      Subscribe
      </v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    inputs: [
      { name: 'name', label: 'Your Name..', value: '', showOnMobile: false },
      { name: 'email', label: 'Your Email..', value: '', showOnMobile: true }
    ]
  }),
  methods: {
      subscribe() {}
    }
  }
</script>

<style lang="scss" scoped>
  .rounded-button {
    border-radius: 25px;
    outline: none !important;
  }
  .v-text-field__slot {
    label {
      max-width: 100% !important;
      left: 0;
      text-align: center;
      right: 0 !important;
      font-weight: 800;
      color: #111;
    }
    input {
      border: none;
     text-align: center !important;
     }
  }
  .v-input {
    // &.v-input--is-focused {
    // }
    .v-input__append-inner {
      display: none !important;
    }
  }
  .inp {
    border-radius: 12px;
  }
  .input-outer-box {
    width: 100%;
  }
  .btn-outer-box {
    width: 100%;
    button {
      border-radius: 40px;
      width: 100%;
      font-size: 18px !important;
      font-weight: 600;
    }
  }
</style>