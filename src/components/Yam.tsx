/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import {Utils} from "../Helpers";

import { Feed } from './Feed';

import {Message, References, User, Group} from '../models/Yammer';
import { YamAPI } from '../api/Yammer';

export interface IYamAppProp {
  accessToken: string
}

export interface IYamAppState {
  currentUser: User
}

export class YamApp extends React.Component<IYamAppProp, IYamAppState> {
  api: YamAPI;
  constructor(props: IYamAppProp) {
    super(props);

    this.state = {
      currentUser: new User()
    };

    this.api = new YamAPI(props.accessToken);
  }

  componentDidMount() {
    let p = this.api.call('currentUser', {});

    p.done(function (data: any) {
      
      this.setState({
        currentUser: User.Box(data)
      });

    }.bind(this))
  }

  render() {
    return (
      <div>
        <div id="header">
          <img className="circle" src={this.state.currentUser.mugshot_url} />
        </div>
        <div id="content">
          <Feed api={ this.api }/>
        </div>
        <div id="footer">
          <a href="javascript:void();" className="active">
            <span className="yamcon-home" />
          </a>
          <a href="javascript:void();">
            <span className="yamcon-markunread" />
          </a>
          <a href="javascript:void();">
            <span className="yamcon-notifications" />
          </a>
          <a href="javascript:void();">
            <span className="yamcon-people" />
          </a>
          <a href="javascript:void();">
            <span className="yamcon-wc" />
          </a>
          <a href="javascript:void();">
            <span className="yamcon-view_headline" />
          </a>
          <a href="javascript:void();">
            <span className="yamcon-info" />
          </a>
        </div>
      </div>
    );
  }
}