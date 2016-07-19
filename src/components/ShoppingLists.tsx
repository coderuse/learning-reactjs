/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as Helpers from "../Helpers";

export interface ShoppingItemProps { name: string, price: number, quantity: number }

export class ShoppingItem extends React.Component<ShoppingItemProps, {}> {
  render() {
    return <table className="table">
      <tbody>
        <tr>
          <td colSpan="2"><h3>{this.props.name}</h3></td>
        </tr>
        <tr>
          <td>Price</td>
          <td>{Helpers.Utils.priceToUSDString(this.props.price) }</td>
        </tr>
        <tr>
          <td>Quantity</td>
          <td>{this.props.quantity}</td>
        </tr>
      </tbody>
    </table>;
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps(newProps: any) {
    console.log(newProps);
  }
  componentWillUpdate(newProps: any, newState: any) {
    console.log(newProps);
    console.log(newState);
  }
  componentDidUpdate(oldProps: any, oldState: any) {
    console.log(oldProps);
    console.log(oldState);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
}

export interface ShoppingPriceTotalProps { items: Array<{ price: number }> }

export class ShoppingPriceTotal extends React.Component<ShoppingPriceTotalProps, {}> {
  render() {
    return <table className="table">
      <tbody>
        <tr>
          <td><strong>Total</strong></td>
          <td>{this.props.items.reduce((a, b) => a + b.price, 0) }</td>
        </tr>
      </tbody>
    </table>;
  }
}

export interface ShoppingListProps { items: Array<{ key: number, name: string, price: number, quantity: number }> }

export class ShoppingList extends React.Component<ShoppingListProps, {}> {
  render() {
    return <div>
      {this.props.items.map((row, i) => {
        return <ShoppingItem {...row}> </ShoppingItem>;
      }) }
      <ShoppingPriceTotal items={this.props.items}></ShoppingPriceTotal>
    </div>;
  }
}