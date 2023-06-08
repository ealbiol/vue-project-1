<!--Root Component-->
<template>
    <!--Sending props title to TheHeader.vue-->
    <TheHeader title="RememberMe"/>
    <!--Passing/Sending props storedResources to component StoredResources.vue-->
    <StoredResources :storedResources="storedResources"/>
</template>
<script>
import StoredResources from './components/resources/StoredResources.vue';
import TheHeader from './components/resources/layouts/TheHeader.vue';
export default {
  components: {
    StoredResources,
    TheHeader,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'http://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'http://google.com',
        },
        {
          id: 'chatgpt',
          title: 'Chat GPT',
          description: 'Learn to ask...',
          link: 'https://chat.openai.com/',
        },
      ],
    };
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
