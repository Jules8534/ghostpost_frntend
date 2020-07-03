import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { apiUrl } from "../settings.js";

class PostCard extends Component {

  constructor(props) {
    super(props);
  }

  upvote(id) {
    axios.post(apiUrl + `posts/${id}/up/`)
      .then(response => this.props.getPosts());
  }

  downvote(id) {
    axios.post(apiUrl + `posts/${id}/down/`)
      .then(response => this.props.getPosts());
  }

  render() {
    const post = this.props.post;
    return (
      <div className="card-container">
        <div className="desc">
          <h2>
            <Link to={`/show-post/${post.id}`}>
              {post.boast ? "Boast" : "Roast"}
            </Link>
          </h2>
          <p>{post.text}</p>
          <p>{post.created_at}</p>
          <p>Score: {post.score}</p>
          <p>
            <button onClick={() => this.upvote(post.id)}>Upvote</button>
          </p>
          <p>
            <button onClick={() => this.downvote(post.id)}>Downvote</button>
          </p>
        </div>
      </div>
    );
  }
};

export default PostCard;
