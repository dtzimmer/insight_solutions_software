import React, { Component } from "react";
import "./App.css";

class HomePage extends Component {
  render() {
    return (
      <div className="background">
        <h2>Software Solutions for Window and Door Distributors</h2>

        <section className="products-section">
          <h2>We offer Mobile and Web Applications for Managing:</h2>
          <div className="product-rows">
            {/* <div className="container">
            <div className="row"> */}
            {/* <div className="col-md"> */}
            <div className="product-box">
              <h5>Estimates and Quotes</h5>
              <div className="icons">
                <i className="fas fa-file-invoice-dollar" />
              </div>
            </div>
            {/* </div> */}
            {/* <div className="col-md"> */}
            <div className="product-box">
              <h5>Purchase Orders</h5>
              <div className="icons">
                <i className="fas fa-file-invoice" />
              </div>
            </div>
            {/* </div> */}
            {/* </div>
          </div> */}
          </div>
          <div className="product-rows">
            {/* <div className="row"> */}
            {/* <div className="col-md"> */}
            <div className="product-box">
              <h5>Deliveries and Installation</h5>
              <div className="icons">
                <i className="fas fa-truck" />
              </div>
            </div>
            {/* </div> */}
            {/* <div className="col-md"> */}
            <div className="product-box">
              <h5>Financial Tracking</h5>
              <div className="icons">
                <i className="fas fa-hand-holding-usd" />
              </div>
            </div>
            {/* </div> */}
            {/* </div> */}
          </div>
          {/* <div className="container">
            <div className="row">
              <div className="col-md"> */}
          <div className="andmore-box">
            <h5>and more...</h5>
            <div className="icons">
              <i className="fas fa-laptop" />
            </div>
          </div>
          {/* </div>
            </div>
          </div> */}
        </section>

        <h2>Contact Us</h2>

        <div className="container">
          <div className="row">
            <div className="col-md">
              <div className="form-section">
                <form
                  action="https://formspree.io/daniel.zimmerman@gmail.com"
                  method="POST"
                >
                  <input type="text" name="name" placeholder="Name" />
                  <input type="email" name="_replyto" placeholder="Email" />
                  <input type="text" name="message" placeholder="Comments" />
                  <input type="submit" value="Send" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
