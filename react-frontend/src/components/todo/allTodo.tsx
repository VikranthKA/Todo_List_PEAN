import React, { useState } from 'react';
import { useTodos } from '../../context/Todo/TodoContext';

const AllTodo: React.FC = () => {
  const { todos, dispatch } = useTodos();
  const [todo, setTodo] = useState({
    title: '',
    description: ''
  });

  console.log(todos)

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.title && todo.description) {
      dispatch({
        type: 'ADD_TODO',
        payload: {
          id:Number(new Date()),
          title: todo.title,
          description: todo.description,
          completed: false,
        }
      });
      setTodo({
        title: '',
        description: ''
      });
    }
  };

  const handleToggleTodo = (id: number) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const handleRemoveTodo = (id: number) => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };

  const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value
    });
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={todo.title}
          onChange={handleTodoChange}
          name="title"
          placeholder="Title"
          required
        />
        <input
          type="text"
          value={todo.description}
          onChange={handleTodoChange}
          name="description"
          placeholder="Description"
          required
        />
        <button type="submit">Create Todo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <strong>{todo.title}</strong>: {todo.description}
            <button onClick={() => handleToggleTodo(todo.id)}>Toggle</button>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTodo;
