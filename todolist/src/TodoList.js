// https://www.kirupa.com/react/simple_todo_app_react.htm

import React, {Component} from 'react';

class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items: []
		}
		this.addItem = (e) => {
			if(this._inputElement.value !== "") {
				var newItem = {
					text: this._inputElement.value,
					key: Date.now()
				}

				this.setState((prevState) => {
					return {
						items: prevState.items.concat(newItem)
					};
				});
				this._inputElement.value = "";
			}
			console.log(this.state.items);
			e.preventDefault();
		}
		
	}

	render() {
		return (
			<div className="todoListMain">
				<div className="header">
					<form onSubmit={this.addItem}>
						<input placeholder="enter task" ref={ (a) => this._inputElement = a} />
						<button type="submit">add</button>
					</form>
				</div>
			</div>
		)
	}
}

export default TodoList;