import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
import { api } from "./AxiosService.js";



class TodoService {
  

    //WIP Will need to fill this out correctly
    async getTodos() {
    try {
      const response = await api.get('api/todos')
      AppState.todos = response.data.map(todo => new Todo(todo))
      console.log('Todos fetched successfully:', AppState.todos)
    } catch (error) {
      console.error('Error fetching todos:', error)
    }
  }

  async addTodo(todoData) {
    todoData.completed = false; // Ensure completed is set to false by default
    console.log('Adding todo with data:', todoData)
    try {
      const response = await api.post('api/todos', todoData)
      const newTodo = new Todo(response.data)
      AppState.todos.push(newTodo)
      console.log('Todo added successfully:', newTodo)
    } catch (error) {
      console.error('Error adding todo:', error)
    }
  }

  async toggleTodo(todoId) {
    try {
      const todo = AppState.todos.find(t => t.id === todoId)
      if (!todo) throw new Error('Todo not found')

      todo.completed = !todo.completed
      const response = await api.put(`api/todos/${todoId}`, todo)
      console.log('Todo completion toggled successfully:', response.data)
      AppState.emit('todos'); // Emit an event to update the UI

    } catch (error) {
      console.error('Error toggling todo completion:', error);
    }
  }

  async deleteTodo(todoId) {
    try {
      await api.delete(`api/todos/${todoId}`)
      AppState.todos = AppState.todos.filter(t => t.id !== todoId)
      console.log('Todo deleted successfully:', todoId)
    } catch (error) {
      console.error('Error deleting todo:', error)
    }
  }

  async getTodoById(todoId) {
    try {
      const response = await api.get(`api/todos/${todoId}`)
      const todo = new Todo(response.data)
      console.log('Todo fetched successfully:', todo)
      return todo
    } catch (error) {
      console.error('Error fetching todo by ID:', error)
      throw error
    }
  }

}

export const todoService = new TodoService();
