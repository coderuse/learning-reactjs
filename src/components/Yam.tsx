/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import {Utils} from "../Helpers";

import { feedNavs } from '../Constants';

import {Message, References, User, Group} from '../models/Yammer';
import { YamAPI } from '../api/Yammer';

import { Feed } from './Feed';
import { NavPills, INav } from './Navs';

export interface IYamAppProp {
  accessToken: string
}

export interface IYamAppState {
  currentUser: User
}

export class YamApp extends React.Component<IYamAppProp, IYamAppState> {
  api: YamAPI;
  navs: Array<INav>;
  constructor(props: IYamAppProp) {
    super(props);

    this.state = {
      currentUser: new User()
    };

    this.api = new YamAPI(props.accessToken);
  }

  navClicked(id: string) {
    (this.refs['feed'] as Feed).changeState(id);
    console.log(id);
  }

  componentDidMount() {
    (this.refs['headerPills'] as NavPills).changeNavs(feedNavs);

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

          <NavPills ref="headerPills" navClicked={ this.navClicked.bind(this) } />
        </div>
        <div id="content">
          <Feed ref="feed" api={ this.api } stateId="all"/>
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