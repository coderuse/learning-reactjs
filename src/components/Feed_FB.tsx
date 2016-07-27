/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as Helpers from "../Helpers";

export interface FeedItemState { story: string, id: string }

export class FeedItem extends React.Component<{}, FeedItemState> {

  render() {
    return (
      <div className="row">
        <div className="row">
          <h3>{this.state.story}</h3>
        </div>
      </div>
    );
  }
}

export interface FeedFBState { feeds: Array<FeedItemState> }

export class FeedFB extends React.Component<{}, FeedFBState> {
  getInitialState() {
    return {
      feeds: new Array<FeedItemState>()
    };
  }

  componentDidMount() {
    FB.init({
      appId: '1232807850064154',
      cookie: true,  // enable cookies to allow the server to access 
      // the session
      xfbml: true,  // parse social plugins on this page
      version: 'v2.5' // use graph api version 2.5
    });
  }

  render() {
    return (
      <div className="row">
        {this.state.feeds.map((feed, i) => {
          return <FeedItem {...feed}></FeedItem>
        }) }
      </div>
    );
  }
}