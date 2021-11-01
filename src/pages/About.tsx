import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppState } from "../store/appState";
import Head from "../components/Head/Head";

const Wrapper = styled.div``;

interface Props {}

const About: React.FC<Props> = () => {
  const { count } = useAppState();

  return (
    <Wrapper>
      <Head title="Counter App | Index" />
      <h1>About</h1>
      <p>Count Is Still: {count}</p>
      <Link to="/">Home</Link>
    </Wrapper>
  );
};

export default About;
