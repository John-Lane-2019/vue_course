<template>
    <modal ref="modal">
         <form class="app-form">
          <div class="form-control form-control-last">
            <label class="label">Title</label>
            <input
              v-model="form.title" 
              class="form-input" 
              type="text"> <!--two-way binding-->
          </div>
          <div class="form-control">
            <label class="label">Description</label>
            <textarea 
              v-model="form.description" 
              class="form-input" 
              type="text"
              rows="2"
              cols="30">
            </textarea>
            <div class="app-error">
              <div class="form-error">
                {{formError}}
              </div>
            </div>
          </div>
          <button
            @click="submitForm" 
            type="button" 
            class="app-button is-primary">Confirm</button>
        </form> <!--default button type is "submit" which refreshes form -->
    </modal>
</template>
<script>
import Modal from "./Modal";
export default {
    components: {
        Modal
    },
    data() {
    return {
      form: {
        title: '',
        description: ''
      },
      formError: ''
    }
  },
  computed: {
    isFormValid(){
      return this.form.title.length >= 3 
        && this.form.description.length >=3 ? true: false;
    },
    modal() {
      return this.$refs.modal
    }
  },
  methods: {
    submitForm() {
      if (this.isFormValid) {
        this.formError = ''
        this.$emit('formSubmitted', {...this.form})//... creates new object passes new form object to avoid problems of passing by reference
        this.modal.close();
        this.resetForm();
      }else{
        this.formError = 'Title and description must be greater than 3 characters long.'
      }
    },
    resetForm() {
      this.form.title = '';
      this.form.description = '';
    }
  }
}
</script>
<style scoped>
  .form-error {
    margin: 10px 0px;
  }
</style>