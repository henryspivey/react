import React, { Component } from 'react';
import axios from 'axios';


class FullPost extends Component {

    state = {
      loadedPost : null
    }

    componentDidMount() {
      console.log(this.props);
      if (this.props.match.params.id) {
          if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id)) {
            // only make the request for new posts
            axios.get('/posts/'+this.props.match.params.id).then(response => {
                this.setState({loadedPost: response.data});
            })
          }

      }

    }

    deletePostHandler = () => {
      axios.delete('/posts/'+this.props.id).then(response => {
          console.log(response)
      })
    }

    render () {
        let post = <p>Please select a Post!</p>;
        if (this.props.id) {
          post = <p>Loading</p>
        }
        if (this.state.loadedPost) {
          post = (
              <div className="Post">
                  <h1>{this.state.loadedPost.title}</h1>
                  <p>{this.state.loadedPost.body}</p>
                  <div className="Edit">
                      <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                  </div>
              </div>

          );
        }
        return post;
    }
}

export default FullPost;
