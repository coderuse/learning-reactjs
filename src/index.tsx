import * as React from "react";
import * as ReactDOM from "react-dom";

import { YamApp } from './components/Yam';
import { Utils } from './Helpers';

let accessToken = Utils.get('newAccessToken');

ReactDOM.render(
    <YamApp accessToken={accessToken} />,
  document.getElementById("example")
);