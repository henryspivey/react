import React, {Component} from 'react';
import './Layout.css';
import {Sidebar} from '../Containers/Sidebar/Sidebar';
import {MessagesList} from '../Containers/MessagesList/MessageList';
import {AddMessageContainer} from '../Containers/AddMessage/AddMessage';

class Layout extends Component {
	render() {
		return (
			<div id="container">
			  <Sidebar />
			  <section id="main">
			   <MessagesList />
			   <AddMessageContainer />
			  </section>
			</div>
		)
	}
}


export default Layout;