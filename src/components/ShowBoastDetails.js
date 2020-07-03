import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class ShowBoastDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boast: {}
    };
  }

  componentDidMount() {
      console.log("Print id: " + this.props.match.params.id);
        axios   
            .get(apiUrl + "/boast/" + this.props.match.params.id)
            .then((res) => {
                this.setState({
                    boast: res.data,
                });
            })
            .catch((err) => {
                console.log('Error from ShowBoastDetails');
            });
    }

  }

  onUpvoteClick(id) {
      axios
        .post(apiUrl + "/boast" + id "/vote_up/")
        .then(window.location.reload())
        .catch((err) => {
            console.log('Error form ShowBoastDetails_upvoteClick');
        });
  }

  onDownvoteClick(id) {
      axios
        .post(apiUrl + "/boast" + id + "/vote_down/")
        .then(window.location.reload())
        .catch((err) => {
            console.log('Error form ShowBoastDetails_downvoteClick');
        
        });
  }

  render() {
      const boast = this.state.boast;
      let PostItem = (
          <div>
            <table className="table table-hover table-dark">
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Type</td>
                        <td>{post.boast ? "Boast" : "Roast"}</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Title</td>
                        <td>{post.title}</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Content</td>
                        <td>{post.content}</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Date Posted</td>
                        <td>{post.date}</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Upvotes</td>
                        <td>{post.vote_up}</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Downvotes</td>
                        <td>{post.vote_down}</td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>Score</td>
                        <td>{post.score}</td>
                    </tr>
                </tbody>
            </table>
          </div>
      );

      return(
          <div className="ShowBoastDetails">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <br /> <br />
                        <Link to="/" className="btn btn-outline-warning float-left">
                            Ghost Post List
                        </Link>
                    </div>
                    <br />
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4" text-center">Ghost Post Details"</h1>
                        <hr /> <br />
                    </div>
                </div>
                <div>{PostItem}</div>

                <div className="row">
                    <div className="col-md-6">
                        <botton
                            type="botton"
                            className="btn btn-outline-info btn-lg btn-block"
                            onClick={this.onUpvoteClick.bind(this, post.id)}
                        >
                            Upvote 
                        </botton>
                        <br />
                    </div>

                    <div className="col-md-6">
                        <botton
                            type="botton"
                            className="btn btn-outline-info btn-lg btn-block"
                            onClick={this.onDownvoteClick.bind(this, post.id)}
                        >
                            Downvote 
                        </botton>
                        <br />
                    </div>
                </div>    
            </div>
        
      );

    }
}

