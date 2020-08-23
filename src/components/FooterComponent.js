import React, { useState } from "react";
import { Navbar } from "reactstrap";

const FooterComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="lg">
        <div
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: "4em",
          }}
        >
          <div
            style={{
              textAlignVertical: "center",
              textAlign: "center",
              color: "#fff",
            }}
          ></div>
        </div>
      </Navbar>
    </div>
  );
};

export default FooterComponent;
