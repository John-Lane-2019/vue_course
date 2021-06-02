<template>
  <div id="app">
    <div class="todo-wrapper">
        <div class="todo-container">
          <todo-list :todos="todos"/>
          <div class="todo-create-btn-container">
          <div class="app-button">
            Create
          </div>
        </div>
      </div>
    </div>
    <modal/>
  </div>
</template>
<script>
import TodoList from "./components/TodoList";
import Modal from "./components/Modal"
export default {
  name: 'app',
  created(){

  },
  components: {
    TodoList,
    Modal
    
  },
  data() {
    return {
      todos: [
        {
          _id: '1',
          title: 'Walk the dog',
          description: 'Go to forest near the zoo'
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
  justify-content: center;
  
}

.todo-create-btn-container {
  margin: 10px;
}

.app-button {
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #795899;
  color: white;
  font-weight: bold;
}

.app-button:hover {
  cursor: pointer;
}

</style>
