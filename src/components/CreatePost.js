import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { apiUrl } from "../settings.js";

class CreatePost extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      boast: false,
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      text: this.state.text,
      boast: this.state.boast,
    };

    axios
      .post(apiUrl + "posts/", data)
      .then((res) => {
        this.setState({
          text: "",
          boast: false,
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error in CreateBoast!");
      });
  };

  render() {
    return (
      <div className="CreateBoast">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Ghost Post List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center"> Add Ghost Post </h1>

              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Type your post here!"
                    name="text"
                    className="form-control"
                    value={this.state.text}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className="form-group">
                  <input
                    type="checkbox"
                    name="boast"
                    onChange={this.onChange}
                  />
                  <label htmlFor="boast"> </label>
                </div>

                <button
                  type="sumbit"
                  className="btn btn-outline-warning btn-block mt-4"
                >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePost;
