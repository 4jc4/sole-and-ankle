import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import ShoeIndex from "./components/ShoeIndex";

export function App() {
  const [sortId, setSortId] = React.useState("newest");
  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 64px 32px;
`;
