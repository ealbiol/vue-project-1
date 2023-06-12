<template>
  <ul>
    <!--Passing/Sending props storedResources to component ResourceItem.vue-->
    <ResourceItem
      :resource="resource"
      v-for="resource in storedResources"
      :key="resource.id"
    />
  </ul>
</template>

<script>
import ResourceItem from './ResourceItem.vue';

export default {
  // Injecting props from TheResources.vue (using Provide)
  inject: ['storedResources'],
  components: {
    ResourceItem,
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
