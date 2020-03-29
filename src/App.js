import React from "react";
import styled from "styled-components";

import { Campaigns } from "./components";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 0 15px;
  display:flex;
  flex-direction:column;
`;
const App = () => {
  return (
    <Wrapper>
      <Campaigns />
    </Wrapper>
  );
};

export default App;
