<!--Root Component-->
<template>
  <!--Sending props title to TheHeader.vue-->
  <TheHeader title="RememberMe" />
  <TheResources />
  <!--Passing/Sending props storedResources to component StoredResources.vue-->
</template>
<script>
import TheHeader from './components/resources/layouts/TheHeader.vue';
import TheResources from './components/resources/TheResources.vue';
export default {
  components: {
    TheHeader,
    TheResources,
  },
};
</script>
<!--Global Styles-->
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
