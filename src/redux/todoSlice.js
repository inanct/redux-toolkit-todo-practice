// todoSlice.js

import { createSlice } from "@reduxjs/toolkit";

// Başlangıç durumu: todoList boş bir dizi, newTodo boş bir string
const initialState = {
    todoList: [],
    newTodo: "",
};

// todoSlice oluşturuluyor
const todoSlice = createSlice({
    name: 'todos', // Slice'ın adı
    initialState, // Başlangıç durumu
    reducers: {
        // Yeni bir todo eklemek için eylem (action) tanımlanır
        addTodo: (state, action) => {
            // Yeni todo listesine eklenir
            state.todoList.push(action.payload);
            // Yeni todo alanı temizlenir
            state.newTodo = '';
        },
        // Bir todo'yu kaldırmak için eylem tanımlanır
        removeTodo: (state, action) => {
            // Todo listesi filtrelenir ve kaldırılmak istenen todo dışındakiler kalır
            state.todoList = state.todoList.filter(todo => todo !== action.payload);
        },
        // Yeni bir todo girişi ayarlamak için eylem tanımlanır
        setNewTodo: (state, action) => {
            // Yeni todo girişi güncellenir
            state.newTodo = action.payload;
        },
    },
});

// Eylemleri dışa aktar
export const { addTodo, removeTodo, setNewTodo } = todoSlice.actions;

// Reducer'ı dışa aktar
export default todoSlice.reducer;
