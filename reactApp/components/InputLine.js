import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component{

  constructor(props){
    super(props);
    this.state={
      typedText: ''
    }
  }

  click(e){
    e.preventDefault();
    this.props.submit('Test Task');
  }

  handleTyping(e){
    e.preventDefault();
    this.setState({
      typedText: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.submit(this.state.typedText);
    this.setState({
      typedText: ''
    });
  }

  render(){
    return(
        <form className="input-group inputLine">
            <input type="text" placeholder="What do you need to do today?" className="form-control"
              onChange={(e) => this.handleTyping(e)} value={this.state.typedText}></input>
            <span className="input-group-btn">
              <input type="submit" className="btn btn-default" value="Add a task!" onClick={(e) => this.handleSubmit(e)}></input>
            </span>
        </form>
    )
  }
}

export default InputLine;
