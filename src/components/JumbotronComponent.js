import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h3 className="display-4">{props.title}</h3>
          <p className="lead">Fake API dari gorest.co.in.</p>
          <hr className="my-2" />

          <p className="lead">
            <Link to={"/create"}>
              <Button style={{ backgroundColor: "#343a40" }}>
                {" "}
                Tambah Post <FontAwesomeIcon icon={faCoffee} />
              </Button>
            </Link>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComponent;
