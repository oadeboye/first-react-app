import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = [{ taskText: "Do something", completed: false },
 { taskText: "Do something else", completed: false },
 { taskText: "Do the thing", completed: true },
 { taskText: "Stop", completed: false }]



class Todo extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    var strike = this.props.todo.completed ? <strike>{this.props.todo.taskText}</strike> : this.props.todo.taskText

    return (
      <li className="todoItem">
        <button className="btn btn-default" key={this.props.keyTime}>X</button>
        {strike}
      </li>
    )
  }
}

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

class InputLine extends React.Component{

  render(){
    return(
        <form className="input-group inputLine">
            <input type="text" placeholder="What do you need to do today?" className="form-control"></input>
            <span className="input-group-btn">
              <input type="submit" className="btn btn-default" value="Add a task!"></input>
            </span>
        </form>
    )
  }
}

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

// var dance = React.createElement('p', null, 'Yaaaaassss!');

ReactDOM.render(<TodoApp/>,
   document.getElementById('root'));
