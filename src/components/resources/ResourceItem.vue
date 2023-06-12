<template>
  <base-card>
    <li>
      <header>
        <h3>{{ resource.title }}</h3>
        <!--Executing the function that deletes the item based on its id-->
        <!--The logic of deleteResource is in TheResources.vue-->
        <!--We used provide/inject to pass the function deleteResource from TheResources.vue to ResourceItem.vue-->
        <base-button mode="flat" @click="deleteResource(resource.id)"> Delete </base-button>
      </header>
      <p>{{ resource.description }}</p>
      <nav>
        <a :href="resource.link" target="_blank">View Resource</a>
      </nav>
    </li>
  </base-card>
</template>

<script>
export default {
  //Receiving props from StoredResources.vue
  props: ['resource'],
  //Provided from TheResources.vue
  inject:['deleteResource']
};
</script>
<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
