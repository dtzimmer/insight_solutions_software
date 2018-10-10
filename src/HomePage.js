import React, { Component } from "react";
import "./App.css";

class HomePage extends Component {
  render() {
    return (
      <div className="background">
        <h2>Software for Window and Door Distributors</h2>
        <div className="container">
          <div className="row">
            <div className="col-md">
              <div className="mission-box">
                <h5>Company Mission</h5>
                <p>
                  Offering software solutions for the Window and Door
                  distribution industry.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="products-section">
          <h2>Products</h2>
          <p>Mobile and web applications for managing...</p>
          <div className="container">
            <div className="row">
              <div className="col-md">
                <div className="product-box">
                  <h5>Estimates and quotes</h5>
                  <div className="icons">
                    <i className="fas fa-file-invoice-dollar" />
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="product-box">
                  <h5>Purchase Orders</h5>
                  <div className="icons">
                    <i className="fas fa-file-invoice" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md">
                <div className="product-box">
                  <h5>Deliveries and Installation</h5>
                  <div className="icons">
                    <i className="fas fa-truck" />
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="product-box">
                  <h5>Financial Tracking</h5>
                  <div className="icons">
                    <i className="fas fa-hand-holding-usd" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md">
                <div className="product-box">
                  <h5>and more...</h5>
                  <div className="icons">
                    <i className="fas fa-laptop" />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
