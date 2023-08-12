import { createContext, useState } from 'react'
import './App.scss'

import { TodoInput } from './component/TodoInput'
import { TodoDisplay } from './component/TodoDisplay'

interface ITodoContext {
  todoList: ItodoList[]
  addNewTodo: (newTodo: { id: string, content: string }) => void
}

export var TodoContext = createContext<ITodoContext | undefined>(undefined);

interface ItodoList {
  id: string,
  content: string
}

function App() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '70vw', height: '80vh',
      minWidth: 'inherit', minHeight: 'inherit'
    }}>
      <TodoInput></TodoInput>
      <TodoDisplay></TodoDisplay>
    </div>
  )
}

export default App
