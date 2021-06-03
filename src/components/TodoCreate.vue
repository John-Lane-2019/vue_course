<template>
    <modal>
         <form class="app-form">
          <div class="form-control">
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
              rows="5"
              cols="30">
            </textarea>
          </div>
          <button
            @click="createTodo" 
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
      }
    }
  },
  methods: {
    createTodo() {
      console.log(this.form.title, this.form.description)
    }
  }
}
</script>

<style>

</style>