import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Head from "../components/Head/Head";
import { useAppState } from "../store/appState";

const Wrapper = styled.div``;

interface Props {}

const Index: React.FC<Props> = () => {
  const { count, increaseCount, resetCount } = useAppState();

  return (
    <Wrapper>
      <Head title="Counter App | Index" />
      <h1>Index</h1>
      <p>Count {count}</p>
      <div>
        <button onClick={increaseCount}>+</button>
        <button onClick={resetCount}>Reset</button>
      </div>
      <Link to="/about">About</Link>
    </Wrapper>
  );
};

export default Index;
