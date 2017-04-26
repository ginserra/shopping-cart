import React, { Component } from 'react';
import App from './App';
import OrderItem from './OrderItem';

export default class ProductIdem extends Component {
  render() {
    return (


          <div style={{ display: "center",padding:10}}>
            <h2>{this.props.title}</h2>
            <h3>{this.props.price} Euro</h3>

          </div>



    );
  }
}
