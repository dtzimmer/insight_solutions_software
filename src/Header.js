import React, { Component } from 'react';
import './App.css';
import banner from './InsightSolutionsSoftware.png'

class HeaderofPage extends Component {
  render() {
    return (
      <div>
      <img src={banner} alt="banner" className="banner"/>
    </div>
    );
  }
}

export default HeaderofPage;