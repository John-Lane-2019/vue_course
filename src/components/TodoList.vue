<template>
    <div class="todo-list">
        <todo-item />
        <todo-item />
        <todo-item />
  </div>
</template>

<script>
import  TodoItem  from "./TodoItem";
export default {
    components:{
        TodoItem
    },
}
</script>