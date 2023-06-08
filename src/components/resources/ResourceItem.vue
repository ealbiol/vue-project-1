<template>
  <li>
    <div>
      <header>
        <h3>{{ resource.title }}</h3>
        <button>Delete</button>
      </header>
    </div>
    <p>{{ resource.description }}</p>
    <nav>
      <a :href="resource.link" target="_blank">View Resource</a>
    </nav>
  </li>
</template>

<script>
export default {
  //Receiving props from App.vue
  props: ['resource'],
};
</script>
<style></style>
