import {connect} from 'react-redux';
import SidebarComponent from '../../Components/Sidebar';

export const Sidebar = connect(state => ({
	users: state.users
}), {})(SidebarComponent)