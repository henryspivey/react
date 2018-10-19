import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TodoList from './components/List/TodoList';

ReactDOM.render(<App />, document.getElementById('container'));
registerServiceWorker();
