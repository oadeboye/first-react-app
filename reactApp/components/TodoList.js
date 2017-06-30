import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './Todo';


class TodoList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="todoList">
        <ul>{this.props.todos.map((todo, i) => {
          var keyTime = i;
          return <Todo todo={todo} keyTime={keyTime}/>
        })}</ul>
      </div>
    )
  }
}

export default TodoList;
