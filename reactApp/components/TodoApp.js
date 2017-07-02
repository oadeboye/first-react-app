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
    this.addTodo=this.addTodo.bind(this);
  }

  componentDidMount(){
    this.setState({
      todos: dummyData
    })
  }

  addTodo(string){
    var tasks = this.state.todos.slice();
    tasks.push({taskText: string, completed: false});
    this.setState({
      todos: tasks
    })
  }

  render(){
    return(
      <div className="todoApp">
        <InputLine
          submit={this.addTodo}
        />
        <TodoList
          todos={this.state.todos}
        />
      </div>
    )
  }
}

export default TodoApp;
