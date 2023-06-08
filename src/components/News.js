import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

 async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f7a2b00e79c84745a994fef6c043c177&page=${this.state.page}&pageSize=21`
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles : parsedData.articles , totalResults: parsedData.totalResults});
    console.log(parsedData);
  }

  handleNextCLick = async()=>{
    if(this.state.page+1 > Math.ceil((this.state.totalResults)/20)){

    }
    else{
    console.log("Next Clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f7a2b00e79c84745a994fef6c043c177&page=${this.state.page+1}&pageSize=21`
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        page: this.state.page +1,
        articles : parsedData.articles
    })
}
  } 

  handlePrevCLick = async()=>{
    console.log("Previous Clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f7a2b00e79c84745a994fef6c043c177&page=${this.state.page-1}&pageSize=21`
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        page: this.state.page -1,
        articles : parsedData.articles
    })
  } 

  render() {
    return (
      <div>
        <div className="container ">
          <h2>Top Headlines</h2>
          
          <div
            className="row row-cols-1 row-cols-md-3 g-4 my-3"
            id="newsaccordion"
          >
            {this.state.articles && this.state.articles.map((elemnet) => {
            return <NewsItem key={elemnet.url} title= {elemnet.title} desc = {elemnet.description} imageUrl = {elemnet.urlToImage} newsUrl = {elemnet.url} />
          })}
            
          </div>
        </div>
        <div className="conatiner d-flex justify-content-around">
        <button type="button" disabled = {this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevCLick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextCLick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
