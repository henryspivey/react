import React, { Component } from 'react';
import axios from '../../axios';
import {Route, Link, NavLink, Switch} from 'react-router-dom';
import FullPost from './FullPost/FullPost';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                  <nav>
                    <ul>
                      <li><NavLink to="/" exact>Home</NavLink></li>
                      <li><NavLink to="/new" exact>New Post</NavLink></li>
                    </ul>
                  </nav>
                </header>
                <Switch>
                  <Route path="/" exact component={Posts}/>
                  <Route path="/new" exact component={NewPost}/>
                  <Route path="/:id" exact component={FullPost}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;
