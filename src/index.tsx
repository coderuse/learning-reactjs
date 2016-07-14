import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { ShoppingList } from './components/ShoppingLists';

var itemList = [
  {
    key: 1,
    name: 'Sleeping Bag w/ Stuff Sack',
    quantity: 1,
    price: 44.99
  },
  {
    key: 2,
    name: 'Chocolate Energy Bar',
    quantity: 4,
    price: 2.99 * 4
  },
  {
    key: 3,
    name: '2-Person Polyethylene Tent',
    quantity: 1,
    price: 104.33
  }
];

ReactDOM.render(
  <div className="container">
    <Hello compiler="TypeScript" framework="React" />
    <ShoppingList items={itemList} />
  </div>,
  document.getElementById("example")
);