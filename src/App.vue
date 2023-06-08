<!--Root Component-->
<template>
  <ul>
    <!--Passing props to RescourceItem : :resource="resource"-->
    <ResourceItem
      :resource="resource"
      v-for="resource in storedResources"
      :key="resource.id"
    />
  </ul>
</template>
<script>
import ResourceItem from './components/resources/ResourceItem.vue';

export default {
  components: {
    ResourceItem,
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
