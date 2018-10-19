import React, {Component} from 'react';
import List from '../ListComponent/List';
import Layout from '../Layout/Layout';

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

		this.setState((prevState) => {
			return {items: prevState.items.concat(this.state.inputTodo), inputTodo:" "}
		})
    event.preventDefault();
  }

  render() {
    return (
			<div>
	      <form onSubmit={this.handleSubmit}>
	        <label>
	          Name:
	          <input type="text" value={this.state.inputTodo} onChange={this.handleChange} />
	        </label>
	        <input type="submit" value="Submit" />
	      </form>

				<List todoitems={this.state.items} />
			</div>
    );
  }
}

export default TodoList;
