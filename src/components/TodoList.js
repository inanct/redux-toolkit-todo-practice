import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, selectedTodo } from '../redux/todoSlice'; // Redux'tan gerekli eylemleri ve slice'ı içe aktarır

const TodoList = () => {
    // Redux store'undan todo listesini alır
    const todoList = useSelector(state => state.todos.todoList);
    const dispatch = useDispatch(); // Redux'ta bir eylemi tetiklemek için dispatch fonksiyonunu alır

    // Bir todo öğesini seçmek için kullanılan işlev
    const handleSelectTodo = (todo) => {
        // Redux store'una seçilen todo öğesini güncellemek için selectedTodo eylemini tetikler
        dispatch(selectedTodo(todo));
    };

    // Bir todo öğesini silmek için kullanılan işlev
    const handleRemoveTodo = (todo) => {
        // Redux store'undan todo öğesini kaldırmak için removeTodo eylemini tetikler
        dispatch(removeTodo(todo));
    };

    return (
        <div>
            <h2>ToDo List</h2>
            <ul>
                {/* Todo listesini döngüye alır ve her bir todo öğesini listeler */}
                {todoList.map(todo => (
                    <li key={todo} onClick={() => handleSelectTodo(todo)}> {/* Bir todo öğesi tıklanırsa, handleSelectTodo işlevi çağrılır */}
                        {todo}
                        {/* Remove butonuna tıklandığında, handleRemoveTodo işlevi çağrılır ve todo öğesi Redux store'undan kaldırılır */}
                        <button className='border-4 rounded-md ml-10 bg-black' onClick={(e) => { e.stopPropagation(); handleRemoveTodo(todo); }}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList; // TodoList bileşenini dışa aktarır
