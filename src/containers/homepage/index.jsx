import React, { useState } from "react";
import styled from "styled-components";
import "./index.css";
import Listing from "../../Components/MoviesCards/Listing";
import { Header } from "./header";
import { ServicesSection } from "./servicesSection";

const PageContainer = styled.div`
  min-width: 100%;
  height: calc(100% - 80px);
  max-width: '100%';
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

function Homepage() {
  return (
    <>
      {/* <PageContainer style={contentStyle}> */}
        <Header/>
        <ServicesSection/>
      {/* </PageContainer> */}
    </>
  );
}

export default Homepage;