<template>
  <div id="app">
    <div class="todo-wrapper">
        <div class="todo-container">
          <todo-list :todos="todos"/>
          <div class="todo-create-btn-container">
             <todo-create @formSubmitted="createTodo"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
export default {
  name: 'app',
  components: {
    TodoList,
    TodoCreate
  },
  data() {
    return {
      todos: [
        {
          _id: '1',
          title: 'Walk the dog',
          description: 'Go to the forest near the zoo'
        },
        {
          _id: '2',
          title: 'Buy bread',
          description: 'Whole grain bread would be good'
        },
        {
          _id: '3',
          title: 'Learn Programming',
          description: 'Preferably Tomorrow!'
        }
      ]
    }
  },
  methods: {
    createTodo(todo){
    this.todos.push(todo)
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border-radius: 5px;
  text-align: left;
}
.app-error{
    color: #ff1212;
  }
.app-button {
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #795899;
  color: white;
  font-weight: bold;
}

/* .app-form.label {
  display: block;
  font-size: 18px;
  font-weight: bold;
} */

.label {
  display: block;
  font-size: 18px;
  font-weight: bold;
}

.form-input{
  padding: 10px;
  font-size: 17px;
}

.form-control {
  margin-bottom: 10px;
}

.form-control-last {
  margin-bottom: 0;
}
.is-primary {
  background: green !important;
}
.is-warning {
  background-color: orange;
}
.is-danger {
  background-color: red;
}
.app-button:hover {
  cursor: pointer;
}
.todo-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}
.todo-container{
  display:flex;
  flex-direction: column;
  width: 400px;
  min-height: 400px;
  background-color: #ededed;
  /* justify-content: center; */
  border-radius: 5px;
}
.todo-create-btn-container {
  margin: 10px;
}


</style>
