import React, {Component} from 'react';
import List from '../ListComponent/List';
import Layout from '../Layout/Layout';


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputTodo: '', items:[], disabled: true};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (this.state.inputTodo) {
      this.setState({disabled: false})
    }
    this.setState({inputTodo: event.target.value});
  }

  handleSubmit(event) {
    
    if (!this.state.inputTodo) {
      alert('Enter some text foo!')
      this.setState({disabled: true});
    }
		else {

      this.setState((prevState) => {
        return {items: prevState.items.concat(this.state.inputTodo), inputTodo:" ", disabled:false};
		  })
    }
    event.preventDefault();
  }

  render() {
    return (
			<div>

	      <form onSubmit={this.handleSubmit}>
	        <label>
	          What needs to be done:
	          <input type="text" value={this.state.inputTodo} onChange={this.handleChange} />
	        </label>
	        <button disabled={this.state.disabled}>
            Add #{this.state.items.length + 1}
          </button>
	      </form>

				<List todoitems={this.state.items} />
			</div>
    );
  }
}

export default TodoList;
