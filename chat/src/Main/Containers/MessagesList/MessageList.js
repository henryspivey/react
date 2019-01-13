import {connect} from 'react-redux';
import MessageListComponent from '../../Components/MessagesListComponent';

export const MessagesList = connect(state => ({
	messages: state.messages
}), {})(MessageListComponent)