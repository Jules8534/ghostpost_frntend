import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.API_URL = "http://localhost:8000/api/posts/";
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    fetch(this.API_URL)
      .then(response => response.json())
      .then(data => this.setState({ posts: data }));
  }

  getPost(id) {

  }

  upvote(id) {
    fetch(this.API_URL + `${id}/up/`, {method: 'POST'})
      .then(response => this.getPosts());
  }

  downvote(id) {
    fetch(this.API_URL + `${id}/down/`, {method: 'POST'})
      .then(response => this.getPosts());
  }

  render() {
    const posts = this.state.posts;

    if (!posts) {
      return <p>Loading ...</p>;
    }

    return (
      <div className="container">
        
        <table className="table">
          <tbody>
            {posts.map((post, index) => {
              return (
                <tr key={index}>
                  <td>
                    <a onClick={() => this.upvote(post.id)} href="#">Upvote</a>
                  </td>
                  <td>
                    <a onClick={() => this.downvote(post.id)} href="#">Downvote</a>
                  </td>
                  <td>{post.datetime}</td>
                  <td>{post.score}</td>
                  <td>{post.boast}</td>
                  <td>{post.text}</td>
                  <td>{post.created_at}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
