import * as React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Index from "../../pages/Index";
import About from "../../pages/About";

const Container = styled.div`
  h1 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

const App: React.FC = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Container>
  );
};

export default App;
