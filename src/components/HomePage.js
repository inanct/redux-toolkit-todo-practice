import React from 'react'
import TodoList from './TodoList'
import AddTodoFrom from './AddTodoFrom'

const HomePage = () => {
  return (
    <div className='container flex justify-center bg-slate-800 text-white p-8 '>
        <TodoList/>
        <AddTodoFrom/>
    </div>
  )
}

export default HomePage