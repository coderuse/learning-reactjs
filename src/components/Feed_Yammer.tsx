/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import {Utils} from "../Helpers";

import {Message, References, User, Group} from '../models/Yammer';

export interface FeedItemProp { message: Message, references: References }

export class FeedItem extends React.Component<FeedItemProp, Message> {

  getInitialState() {
    return this.props.message;
  }

  render() {

    var message = this.state;

    let sender = User.Box(this.props.references.getReferenceById(message.sender_type, message.sender_id));
    let group = Group.Box(this.props.references.getReferenceById('group', message.group_created_id));

    return (
      <div className="row">
        <h2>{ sender.full_name }</h2>
        <div dangerouslySetInnerHTML={ message.body } />
        {message.attachments.map(function (attch) {
          return (
            <div className="row">
              <h3>{attch.name}</h3>
              <div dangerouslySetInnerHTML={attch.content} />
            </div>
          );
        }) }
      </div>
    );
  }
}

export interface FeedProp { references: References }

export interface FeedState { messages: Array<Message> }

export class Feed extends React.Component<FeedProp, FeedState> {
  getInitialState() {
    return new Array<Message>();
  }

  render() {
    let self = this;
    return (
      <div className="row">
        {
          this.state.messages.map(function (msg) {
            return <FeedItem message={msg} references={self.props.references} />
          })
        }
      </div>
    );
  }
}