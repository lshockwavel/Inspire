

export class Image {
    constructor(data) {
        this.id = data.id;
        this.completed = data.completed || false; // Default to false if not provided
        this.description = data.description || ''; // Default to empty string if not provided
        this.creatorId = data.creatorId || ''; // Default to empty string if not provided
        this.createdAt = data.createdAt || new Date().toISOString(); // Default to current date if not provided
        this.updatedAt = data.updatedAt || new Date().toISOString(); // Default to current date if not provided
    }

    get toDoTemplate() {
        return /*html*/`
        <div class="todo-item">
            <input type="checkbox" ${this.completed ? 'checked' : ''} onclick="app.TodoController.toggleCompletion('${this.id}')">
            <span>${this.description}</span>
            <button class="btn btn-danger" onclick="app.TodoController.deleteTodo('${this.id}')">Delete</button>
        </div>
        `;
    }

    get createToDoTemplate() {
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