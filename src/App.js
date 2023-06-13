// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import Navabar from './components/Navabar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 9;
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress :0
  }

  setProgress = (progress)=>{
    this.setState({progress : progress})
  }
  render() {
    return (
           <BrowserRouter>
      <div>
        <Navabar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route exact path="/" element={<News setProgress = {this.setProgress}  apiKey= {this.apiKey} key="general" pageSize= {this.pageSize} country='in' category = 'general' />}/>
        <Route exact path="/business" element={<News setProgress = {this.setProgress}  apiKey= {this.apiKey} key="business" pageSize= {this.pageSize} country='in' category = 'business' />} />
        <Route exact path="/sports" element={<News setProgress = {this.setProgress}  apiKey= {this.apiKey} key="sports" ageSize= {this.pageSize} country='in' category = 'sports' />} />
        <Route exact path="/entertainment" element={<News setProgress = {this.setProgress}  apiKey= {this.apiKey} key="entertainment"pageSize= {this.pageSize} country='in' category = 'entertainment' />} />
        <Route exact path="/health" element={<News setProgress = {this.setProgress}  apiKey= {this.apiKey} key="health"pageSize= {this.pageSize} country='in' category = 'health' />} />
        <Route exact path="/science" element={<News setProgress = {this.setProgress}  apiKey= {this.apiKey} key="science"pageSize= {this.pageSize} country='in' category = 'science' />} />
        <Route exact path="/technology" element={<News setProgress = {this.setProgress}  apiKey= {this.apiKey} key="technology"pageSize= {this.pageSize} country='in' category = 'technology' />} />
        <Route exact path="*" element={<News setProgress = {this.setProgress}  apiKey= {this.apiKey} pageSize= {this.pageSize} country='in' category = 'general' />} />
      </Routes>
        {/* <News setProgress = {this.setProgress}  pageSize= {this.pageSize} country='in' category = 'science'/> */}
      </div>
    </BrowserRouter>
    )
  }
}

