import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { Link } from "react-router-dom";
import PostDataService from "../services/PostService";
import swal from "sweetalert";

const { SearchBar } = Search;

const onDelete = (id) => {
  swal({
    title: "Adakah anda yakin?",
    text: "",
    icon: "",
    dangerMode: true,
    buttons: {
      confirm: "Ya",
      cancel: "Batalkan",
    },
  }).then((willDelete) => {
    if (willDelete) {
      PostDataService.remove(id)
        .then((rest) => {
          window.location.reload();
        })
        .catch((err) => {});
    } else {
      swal.close();
    }
  });

  console.log("test", id);
};

const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
    headerStyle: () => {
      return { width: "10%", backgroundColor: "lightgrey", fontSize: "20px" };
    },
  },
  {
    dataField: "user_id",
    text: "USER",
    // sort: true,
    headerStyle: () => {
      return { width: "21%", backgroundColor: "lightgrey", fontSize: "20px" };
    },
  },
  {
    dataField: "title",
    text: "JUDUL",
    // sort: true,
    headerStyle: () => {
      return { fontSize: "20px", backgroundColor: "lightgrey" };
    },
  },
  {
    dataField: "link",
    text: "AKSI",
    headerStyle: () => {
      return { width: "35%", fontSize: "20px", backgroundColor: "lightgrey" };
    },
    formatter: (rowContent, row) => {
      return (
        <div>
          <Link to={"detail/" + row.id}>
            <Button color="dark" className="m-2">
              <FontAwesomeIcon icon={faInfo} /> Detail
            </Button>
          </Link>
          <Link to={"edit/" + row.id}>
            <Button color="dark" className="m-2">
              <FontAwesomeIcon icon={faEdit} /> Edit
            </Button>
          </Link>

          <Button
            onClick={() => {
              onDelete(row.id);
            }}
            color="dark"
            className="m-2"
          >
            <FontAwesomeIcon icon={faTrash} /> Padam
          </Button>
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const CaptionElement = () => (
  <h3
    style={{
      borderRadius: "0.5em",
      color: "black",
      textAlign: "center",
      border: "1px solid grey",
      padding: "0.5em",
    }}
  >
    POST LIST
  </h3>
);

const pageButtonRenderer = ({ page, active, onPageChange }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onPageChange(page);
  };
  const activeStyle = {};
  if (active) {
    //   activeStyle.backgroundColor = 'black';
    activeStyle.color = "gray";
  } else {
    //   activeStyle.backgroundColor = 'gray';
    activeStyle.color = "black";
  }
  if (typeof page === "string") {
    //   activeStyle.backgroundColor = 'white';
    activeStyle.color = "black";
  }
  return (
    <div className="p-3">
      <li className="page-item">
        <a href="#" onClick={handleClick} style={activeStyle}>
          {page}
        </a>
      </li>
    </div>
  );
};

const options = {
  pageButtonRenderer,
};

const TableComponent = (props) => {
  return (
    <div>
      <Container>
        <ToolkitProvider
          keyField="id"
          caption={<CaptionElement />}
          bootstrap4
          keyField="id"
          data={props.posts}
          columns={columns}
          defaultSorted={defaultSorted}
          striped
          hover
          condensed
          search
        >
          {(props) => (
            <div>
              <div className="float-right">
                <SearchBar {...props.searchProps} placeholder="Carian ..." />
              </div>

              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory(options)}
              />
            </div>
          )}
        </ToolkitProvider>
      </Container>
    </div>
  );
};

export default TableComponent;
