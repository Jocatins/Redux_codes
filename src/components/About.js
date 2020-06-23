import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Lolo from '../img/lolo.jpg';

class About extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      console.log(res);
      this.setState({
        posts: res.data.slice(0, 15),
      });
    });
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <img src={Lolo} alt="lolo" />
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title indigo-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center"> No posts available</div>
    );
    return (
      <div className="container about">
        <h2>About Titans</h2>
        {postList}
      </div>
    );
  }
}

export default About;
