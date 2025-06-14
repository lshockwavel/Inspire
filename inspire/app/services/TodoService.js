


class TodoService {
  

    //WIP Will need to fill this out correctly
    async getTodos() {
    try {
      const res = await api.get('api/todos')
      AppState.todos = res.data
    } catch (error) {
      console.error('Error fetching todos:', error)
    }
  }

}

export const todoService = new TodoService();
