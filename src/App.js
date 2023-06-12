// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import Navabar from './components/Navabar';
import News from './components/News';

export default class App extends Component {
  pageSize = 9;
  render() {
    return (
           <BrowserRouter>
      <div>
        <Navabar/>
      <Routes>
        <Route exact path="/" element={<News key="general" pageSize= {this.pageSize} country='in' category = 'general' />}/>
        <Route exact path="/business" element={<News key="business" pageSize= {this.pageSize} country='in' category = 'business' />} />
        <Route exact path="/sports" element={<News key="sports" ageSize= {this.pageSize} country='in' category = 'sports' />} />
        <Route exact path="/entertainment" element={<News key="entertainment"pageSize= {this.pageSize} country='in' category = 'entertainment' />} />
        <Route exact path="/health" element={<News key="health"pageSize= {this.pageSize} country='in' category = 'health' />} />
        <Route exact path="/science" element={<News key="science"pageSize= {this.pageSize} country='in' category = 'science' />} />
        <Route exact path="/technology" element={<News key="technology"pageSize= {this.pageSize} country='in' category = 'technology' />} />
        <Route exact path="*" element={<News pageSize= {this.pageSize} country='in' category = 'general' />} />
      </Routes>
        {/* <News pageSize= {this.pageSize} country='in' category = 'science'/> */}
      </div>
    </BrowserRouter>
    )
  }
}

