import React from 'react';
import ReactDOM from 'react-dom';

import InputLine from './InputLine';
import TodoList from './TodoList';

var dummyData = [{ taskText: "Do something", completed: false },
 { taskText: "Do something else", completed: false },
 { taskText: "Do the thing", completed: true },
 { taskText: "Stop", completed: false }];

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      todos: []
    }
  }

  componentDidMount(){
    this.setState({
      todos: dummyData
    })
  }

  render(){
    return(
      <div className="todoApp">
        <InputLine />
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default TodoApp;
