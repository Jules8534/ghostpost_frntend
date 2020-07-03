import React, { Component }from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import CreatePost from "./components/CreatePost.js";
import ShowPostList from "./components/ShowPostList.js";
// import ShowBoastDetails from "./components/UpdateBoastDetails";
// import UpdateBroastInfo from "./components/UpdateBoastInfo";


class App extends Component {

  
  // <Route path="/show-boast/:id" component={ShowBoastDetails} />

  render() {
    return(
      <Router>
        <div>
          <Route exact path="/" component={ShowPostList} />
          <Route path="/create-post" component={CreatePost} />
        </div>
      </Router>
    );
  }
}

   

export default App;
