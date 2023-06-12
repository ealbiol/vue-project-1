<template>
  <base-card>
    <form @submit.prevent="handleSubmit">
      <div class="form-control">
        <label for="title">Title</label>
        <input v-model="inputTitle" id="title" name="title" type="text" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          v-model="textareaDescription"
          name="description"
          id="description"
          cols="30"
          rows="3"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input v-model="inputLink" id="link" name="link" type="url" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
  <base-dialog v-if="errorDialog" title="The following inputs are empty:" @close="closeDialog">
    <template v-slot:header>
      <div>{{ title }}</div>
      <ul>
        <li v-for="(emptyField, index) in emptyFields" :key="index">
          {{ emptyField }}
        </li>
      </ul>
      <base-button @click="closeDialog">Close</base-button>
    </template>
  </base-dialog>
</template>
<script>
export default {
  data() {
    return {
      inputTitle: null,
      textareaDescription: null,
      inputLink: null,
      errorDialog: false,
      emptyFields: [],
    };
  },
  //Receiving by provide the function addResource
  inject: ['addResource'],
  watch: {
    // Best way to add console.log()'s:
    inputTitle(newTitle) {
      console.log('inputTitle:', newTitle);
    },
    textareaDescription(newDescription) {
      console.log('textareaDescription:', newDescription);
    },
    inputLink(newLink) {
      console.log('inputLink:', newLink);
    },
  },
  methods: {
    //trim doesn't allow empty spaces
    // A function in which we check if each field is empty.
    // If it's empty we push the title of the field into the array emptyFields.
    //Then we store the properties of the array to the propert emptyFields and we do a v-for in error-alert.
    getEmptyFields() {
      const emptyFields = [];
      if (this.inputTitle === null || this.inputTitle.trim() === '') {
        emptyFields.push('Title');
      }
      if (
        this.textareaDescription === null ||
        this.textareaDescription.trim() === ''
      ) {
        emptyFields.push('Description');
      }
      if (this.inputLink === null || this.inputLink.trim() === '') {
        emptyFields.push('Link');
      }
      return (this.emptyFields = emptyFields);
    },

    // 1. Collecting the form input values.
    // 2. In TheResources.vue
    handleSubmit() {
      const inputTitle = this.inputTitle;
      const textareaDescription = this.textareaDescription;
      const inputLink = this.inputLink;

      this.getEmptyFields();
      //If emptyFields array is truthy then there are fields empty as there is content in the array.
      if (this.emptyFields.length) {
        this.errorDialog = true;
      } else {
        //3. Calling addResource function giving properties
        this.addResource(inputTitle, textareaDescription, inputLink);
      }

      //The rest of the logic is in TheResources.vue
    },
    closeDialog(){
      this.errorDialog = false
    }
  },
};
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>

<!--Add Resource Explanation
- 1. AddResource.vue: In the function handleSubmit we save in const's the inputs from the form: title, description and link values that the user entered. handleSubmit added in preventDefault.
- 2. TheResources.vue: We create the function addResource that in addResource.vue receives the data the user entered: title, description and link.
  In that function we:     
    - Collect data in an object: newResourceObj. We create and object because storedResources is an array of objects.
    - We unshift (like push but to the top) this object to the storedResources.
    - We change the value of selectedTab to go back to StoredResources and see the new resource.
- 3. AddResource.vue: We call the addResource function.
    - This function is created in TheResources and we want to call it in AddResource. To call it there we have to use provide and inject.
-->
