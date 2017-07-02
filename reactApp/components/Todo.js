import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    var strike = this.props.todo.completed ? <strike>{this.props.todo.taskText}</strike> : this.props.todo.taskText
    var key = this.props.key;
    return (
      <li className="todoItem">
        <button className="btn btn-default" key={key}>X</button>
        {strike}
      </li>
    )
  }
}

export default Todo;
