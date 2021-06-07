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
    }
  }
}

store.dispatch = function(action, payload){
  if (!this.actions[action]) {
    console.log('action: ',action)
    throw new Error(`Action ${action} is not defined in the store.`)
  }
  return this.actions[action](this.state, payload)
}

export default store