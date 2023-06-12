import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spiner from "./spiner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 18,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.captalizeFirst(this.props.category)}-NewsMonkey`;
  }
  captalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  async updateNews(page) {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f7a2b00e79c84745a994fef6c043c177&page=${page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      loading: false,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    console.log(parsedData);
  }

  async componentDidMount() {
    this.updateNews(this.state.page);
  }

  handleNextCLick = async () => {
    let nextPage = this.state.page + 1;
    this.setState({
      page: nextPage,
    });
    this.updateNews(nextPage);
  };

  handlePrevCLick = async () => {
    let prevPage = this.state.page - 1;
    this.setState({
      page: prevPage,
    });
    this.updateNews(prevPage);
  };


  fetchMoreData = async()=>{
    let nextPage = this.state.page + 1;
    this.setState({
      page: nextPage,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f7a2b00e79c84745a994fef6c043c177&page=${nextPage}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  }


  render() {
    return (
      <>
          <h1 className="text-center">
            Top{" "}{this.props.category === "general"? "": this.captalizeFirst(this.props.category)}{" "}Headlines
          </h1>
          {this.state.loading && <Spiner/>}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spiner/>}
          >
            <div className="container">
            <div
              className="row row-cols-1 row-cols-md-3 g-4 my-3"
              id="newsaccordion"
            >
              {this.state.articles &&
                this.state.articles.map((elemnet) => {
                  return (
                    <NewsItem
                      key={elemnet.url}
                      title={elemnet.title}
                      desc={elemnet.description}
                      imageUrl={elemnet.urlToImage}
                      newsUrl={elemnet.url}
                      source={elemnet.source.name}
                      date={elemnet.publishedAt}
                    />
                  );
                })}
            </div>
            </div>
          </InfiniteScroll>
        {/* <div className="conatiner d-flex justify-content-around">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevCLick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNextCLick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default News;
