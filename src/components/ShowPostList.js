import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";
import { apiUrl } from "../settings.js";

class ShowPostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.getPosts = this.getPosts.bind(this);
    this.onlyBoasts = this.onlyBoasts.bind(this);
    this.onlyRoasts = this.onlyRoasts.bind(this);
    this.sorted = this.sorted.bind(this);
    this.apiUrl = apiUrl + "posts/";
  }

  getPosts() {
    axios.get(this.apiUrl).then((res) => {
      this.setState({
        posts: res.data,
      });
    });
  }
  
  sorted() {
    this.apiUrl = apiUrl + "posts/sorted/";
    this.getPosts();
  }

  onlyBoasts() {
    this.apiUrl = apiUrl + "posts/boasts/";
    this.getPosts();
  }

  onlyRoasts() {
    this.apiUrl = apiUrl + "posts/roasts/";
    this.getPosts();
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    const posts = this.state.posts;
    let postList;

    if (!posts) {
      postList = "there are no posts";
    } else {
      postList = posts.map((post, k) => (
        <PostCard post={post} key={k} getPosts={this.getPosts} />
      ));
    }

    return (
      <div className="ShowPostList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Ghost Post</h2>
            </div>

            <div className="col-md-11">
              <button className="btn" onClick={this.onlyBoasts}>
                Only boasts
              </button>
              <button className="btn" onClick={this.onlyRoasts}>
                Only roasts
              </button>
              <button className="btn" onClick={this.sorted}>
                Sorted
              </button>
            </div>
            <div className="col-md-11">
              <Link
                to="/create-post"
                className="btn btn-outline-warning center"
              >
                Add Post
              </Link>
            </div>
          </div>
          <div className="list">{postList}</div>
        </div>
      </div>
    );
  }
}

export default ShowPostList;
