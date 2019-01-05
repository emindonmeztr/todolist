import React, { Component } from 'react';

import {TodoList} from './todoList';
import {TodoForm} from './todoForm';
import {Header} from './inc/header';
import {Footer} from './inc/footer';

class App extends Component {

  constructor(){
    super();
    this.state = {myTasks: [
    {text:"Yapılacak ilk iş",status:"passive"},
    {text:"Kitap oku",status:"passive"},
    {text:"Interstellar izle",status:"passive"},
    {text:"Erken uyu",status:"passive"}
  ]};
    this.addTask = this.addTask.bind(this);
    this.doneTask = this.doneTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask(val){
    let updatedList = this.state.myTasks;
    updatedList.push({text:val, status:"passive"});
    this.setState({myTasks: updatedList});
  }

  doneTask(task_id){
    task_id = task_id.replace('task_','');
    let updatedList = this.state.myTasks
    let newStatus = 'active';
    let currentStatus = updatedList[task_id].status;
    if(currentStatus==='active'){
      newStatus = 'passive';
    }
    updatedList[task_id].status = newStatus;
    this.setState({myTasks: updatedList});
  }

  removeTask(task_id){
    task_id = task_id.replace('task_','');
    let updatedList = this.state.myTasks;
    updatedList.splice(task_id,1);
    this.setState({myTasks: updatedList});
  }

  render() {
      return (
      <div className="content">
      <Header/>
      <TodoForm addTask={this.addTask}/>
      <TodoList myTasks_={this.state.myTasks}
                doneTask={this.doneTask}
                removeTask={this.removeTask}/>
      <Footer/>
      </div>
    );
  }
}

export default App;
