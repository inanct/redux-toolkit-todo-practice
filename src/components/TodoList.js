// TodoList.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../redux/todoSlice'; // todoSlice'dan removeTodo eylemini al

const TodoList = () => {
    const todoList = useSelector(state => state.todos.todoList); // Redux store'dan todo listesini al
    const dispatch = useDispatch(); // useDispatch kancasıyla dispatch fonksiyonunu al

    // Todo kaldırmak için bir işlev tanımla
    const handleRemoveTodo = (todo) => {
        // Redux store'a removeTodo eylemini gönder
        dispatch(removeTodo(todo));
    };

    return (
        <div>
            <h2 className='border rounded-md p-2 mr-2'>ToDo List</h2>
            <ul>
                {/* todoList üzerinde döngü yap ve her bir todo öğesi için bir <li> öğesi oluştur */}
                {todoList.map(todo => (
                    <li key={todo}>
                        {/* Her bir todo öğesini ekrana yazdır */}
                        {todo}
                        {/* Todo öğesini kaldırmak için bir buton ekle */}
                        <button className='border-4 rounded-md ml-10 bg-black text-white' onClick={() => handleRemoveTodo(todo)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
