// AddTodoFrom.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, setNewTodo } from '../redux/todoSlice'; // todoSlice'dan addTodo ve setNewTodo işlevlerini al

const AddTodoFrom = () => {
    // Redux store'dan yeni todo girişini al
    const newTodo = useSelector(state => state.todos.newTodo);
    const dispatch = useDispatch(); // useDispatch kancasıyla dispatch fonksiyonunu al

    // Input alanındaki değişikliklerde çağrılacak işlev
    const handleInputChange = (e) => {
        // Yeni todo girişini güncelle
        dispatch(setNewTodo(e.target.value));
    };

    // Yeni bir todo eklemek için çağrılacak işlev
    const handleAddTodo = () => {
        // Yeni todo eklemek için addTodo eylemini gönder
        dispatch(addTodo(newTodo));
    };

    return (
        <div>
            {/* Kullanıcıdan todo girişini alacak bir input alanı */}
            <input className='p-2 rounded-md' placeholder='Write ToDo' type="text" value={newTodo} onChange={handleInputChange}/>
            {/* Todo eklemek için bir buton */}
            <button className='border rounded-md ml-2 p-2' onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
};

export default AddTodoFrom;

