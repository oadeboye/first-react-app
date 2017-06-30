import React from 'react';
import ReactDOM from 'react-dom';

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

export default InputLine;