import './App.css';
import React, { Component } from 'react';
import data from './quotes.json';
import {FaTwitter} from "react-icons/fa";
import {FaQuoteLeft} from "react-icons/fa";

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

class App extends Component {
  state = {
    clr: {
      color: null
    },
    bgr_clr: {
      backgroundColor: null
    },
    quoteFull: {
      quote: null,
      author: null
    }
  };

  newQuote = () => {

    let clrs = colors[Math.floor(Math.random() * colors.length)];

    this.setState({
      clr: {color: clrs}
    });
  
    this.setState({
      bgr_clr: {backgroundColor: clrs}
    });
  
  
    this.setState({
      quoteFull: data.quotes[Math.floor(Math.random() * data.quotes.length)]
    });
  
  };

  componentDidMount(){
    this.newQuote();
  }

  render() { 
    return (
      <div style={this.state.bgr_clr} id="body">
        <div id="quote-box" >
          <div>
            <FaQuoteLeft style={this.state.clr} id="i" />
            <span> </span>
            <span style={this.state.clr} id="text">{this.state.quoteFull.quote}</span>
          </div>
          <div style={this.state.clr} id="author-tag">
            <span>- </span>
            <span id="author">{this.state.quoteFull.author}</span>
          </div>
          <div id="buttons">
            <a href="https://twitter.com/intent/tweet" target="_blank" style={this.state.bgr_clr} id="tweet-quote">
              <FaTwitter id="tweet-icon" />
            </a>
            <button style={this.state.bgr_clr} onClick={this.newQuote} id="new-quote">New Quote</button>
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;