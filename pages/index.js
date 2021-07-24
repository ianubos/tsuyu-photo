import React from "react";
import Layout from '../components/layout/Layout'
import BackPicture from "../components/BackPicture";
import TopCategory from "../components/TopCategory";

const Spacer = () => <span className="h-96 sm:h-screen block" style={{minHeight: 600}}></span>;

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
