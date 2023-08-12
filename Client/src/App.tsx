import { createContext, useState, useEffect } from 'react'
import './App.scss'

import { TodoInput } from './component/TodoInput'
import { TodoDisplay } from './component/TodoDisplay'
import { TodoUseContext } from './component/Context'

function App() {
  var { getTodo, setNewTodo, getDone, setCompletedTodo } = TodoUseContext()
  useEffect(() => {
    getTodo().then((value) => {
      setNewTodo(value)
    })

    getDone().then((value) => {
      setCompletedTodo(value)
    })
  }, [])

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
