import React, { Component } from "react";
import { Container } from "reactstrap";
import { BackComponent } from "../components/BackComponent";
import PostDataService from "../services/PostService";
import swal from "sweetalert";
import { withRouter } from "react-router-dom";
import StatusCode from "../helper/StatusCode";

class DetailPostContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postData: [],
      isLoading: false,
    };
  }

  async getPostsData(id) {
    await PostDataService.get(id)
      .then((res) => {
        let result = StatusCode(res.data.code);
        if (result == "OK") {
          this.setState({
            postData: res.data.data,
          });
        } else {
          swal("", result, "error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    this.getPostsData(id);
  }

  render() {
    return (
      <div className="m-5">
        <Container>
          <BackComponent />
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Detail Post</h5>
              <div className="card-text">
                <div className="form-group">
                  <label>User</label>
                  <input
                    type="text"
                    name="user_id"
                    value={this.state.postData.user_id}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Judul</label>
                  <input
                    type="text"
                    value={this.state.postData.title}
                    className="form-control"
                    name="title"
                  />
                </div>
                <div className="form-group">
                  <label>Isi</label>
                  <textarea
                    value={this.state.postData.body}
                    name="body"
                    cols="30"
                    rows="10"
                    className="form-control"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(DetailPostContainer);
