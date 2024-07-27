import React, { Component } from "react";

import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />

        <Banner />

        <div className="about">
          <div className="pt-5 aboutInfo pe-3 px-3">
            <p style={{ paddingTop: "50px" }}></p>

            <p
              className=""
              style={{
                fontFamily: "Nanum Myeongjo",
                fontSize: "30px",
                fontWeight: "700",
                color: "#000",
              }}
            >
              Our Branding Services
            </p>
            <label className="aboutContent" style={{ color: "#d98631" }}>
              Our cutting-edge branding solution platform is dedicated to
              helping entrepreneurs and professionals establish a unique and
              compelling brand identity.
            </label>
            <br></br>
          </div>
          <div className="container py-4">
            <div className="row">
              <div className="col-lg-4 ">
                <div className="bg-warning p-4 rounded-4"></div>
              </div>
              <div className="col-lg-4 ">
                <div className="bg-warning p-4 rounded-4"></div>
              </div>
              <div className="col-lg-4 ">
                <div className="bg-warning p-4 rounded-4"></div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
