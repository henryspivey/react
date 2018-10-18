// https://www.kirupa.com/react/simple_todo_app_react.htm

import React, {Component} from 'react';
import List from './List';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputTodo: '', items:[]};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

		// this.addItem = () => {
	// 	if(this.state.inputValue !== "") {
	// 		var newItem = {
	// 			text: this.state.inputValue,
	// 			key: Date.now()
	// 		}
	//
	// 		this.setState((prevState) => {
	// 			return {
	// 				items: prevState.items.concat(newItem),
	// 				inputValue: ""
	// 			};
	// 		});
	//
	// 	}
	// 	console.log(this.state.items);
	//
	// }

  handleChange(event) {
    this.setState({inputTodo: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.inputTodo);
		this.setState((prevState) => {
			return {items: prevState.items.concat(this.state.inputTodo)}
		})
    event.preventDefault();
  }

  render() {
    return (
			<div>
	      <form onSubmit={this.handleSubmit}>
	        <label>
	          Name:
	          <input type="text" value={this.state.value} onChange={this.handleChange} />
	        </label>
	        <input type="submit" value="Submit" />
	      </form>
				{this.state.items}
				<List />
			</div>
    );
  }
}

/* component here for list
 <List items={this.state.items} */

export default TodoList;
