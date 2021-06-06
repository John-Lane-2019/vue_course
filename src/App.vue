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
import store from './assets/store'
export default {
  name: 'app',
  components: {
    TodoList,
    TodoCreate,
  },
  data(){
    return {
      todos: store.state.todos
    }
  },
  methods: {
    createTodo(todo){
    store.createTodo(todo)//don't put store under components. It's not a component.
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
