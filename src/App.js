import React from "react";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import JumbotronComponent from "./components/JumbotronComponent";
import { Route, BrowserRouter } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CreatePostContainer from "./containers/CreatePostContainer";
import EditPostContainer from "./containers/EditPostContainer";
import DetailPostContainer from "./containers/DetailPostContainer";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <NavbarComponent />
      <BrowserRouter>
        <Route path="/" exact>
          <JumbotronComponent title="Posts" />
          <HomeContainer />
        </Route>
        <Route path="/create" exact>
          <CreatePostContainer />
        </Route>
        <Route path="/edit/:id" exact>
          <EditPostContainer />
        </Route>
        <Route path="/detail/:id" exact>
          <DetailPostContainer />
        </Route>
      </BrowserRouter>
      <FooterComponent />
    </div>
  );
}

export default App;
