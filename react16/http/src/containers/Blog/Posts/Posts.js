import React, {Component} from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import Filter from '../Filters/Filter';
import Aux from '../../../components/HOC/Aux/Aux';


class Posts extends Component {
  state = {
      posts: [],
      selectedPostId: null,
      userIds: [],
      selectUserId: null
    }

  postSelectedHandler = (id) => {
    this.setState({selectedPostId: id})
  }
  componentDidMount() {
    const allIds = [];
    axios.get('http://jsonplaceholder.typicode.com/posts').then(response => {
      const posts = response.data.slice(0,11);

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

  render() {
    let posts = this.state.posts.map(post => {
       return <Post key={post.id} author={post.author} title={post.title} clicked={()=> this.postSelectedHandler(post.id)} />
   });
    if(this.state.selectUserId) {
       posts = posts.filter(post => post.userId === this.state.selectUserId)
    }

    return (
      <Aux>
        <form onSubmit={this.handleSubmit}>
          <Filter ids={this.state.userIds} handleChange={this.handleChange}/>
        </form>
        <section className="Posts">
            {posts}
        </section>
      </Aux>
    )
  }
}


export default Posts;
