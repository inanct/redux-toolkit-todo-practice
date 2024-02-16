import React from 'react'
import { addTodo, setNewTodo } from '../redux/todoSlice'; // Redux eylemlerini içe aktarır
import { useDispatch, useSelector } from 'react-redux'; // Redux'tan useDispatch ve useSelector hook'larını içe aktarır

const AddTodoFrom = () => {
  // Redux store'undan yeni todo öğesini alır
  const newTodo = useSelector(state => state.todos.newTodo);
  const dispatch = useDispatch(); // Redux'ta bir eylemi tetiklemek için dispatch fonksiyonunu alır

  // Input alanına girilen değeri almak ve Redux store'unda yeni todo öğesini ayarlamak için kullanılan işlev
  const handleInputChange = (e) => {
    dispatch(setNewTodo(e.target.value)); // setNewTodo eylemini tetikler ve Redux store'unda yeni todo öğesini ayarlar
  };

  // Yeni bir todo öğesi eklemek için kullanılan işlev
  const handleAddTodo = () => {
    dispatch(addTodo(newTodo)); // addTodo eylemini tetikler ve Redux store'una yeni todo öğesini ekler
  };

  return (
    <div>
      {/* Kullanıcıdan todo öğesini girmesi için bir input alanı ve eklemek için bir buton oluşturur */}
      <input placeholder='Write ToDo' className='text-black font-semibold rounded-lg mr-2 ml-2' type="text" value={newTodo} onChange={handleInputChange} /> {/* Input alanındaki değer değiştiğinde handleInputChange işlevini çağırır */}
      <button onClick={handleAddTodo}>Add Todo</button> {/* "Add Todo" butonuna tıklandığında handleAddTodo işlevini çağırır */}
    </div>
  );
}

export default AddTodoFrom; // AddTodoFrom bileşenini dışa aktarır
