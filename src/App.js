import React, { Component } from 'react';

import TasksWrapper from './components/TasksWrapper';
import Input from './components/Input';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      tasks: [
        {
          name: "Lavar los trastes",
          id: 1,
          completed: false,
        },
        {
          name: "Pasear al perro",
          id: 2,
          completed: false,
        },
        {
          name: "Lavar la ropa",
          id: 3,
          completed: false,
        },
        {
          name: "Tender cama",
          id: 4,
          completed: true,
        },
      ],
    };
    this.completeTask = this.completeTask.bind(this);
  }

  completeTask(id) {
    const tasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.completed = true;
      }
      return task;
    })

    this.setState({ tasks: tasks });
    // encontar la tarea que cambia
    // actualizar esa tarea
    // actualiza tu estado - setState

  }

  render() {
    const tasks = this.state.tasks.filter((task) => (
      task.completed === false
    ));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Tareitas</h1>
        </header>
        <div>
          <Input />
          <TasksWrapper completeTask={this.completeTask} tasks={tasks} />
        </div>
      </div>
    );
  }
}

export default App;
