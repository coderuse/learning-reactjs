/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import {Utils} from "../Helpers";

import {Message, User, Group} from '../models/Yammer';
import { YamAPI } from '../api/Yammer';

export interface IFeedItemProp { message: Message, references: Array<any> }

export class FeedItem extends React.Component<IFeedItemProp, Message> {

  constructor(props: IFeedItemProp) {
    super(props);
    this.state = props.message;
  }

  render() {

    var message = this.state;

    let sender = User.Box(Utils.getReferenceById(message.sender_type, message.sender_id, this.props.references));
    let group = Group.Box(Utils.getReferenceById('group', message.group_created_id, this.props.references));

    let innerHtml = {
      __html: message.body
    };

    return (
      <div className="msg">

        <div className="row">
          <div className="header">
            <div className="sender">
              <div className="pic">
                <a href="javascript:void()">
                  <img src={sender.mugshot_url} />
                </a>
              </div>
              <div className="name">
                { sender.full_name }
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div dangerouslySetInnerHTML={ innerHtml } />
          {message.attachments.map(function (attch) {
            console.log(attch.content);
            let attchInnerHtml = {
              __html: attch.content
            };
            return (
              <div key={attch.id} className="row">
                <h3>{attch.name}</h3>
                <div dangerouslySetInnerHTML={attchInnerHtml} />
              </div>
            );
          }) }
        </div>

      </div>
    );
  }
}

export interface IFeedProp {
  api: YamAPI
}

export interface FeedState { references: Array<any>, messages: Array<Message> }

export class Feed extends React.Component<IFeedProp, FeedState> {
  constructor(props: IFeedProp) {
    super(props);
    this.state = {
      references: new Array(),
      messages: new Array<Message>()
    };
  }

  componentDidMount() {
    let p = this.props.api.call('allFeed', {}, { threaded: 'extended', limit: '20' });

    p.done(function (data: any) {

      this.setState({
        references: data.references,
        messages: data.messages.map((msg: any) => { return Message.Box(msg); })
      });

    }.bind(this))
  }

  render() {
    let self = this;
    return (
      <div>
        {
          this.state.messages.map(function (msg) {
            return <FeedItem key={msg.id} message={msg} references={self.state.references} />
          })
        }
      </div>
    );
  }
}