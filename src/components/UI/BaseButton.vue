<!--Styling Wrapper-->
<template>
  <!--mode props received will be the style class name in CSS. For example l'ets say props mode value is 'redBox' and we have a class in style that is redBox and it adds a red border.-->
  <button :type="type" :class="mode">
    <!--In slot will be placed the text content of the button.-->
    <slot></slot>
  </button>
</template>
<script>
export default {
  //Receiving props from ResoucrceItem.vue
  //type: type of button
  //mode: css class
  props: ['type', 'mode'],
};
</script>
<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>
