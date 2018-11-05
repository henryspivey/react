import axios from 'axios';
const instance= axios.create({
  baseURL: 'https://react-my-burger-60839.firebaseio.com/'
})

export default instance;
