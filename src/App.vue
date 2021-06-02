<template>
  <div id="app">
    <div class="todo-wrapper">
        <div class="todo-container">
          <todo-list></todo-list>
        </div>
    </div>
  </div>
</template>

<script>

import  TodoList  from "./components/TodoList";
export default {
  name: 'app',
  created(){

  },
  components: {
    TodoList
    
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
  width: 400px;
  min-height: 400px;
  background-color: #ededed;
  justify-content: center;
  
}


</style>
