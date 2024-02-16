import { createSlice } from "@reduxjs/toolkit";

// Başlangıç durumu (initial state)
const initialState = {
    todoList: [],       // ToDo listesi
    newTodo: "",        // Yeni ToDo
    selectedTodo: null, // Seçili ToDo
    deletingTodo: false // ToDo silme işlemi durumu
};

// createSlice fonksiyonu kullanılarak bir slice (dilim) oluşturulur
const todoSlice = createSlice({
     name: 'todos',    // Slice'ın adı
     initialState,    // Başlangıç durumu
     reducers: {      // Reducer fonksiyonları
        // Yeni bir ToDo eklemek için eylem (action) tanımlanır
        addTodo: (state, action) => {
            // ToDo listesine yeni ToDo eklenir
            state.todoList.push(action.payload);
            // Yeni ToDo alanı temizlenir
            state.newTodo = '';
        },
        // Seçili ToDo'yu güncellemek için eylem (action) tanımlanır
        selectedTodo: (state, action) => {
            state.selectedTodo = action.payload;
        },
        // ToDo silmek için eylem (action) tanımlanır
        removeTodo: (state, action) => {
            // ToDo listesinden belirtilen ToDo filtrelenir ve kaldırılır
            state.todoList = state.todoList.filter(todo => todo !== action.payload);
        },
        // Yeni ToDo'yu ayarlamak için eylem (action) tanımlanır
        setNewTodo: (state, action) => {
            state.newTodo = action.payload;
        },
        // ToDo silme işlemi durumunu ayarlamak için eylem (action) tanımlanır
        setDeletingTodo: (state, action) => {
            state.deletingTodo = action.payload;
        },
    },
});

// createSlice fonksiyonundan dönen action'ları ve reducer'ları dışa aktarılır
export const { addTodo, selectedTodo, removeTodo, setNewTodo, setDeletingTodo } = todoSlice.actions;

// Reducer fonksiyonu dışa aktarılır
export default todoSlice.reducer;
