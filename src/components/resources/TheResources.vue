<template>
  <base-card>
    <!--When click selectedTab property changes value to the string we passed.-->
    <base-button
      @click="setSelectedTab('StoredResources')"
      :mode="storedResButtonMode"
    >
      Stored Resources
    </base-button>
    <base-button
      @click="setSelectedTab('AddResource')"
      :mode="addResButtonMode"
    >
      Add Resource
    </base-button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
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
      addResource: this.addResource,
      deleteResource: this.deleteResource
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
    //2. Creating a function that will receive the new resource data from AddResource.vue and creates and object of the new resources. We stablish we will receive 3 parameters: title, description and url.
    addResource(title, description, url) {
      const newResourceObj = {
        id: new Date().toDateString(), // Generating an id.
        title: title, //Second title is the data receive (what the user typed). title will be equal to what it receives.
        description: description, //""
        url: url, //""
      };
      // It then pushes it (unshift to have it on top of the list)
      this.storedResources.unshift(newResourceObj);
      // We go again to StoredResources
      this.selectedTab = 'StoredResources';
      //Rest of the logic in AddResource.vue
    },

    deleteResource(id) {
        //Getting the index in the array of the item we want to delete.
        //Using a filter implies rewritting storedResources and vue will keep using the old storedResources. So you have to update the existing one.
        const resIndex = this.storedResources.findIndex(res => res.id === id)
        this.storedResources.splice(resIndex, 1)
    },
  },
};
</script>
<style></style>
