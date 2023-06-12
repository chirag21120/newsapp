import React, { Component } from "react";

export class NewsItem extends Component {
    dif = (element)=>{
        let prevTime = new Date(element).getTime();
        let now = new Date().getTime();
        let diff = (now-prevTime)/1000;
        // console.log(prevTime,now,diff);
        if(diff<61)
        return diff+'sec';
        if(diff>60 && diff<3600){
            return parseInt(diff/60)+'min';
        }
        if(diff>=3600 && diff<86400){
            return parseInt(diff/(60*60))+'hours'
        }
        if(diff>=8400 && diff<604800){
            return parseInt(diff/(60*60*24))+' day'
        }
        if(diff>=604800){
            return parseInt(diff/(60*60*24*7))+'week'
        }
        return diff;
    }
  render() {
    let {title, desc , imageUrl, newsUrl,source,date} = this.props;
    return (
      <div>
         <div className="col">
        <a href={newsUrl}  target="_blank" rel="noreferrer">
        <div className="card hoverCard" >
          <img src={!imageUrl?'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fillustrations%2Fnews-headlines-newsletter-636978%2F&psig=AOvVaw3mPdGPGMATDnRn2LdrsHEN&ust=1686319016545000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCk0Ivqs_8CFQAAAAAdAAAAABAD':imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-text">
              {title}
            </h5>
            <p className="desc">
            {desc}
            </p>
            <p className="card-text"><small className="text-muted"> <strong>{source}</strong>, {this.dif(date)} ago</small></p>
          </div>
        </div>
        </a>
      </div>
      </div>
    );
  }
}

export default NewsItem;
