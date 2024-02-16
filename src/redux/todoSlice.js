import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todoList: [],
    newTodo: "",
    selectedTodo:null,
    deletingTodo:false,
};

const todoSlice = createSlice({
     name: 'todos',        // Slice'ın adı
  initialState,         // Başlangıç durumu
  reducers: {
    // Yeni bir ToDo eklemek için eylem (action) tanımlanır
    addTodo: (state, action) => {
      // ToDo listesine yeni ToDo eklenir
      state.todoList.push(action.payload);
      // Yeni ToDo alanı temizlenir
      state.newTodo = '';
    },
    selectedTodo: (state, action) => {
        state.selectedTodo = action.payload;
    },
    removeTodo: (state, action) => {
        state.todoList = state.todoList.filter(todo => todo !== action.payload);
        state.selectedTodo = null;
        state.deletingTodo = false;
    },
    setNewTodo: (state, action) => {
        state.newTodo = action.payload
    },
    setDeletingTodo: (state, action) => {
        state.newTodo = action.payload;
    },
    },
});

export const {addTodo, selectedTodo, removeTodo, setNewTodo, setDeletingTodo} = todoSlice.actions;

export default todoSlice.reducer;