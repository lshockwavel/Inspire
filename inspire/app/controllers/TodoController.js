import { AppState } from "../AppState.js";
import { todoService } from "../services/TodoService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";


export class TodoController {
    constructor() {
        console.log('Todo Controller initialized');

        AppState.on('user', this.getTodos.bind(this));
        AppState.on('todos', this.drawTodos.bind(this)); // Listen for todos state changes
    }

    async getTodos() {
        console.log("Fetching todos in TodoController");
        try {
            // Assuming there's a service to fetch todos
            await todoService.getTodos();
        } catch (error) {
            console.error("Error fetching todos:", error);
            throw error;
        }
    }

    async addTodo(event) {
        event.preventDefault(); // Prevent form submission
        const form = event.target;
        const todoData = getFormData(form);
        console.log("Adding todo in TodoController", todoData);
        try {
            await todoService.addTodo(todoData);
            form.reset(); // Reset the form after adding a todo
        } catch (error) {
            console.error("Error adding todo:", error);
            throw error;
        }
    }


    async toggleTodo(todoId) {
        console.log("Toggling todo completion in TodoController", todoId);
        try {
            await todoService.toggleTodo(todoId);
        } catch (error) {
            console.error("Error toggling todo completion:", error);
            throw error;
        }
    }

    async deleteTodo(todoId) {
        console.log("Deleting todo in TodoController", todoId);
        const confirmation = confirm("Are you sure you want to delete this todo?");
        if (!confirmation) {
            console.log("Todo deletion cancelled");
            return;
        }
        try {
            await todoService.deleteTodo(todoId);
        } catch (error) {
            console.error("Error deleting todo:", error);
            throw error;
        }
    }

    drawTodos() {
        const todos = AppState.todos;
        let todosHtml = '';
        todos.forEach(todo => {
            todosHtml += todo.todoTemplate;
        });

        setHTML('todos', todosHtml);

        const todoCount = todos.filter(todo => !todo.completed).length;

        document.getElementById('todo-count').innerText = todoCount;
    }
}