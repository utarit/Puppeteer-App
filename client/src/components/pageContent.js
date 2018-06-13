import React, { Component } from 'react';
import "./pageContent.css";

class PageContent extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }



  render() {
    return (
      <div>
        <h2> For the Freedom of Scotland please fill the form </h2>
        <form action="http://localhost:5000/api/puppeteer" method="POST">
          <input placeholder="Enter a name for your file" className="textbox" type="text" name="name" />
          <input placeholder="Enter the url" className="textbox" type="text" name="link" />
          <div id="radio-container">
            <input type="radio" name="option" value="pdf" /> PDF 
            <input type="radio" name="option" value="ss" /> SCREENSHOT
            <input type="radio" name="option" value="dom" /> DOM
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}




export default PageContent;
