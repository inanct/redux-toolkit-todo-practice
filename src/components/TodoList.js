import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, selectedTodo } from '../redux/todoSlice';

const TodoList = () => {
    const todoList = useSelector(state => state.todos.todoList);
  const dispatch = useDispatch();

  const handleSelectTodo = (todo) => {
    dispatch(selectedTodo(todo));
  };

  const handleRemoveTodo = (todo) => {
    dispatch(removeTodo(todo));
  };

  return (
    <div >
      <h2>ToDo List</h2>
      <ul>
        {todoList.map(todo => (
          <li key={todo} onClick={() => handleSelectTodo(todo)}>
            {todo}
            <button className=' border-4 rounded-md ml-10 bg-black' onClick={(e) => { e.stopPropagation(); handleRemoveTodo(todo); }}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList