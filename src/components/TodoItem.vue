<template>
  <div v-if="!editMode" class="todo-item">
    <div class="todo-item-content">
      <div class="todo-item-content-title">
        {{title}}
      </div>
      <div class="todo-item-content-description">
        {{description}}
      </div>
    </div>
    <button 
      @click="editMode = true" 
      class="app-button is-warning">Edit
    </button>
    <button 
      @click="deleteTodo" 
      class="app-button is-danger">Delete</button>
  </div>
  <div v-else class="todo-item">
    <form class="app-form">
      <div class="form-control">
        <label class="label">Title</label>
        <input
          v-model="todo.title" 
          class="form-input" 
          type="text"/>
      </div>
      <div class="form-control form-control-last">
        <label class="label">Description</label>
        <textarea
          v-model="todo.description" 
          class="form-input" 
          rows="5" 
          cols="30">
        </textarea>
      </div>
      <button 
        @click.prevent="editTodo"
        class="app-button is-warning">Update
      </button>
      <button 
        @click.prevent="editMode=false" 
        class="app-button is-danger">Cancel
      </button>
    </form>
  </div>
</template>
<script>
import store from '../assets/store'
export default {
  props: {
    _id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      editMode: false,
      todo: {
        _id: this._id,
        title : this.title,
        description : this.description
      }
    };
  },
  methods: {
    deleteTodo() {
      alert("Deleting todo.");
    },
    editTodo() {
      store.dispatch('updateTodos', {...this.todo})
      this.editMode = false
    },
  },
};
</script>
<style scoped>
.app-button {
  font-size: 15px;
}

.app-button.is-warning {
  margin-right: 5px;
}

/* .app-button.is-danger {
  margin-right: 5px;
} */
.todo-item {
  background-color: gray;
  min-height: 70px;
  margin: 10px;
  padding: 10px;
  color: white;
  border-radius: 5px;
  font-size: 23px;
}
.todo-item-content {
  margin-bottom: 10px;
}
.todo-item-content-title {
  font-size: 19px;
  font-weight: bold;
}
.todo-item-content-description {
  font-size: 19px;
}
</style>