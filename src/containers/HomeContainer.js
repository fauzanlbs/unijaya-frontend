import React, { Component } from "react";
import TableComponent from "../components/TableComponent";
import PostDataService from "../services/PostService";

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postsdata: [],
    };
  }

  async getPostsData() {
    await PostDataService.getAll()
      .then((res) => {
        this.setState({
          postsdata: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getPostsData();
  }

  render() {
    return (
      <div>
        <TableComponent posts={this.state.postsdata} />
      </div>
    );
  }
}
