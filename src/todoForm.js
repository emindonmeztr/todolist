import React from 'react';

export class TodoForm extends React.Component{
    constructor(){
      super();
      this.addTask = this.addTask.bind(this);
    }

    addTask(e){
    e.preventDefault();
    const inp = document.getElementById('todoInput');
    this.props.addTask(inp.value);
    }

    render(){
      return(
        <div>
        <div className="todo type1">
        <form autoComplete="off" className="input-wrapper" onSubmit={this.addTask}>
        <input id="todoInput" type="text" className="add-todo" placeholder="What needs to be done?" />
        </form>
        </div>
        <button type="button" className="add-btn" onClick={this.addTask}/>
        </div>
      )
    }
}
