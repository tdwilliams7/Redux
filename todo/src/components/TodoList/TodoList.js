// take in data and send to SingleTodo
//Might change state
import React, { Component } from "react";
import SingleTodo from "../SingleTodo/SingleTodo";
import { addTodo } from "../../actions";
import deleteTodo from "../../actions";
import { connect } from "react-redux";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todo: ""
    };
    this.deleteTodoHandler = this.deleteTodoHandler.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  inputChangeHandler({ target }) {
    this.setState({
      todo: target.value
    });
  }

  addTodoHandler() {
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: ""
    });
  }

  deleteTodoHandler({ target }) {
    //this.props.deleteTodo(target.id);
    console.log("delete pressed");
    this.props.deleteTodo(target.id);
  }

  render() {
    return (
      <div>
        <h1>TODOLIST Component</h1>
        <div>
          <input
            placeholder="new to do item"
            value={this.state.todo}
            onChange={event => this.inputChangeHandler(event)}
          />
          <button onClick={() => this.addTodoHandler()}>add</button>
        </div>
        <SingleTodo
          friends={this.props.todos}
          deleteTodo={this.deleteTodoHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state
  };
};

export default connect(mapStateToProps, { addTodo })(TodoList);
