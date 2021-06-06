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
  createTodo(todo){
    todo._id = Math.random().toString(36).substr(2 ,7)
    this.state.todos.push(todo)
  }
}

export default store