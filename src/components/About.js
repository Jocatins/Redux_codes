import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Lolo from '../img/lolo.jpg';
import { connect } from 'react-redux';

class About extends Component {
  render() {
    const { posts } = this.props;
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
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(About);
