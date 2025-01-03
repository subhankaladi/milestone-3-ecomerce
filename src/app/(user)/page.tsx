import Container from "@/components/Container";
import React from "react";
import Banner from "@/components/Banner";
// import Facilities from "@/components/Facilities";
import ProductList from "@/components/ProductList";
import Air from "@/components/Air";
import Man from "@/components/Man";

const Home = async () => {
  return (
    <Container className="py-10">
      <Banner />
      {/* <Facilities /> */}
      <ProductList />
      <Air/>
      <Man/>
      <ProductList/>

    </Container>
  );
};

export default Home;
