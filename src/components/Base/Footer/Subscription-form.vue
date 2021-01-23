<template>
  <v-form :class="{
    'd-flex align-center justify-center': true,
    'flex-column': $vuetify.breakpoint.xs,
  }">
    <div v-for="(input, index) in inputs" :key="index">
    <v-text-field
      :class="{ 
        'inp': true, 
        'pb-4': $vuetify.breakpoint.xs,
        'pr-10': $vuetify.breakpoint.mdAndUp,
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
    <v-btn 
      elevation="1" 
      color="#ffe61f" 
      class="rounded-button pl-14 pr-14"
      style="height: 55px;"
      @click="subscribe()"
    >
    Subscribe
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    inputs: [
      { name: 'name', label: 'Your Name', value: '', showOnMobile: false },
      { name: 'email', label: 'Your Email', value: '', showOnMobile: true }
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
  .v-text-field__slot > input {
    border: none;
  }
  .inp {
    border-radius: 12px;
  }
</style>