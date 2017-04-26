import React, { Component } from 'react';
import App from './App';
import OrderItem from './OrderItem';
import ProductIdem from './ProductIdem';



export default class Thumbnail extends Component {
  render() {
    return (

      <div style={{margin: 20}}>
          <img style={{width: 150, height: 250}} src={this.props.url} alt=""/>
      </div>



    );
  }
}
