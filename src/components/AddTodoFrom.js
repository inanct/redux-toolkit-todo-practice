import React from 'react'
import { addTodo, setNewTodo } from '../redux/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

const AddTodoFrom = () => {
  const newTodo = useSelector(state => state.todos.newTodo);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(setNewTodo(e.target.value));
  };

  const handleAddTodo = () => {
    dispatch(addTodo(newTodo));
  };

  return (
    <div>
      <input placeholder='Write ToDo' className=' text-black font-semibold rounded-lg mr-2 ml-2 ' type="text" value={newTodo} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}


export default AddTodoFrom