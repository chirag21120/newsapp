import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, desc , imageUrl, newsUrl} = this.props;
    return (
      <div>
         <div className="col">
        <a href={newsUrl}  target="_blank" rel="noreferrer">
        <div className="card hoverCard" >
          <img src={!imageUrl?'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fillustrations%2Fnews-headlines-newsletter-636978%2F&psig=AOvVaw3mPdGPGMATDnRn2LdrsHEN&ust=1686319016545000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCk0Ivqs_8CFQAAAAAdAAAAABAD':imageUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-text">
              {title}
            </h5>
            <p>
            {desc}
            </p>
          </div>
        </div>
        </a>
      </div>
      </div>
    );
  }
}

export default NewsItem;
