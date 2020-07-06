import React, { Fragment } from 'react';
import './App.css';

import InputTodo from "./componens/InputTodo";
import ListTodos from "./componens/ListTodos";

function App() {
  return <Fragment>
    <div className="container">
      <InputTodo/>
      <ListTodos/>
    </div>
  </Fragment>;
}

export default App;