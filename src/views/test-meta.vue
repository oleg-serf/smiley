<template>
  <div>
    <h1>Testing Test</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</template>

<script>
  export default {
      name: 'MetaTest',
      data(){
          return {

          }
      },
      metaInfo: {
          // if no subcomponents specify a metaInfo.title, this title will be used
          title: 'Default Title',
          // all titles will be injected into this template
          titleTemplate: '%s | My Awesome Webapp',
          meta: [
              {name: "og:title", content: "DescriptionTest"},
              {name: "og:site_name", content: "SmileyMovement"},
              {name: "og:url", content: "https://smileymovement.org/test-meta"},
              {name: "og:image", content: "https://smileymovement.org/img/banner-sample.jpg"},
              {name: "og:image:width", content: 1130},
              {name: "og:image:height", content: 310},
              {name: "og:description", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
          ]
      },
  }
</script>