import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import BoardsPage from "./pages/boards";
import palette from "./lib/palette";
import IndexPage from "./pages";

function App() {
  return (
    <StyeldApp>
      <Header />
      <Switch>
        <Route path="/index" component={IndexPage} />
        <Route path="/" component={BoardsPage} />
      </Switch>
    </StyeldApp>
  );
}

const StyeldApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: auto;
  background-color: ${palette.blue};
`;

export default App;
