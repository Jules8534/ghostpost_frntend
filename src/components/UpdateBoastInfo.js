import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import { apiUrl } from "../settings.js"

class UpdatePostInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            content: "",
        };
    }
    componentDidMount() {
        // console.log("Print id :" + this.props.match.params.id);
        axios
            .get(apiUrl + "/post/" + this.props.match.params.id)
            .then((res) => {
                // this.setState({...this.state, post: res.data})
                this.setState({
                    title: res.data.title,
                    content: res.data.isbn,

                });
            })

            .catch(err => {
                console.log('Error from UpdateBoastInfo');
            });
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    onSubmit = (e) => {
        e.preventDefault();

        const data = {
            title: this.state.title,
            content: this.state.isbn,
        };
        axios
            .put(apiUrl + "/post/" + this.props.match.params.id, data)
            .then((res) => {
                this.props.history.push("/show-post/" + this.props.match.params.id);

            })
            .catch((err) => {
                console.log('Error in UpdateBoastInfo');
            });

    };

    render() {
        return (
            <div className="UpdateBoastInfo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <br />
                            <Link to="/" className="btn btn-outline-warning float-left">
                                Show Post List
                            </Link>
                        </div>

                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Edit Post</h1>
                            <p className="lead text-center"> Update Post Info</p>
                        </div>
                    </div>
                <div className="col-md-8 m-auto">
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                placeholder="Title of the Post"
                                name="title"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChange}
                            />
                        </div>    
                        <br />

                        <div className="form-group">
                            <label htmlFor="isbn">Content</label>
                            <input
                                type="text"
                                placeholder="Content"
                                name="content"
                                className="form-control"
                                value={this.state.content}
                                onChange={this.onChange}
                            />
                        </div>

                        <button 
                            type="submit"
                            className="btn btn-outline-info btn-lg btn-block"
                        >
                            Update Post
                        </button>
                    </form>
                </div>
                </div>
            </div>
        );
    }



}