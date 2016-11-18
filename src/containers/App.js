import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as todoActions from '../actions/addTodo'

class App extends Component {

  handleClick = () => {
    console.log(this);
    const { addTodo } = this.props;
    addTodo('First todo')
  }

  render() {
    const { addTodo } = this.props;
    return <button onClick={this.handleClick}>Click me</button>
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(todoActions, dispatch)
  }
}

export default connect(mapStateToProps, todoActions)(App);
