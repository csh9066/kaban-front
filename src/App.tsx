import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import Board from "./pages/Board";
import palette from "./lib/palette";
import BoardList from "./pages/BoardList";

function App() {
  return (
    <Container>
      <Header />
      <Switch>
        <Route path="/" exact component={BoardList} />
        <Route path="/b/:id" component={Board} />
      </Switch>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: auto;
  background-color: ${palette.blue};
`;

export default App;
