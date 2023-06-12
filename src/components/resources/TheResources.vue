<template>
  <base-card>
    <!--When click selectedTab property changes value to the string we passed.-->
    <base-button
      @click="setSelectedTab('StoredResources')"
      :mode="storedResButtonMode"
    >
      Stored AddResources
    </base-button>
    <base-button
      @click="setSelectedTab('AddResource')"
      :mode="addResButtonMode"
    >
      Add Resource
    </base-button>
  </base-card>
  <component :is="selectedTab"></component>
</template>
<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      //selectedTab initial value is StoredResources which will render StoredResources Component.
      selectedTab: 'StoredResources',
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
  //Passing/Providing props to any child or sibiling component.
  // Child receives it by inject.
  provide() {
    return {
      storedResources: this.storedResources,
    };
  },
  // selectedTab is equal to the string passed through click event.
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'StoredResources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'AddResource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
<style></style>
