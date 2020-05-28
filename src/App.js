import React from 'react';
import './App.scss'
import { BrowserRouter, Route } from 'react-router-dom'
import Initial from './pages/Initial'
import Home from './pages/Home'
import TodoList from './pages/TodoLost'
function App() {
  return (
    <>
      <TodoList></TodoList>
      <BrowserRouter>
        <Route path="/"  components={Initial}></Route>
        <Route path="/home" components={Home}></Route>
      </BrowserRouter>
    </>
  );
}

export default App;
