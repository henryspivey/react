import {connect} from 'react-redux';
import AddMessageComponent from '../../Components/AddMessage';
import {addMessage} from '../../../actions';

const mapDispatchToProps = dispatch => ({
	dispatch: (message, author) => {
		dispatch(addMessage(message, author))
	}
})

export const AddMessageContainer = connect( () => ({}), mapDispatchToProps)(AddMessageComponent)