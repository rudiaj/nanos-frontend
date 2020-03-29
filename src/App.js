import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Campaigns } from "./components";
import { paths } from "./constants";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
`;
const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Switch>
          <Route exact path={paths.client.BASE} component={Campaigns} />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;
