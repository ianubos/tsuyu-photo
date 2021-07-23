import React from "react";
import Layout from '../components/layout/Layout'
import BackPicture from "../components/BackPicture";
import MainContent from "../components/MainContent";

const Spacer = () => <span className="h-screen block"></span>;

function Index() {
    return (
        <Layout>
          <BackPicture />
          <Spacer />
          <MainContent />
        </Layout>
    );
}

export default Index;
