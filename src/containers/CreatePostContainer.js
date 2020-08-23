import React, { Component } from "react";
import { Container, Spinner } from "reactstrap";
import { BackComponent } from "../components/BackComponent";
import PostDataService from "../services/PostService";
import swal from "sweetalert";
import { withRouter } from "react-router-dom";
import StatusCode from "../helper/StatusCode";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CreatePostContainer extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      user_id: "",
      title: "",
      body: "",
      isLoading: false,
    };
  }

  handleInput(e) {
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({
      [nam]: val,
    });
  }

  onSubmit() {
    let form_data = {
      user_id: this.state.user_id,
      title: this.state.title,
      body: this.state.body,
    };

    this.setState({
      isLoading: true,
    });

    PostDataService.create(form_data)
      .then((res) => {
        let result = StatusCode(res.data.code);
        if (result == "OK") {
          swal("Data Berhasil disimpan", "", "");
          this.props.history.push("/");
        } else {
          swal("", result, "error");
        }
        this.setState({
          isLoading: false,
        });
      })
      .catch((err) => {
        swal("", err, "error");
        this.setState({
          isLoading: false,
        });
      });
  }
  render() {
    return (
      <div className="m-3">
        <BackComponent />
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Tambah Post</h5>
            <div className="card-text">
              <div className="form-group">
                <label>User</label>
                <input
                  type="text"
                  name="user_id"
                  value={this.state.user_id}
                  onChange={this.handleInput}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Judul</label>
                <input
                  type="text"
                  value={this.state.title}
                  className="form-control"
                  name="title"
                  onChange={this.handleInput}
                />
              </div>
              <div className="form-group">
                <label>Isi</label>
                <textarea
                  value={this.state.body}
                  onChange={this.handleInput}
                  name="body"
                  cols="30"
                  rows="10"
                  className="form-control"
                ></textarea>
              </div>
              {this.state.isLoading ? (
                <Spinner color="secondary" />
              ) : (
                <button
                  onClick={this.onSubmit}
                  className="btn btn-secondary"
                  style={{ backgroundColor: "#343a40" }}
                >
                  <FontAwesomeIcon icon={faSave} /> Simpan
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CreatePostContainer);
