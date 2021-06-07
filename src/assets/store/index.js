import Vue from 'vue'
const store = {
  state: {
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
  },
  actions: {
    createTodo(state, todo){
    todo._id = Math.random().toString(36).substr(2 ,7)
    state.todos.push(todo)
    },
    updateTodos(state, todoToUpdate){
      const index = state.todos.findIndex((todo) => {
      return todo._id === todoToUpdate._id
    })
    Vue.set(state.todos, index, todoToUpdate)//setter for a Vue instance property
    state.todos[index] = todoToUpdate
  }
}
}
store.dispatch = function(action, payload){//receives an action 'createTodo' from App.vue, and a payload todo
  if (!this.actions[action]) {//if there's no action 'createTodo' throw an error
    console.log('action: ',action)
    throw new Error(`Action ${action} is not defined in the store.`)
  }
  return this.actions[action](this.state, payload)
  /*returns the createTodo function of the actions property (notice key-value syntax)
    which takes 'state' and a todo as arguments. dispatch() delegates the function call
    which is a necessary feature of larger apps.*/
}

export default store