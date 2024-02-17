import React from 'react'
import TodoList from '../TodoList'
import AddTodoFrom from '../AddTodoFrom'

const Home = () => {
  return (
    <div className='h-screen container flex justify-center items-center '>
      
      <TodoList/>
        <AddTodoFrom/>
     
        
    </div>
  )
}

export default Home