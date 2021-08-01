import React from "react"
import Layout from '../components/layout/Layout'
import BackPicture from "../components/BackPicture"
import TopCategory from "../components/TopCategory"
import styled from 'styled-components'

const Spacer = styled.span`
  display: block;
  height: 100vh;
  @media screen and (max-width: 1000px) {
    max-height: 600px;
  }
`

function Index() {
    return (
        <Layout>
          <BackPicture />
          <Spacer />
          <TopCategory />
        </Layout>
    );
}

export default Index;
