import React, { Component } from 'react';
import './test.css'; // Import CSS file for component styling

interface Todo {
  id: number;
  task: string;
  isCompleted: boolean;
}

interface TodoListState {
  todos: Todo[];
  inputValue: string;
}

class TodoList extends Component<{}, TodoListState> {
  state: TodoListState = {
    todos: [],
    inputValue: '',
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  handleAddTodo = () => {
    if (this.state.inputValue.trim() === '') return;

    const newTodo: Todo = {
      id: Date.now(),
      task: this.state.inputValue.trim(),
      isCompleted: false,
    };

    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
      inputValue: '',
    }));
  };

  toggleTodoCompletion = (id: number) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ),
    }));
  };

  removeTodo = (id: number) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  render() {
    return (
      <div className="todo-list-container">
        <h2>Todo List</h2>
        <div className="input-container">
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            placeholder="Add new todo..."
          />
          <button onClick={this.handleAddTodo}>Add Todo</button>
        </div>
        <ul className="todo-list">
          {this.state.todos.map((todo) => (
            <li key={todo.id} className={todo.isCompleted ? 'completed' : ''}>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => this.toggleTodoCompletion(todo.id)}
              />
              <span>{todo.task}</span>
              <button onClick={() => this.removeTodo(todo.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
