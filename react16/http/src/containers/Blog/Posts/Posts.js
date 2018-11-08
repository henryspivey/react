import React, {Component} from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import {DropDownFilter, TextFilter} from '../Filters/Filter';
import Aux from '../../../components/HOC/Aux/Aux';
import {Link} from 'react-router-dom';


class Posts extends Component {
  state = {
      posts: [],
      selectedPostId: null,
      userIds: [],
      selectUserId: null,
      query: ''
    }

  postSelectedHandler = (id) => {
    this.props.history.push({pathname: '/'+id});
    // this.setState({selectedPostId: id})
  }
  componentDidMount() {
    const allIds = [];
    axios.get('http://jsonplaceholder.typicode.com/posts').then(response => {
      const posts = response.data;

      const updatedPosts = posts.map(post => {
        allIds.push(post.userId);
        return {
          ...post, author: 'Henri'
        }
      })
      this.setState({posts: updatedPosts, userIds: ['Select a user id', ...new Set(allIds)]});
    }).catch(error => {
      console.log(error);
    })
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({selectUserId: event.target.value})
  }

  handleQueryChange = (event) => {
      console.log(event.target.value);
      this.setState({query: event.target.value})
  }

  render() {
    let posts = this.state.posts.map(post => {
      return (
        // <Link to={'/' + post.id} key={post.id}>
          <Post key={post.id} userId={post.userId} author={post.author} title={post.title} clicked={()=> this.postSelectedHandler(post.id)} />
        // </Link>
      )
   });
    if(this.state.selectUserId && !isNaN(this.state.selectUserId)) {
       posts = this.state.posts.filter(post => post.userId == this.state.selectUserId).map(post => {
         return <Post key={post.id} userId={post.userId} author={post.author} title={post.title} clicked={()=> this.postSelectedHandler(post.id)} />
       })
    }
    if(this.state.query) {
       posts = this.state.posts.filter(post => post.title.search(this.state.query) > -1).map(post => {
         return <Post key={post.id} userId={post.userId} author={post.author} title={post.title} clicked={()=> this.postSelectedHandler(post.id)} />
       })
    }

    return (
      <Aux>
        <form onSubmit={this.handleSubmit} className="custom-form">
          <DropDownFilter label="User ID " isDropdown="true" ids={this.state.userIds} handleChange={this.handleChange}/>
          <TextFilter label="Search Terms " placeholder="Enter your search terms here" handleChange={this.handleQueryChange}/>
        </form>
        <section className="Posts">
            {posts}
        </section>
      </Aux>
    )
  }
}


export default Posts;
