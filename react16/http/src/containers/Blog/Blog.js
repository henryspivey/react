import React, { Component } from 'react';
import axios from '../../axios';
import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom';
import FullPost from './FullPost/FullPost';
import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../components/HOC/async/asyncComponent';
// import NewPost from './NewPost/NewPost';
const AsyncNewPost =asyncComponent( () => {
  return import('./NewPost/NewPost')
})

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                  <nav>
                    <ul>
                      <li><NavLink to="/posts" exact>Posts</NavLink></li>
                      <li><NavLink to="/new" exact>New Post</NavLink></li>
                    </ul>
                  </nav>
                </header>
                <Switch>
                  <Route path="/posts" exact component={Posts}/>
                  <Route path="/new" exact component={AsyncNewPost}/>
                  <Route path="/posts/:id" exact component={FullPost}/>

                  <Route render={()=> (<h1>Not Found</h1>)} />
                </Switch>
            </div>
        );
    }
}

export default Blog;
