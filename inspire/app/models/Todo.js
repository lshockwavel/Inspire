

export class Todo {
    constructor(data) {
        this.id = data.id;
        this.completed = data.completed || false; // Default to false if not provided
        this.description = data.description || ''; // Default to empty string if not provided
        this.creatorId = data.creatorId || ''; // Default to empty string if not provided
        this.createdAt = data.createdAt || new Date().toISOString(); // Default to current date if not provided
        this.updatedAt = data.updatedAt || new Date().toISOString(); // Default to current date if not provided
    }

    get todoTemplate() {
        return /*html*/`
        <li class="list-group-item d-flex justify-content-between align-items-center">
              <input type="checkbox" ${this.completed ? 'checked' : ''} onclick="app.TodoController.toggleTodo('${this.id}')" class="form-check-input me-2">
              <span>${this.description}</span>
              <button class="btn btn-danger btn-sm" onclick="app.TodoController.deleteTodo('${this.id}')">Delete</button>
        </li>
        `;
    }

    get createTodoTemplate() {
        return /*html*/`
        <form onsubmit="app.TodoController.createTodo(event)">
            <div class="form-group">
                <label for="description">To-Do Description:</label>
                <input type="text" class="form-control" name="description" required placeholder="Enter your to-do item">
            </div>
            <button type="submit" class="btn btn-primary mt-2">Add To-Do</button>
        </form>
        `;
    }
}