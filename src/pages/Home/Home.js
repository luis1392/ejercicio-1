import React from "react";
import Layout from "../../components/Layout";
import { Container } from "../../styles/Grid";
import List from "../../components/List";

const Home = () => {
  return (
    <Layout>
      <Container>
        <List />
      </Container>
    </Layout>
  );
};

export default Home;
