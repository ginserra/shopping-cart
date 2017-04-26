import React, { Component } from 'react';
import './App.css';
import Thumbnail from './Thumbnail';
import ProductIdem from'./ProductIdem';
import OrderItem from'./OrderItem';


class App extends Component {
  state ={totale:0}

quantitaCambiata(amount){
  console.log("quantità cambiata",amount);
  this.setState({totale:this.state.totale+amount});


}


  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>MY SHOPPING</h2>
        </div>
        <OrderItem
          url="http://www.coffeeurope.eu/news/levissima_nat1nuova-2009-bi.jpg"
          price={1.00}
          product="Acqua Minerale Levissima"
          onQuantityChange={this.quantitaCambiata.bind(this)}

        />
        <OrderItem
          product="Acqua Minerale Santa Anna"
          url="http://nonsolosalute.cotons.it/wp-content/uploads/2011/03/acqua-sant-anna.jpg"
          price={0.60}
          onQuantityChange={ (amount)=> this.setState({totale:this.state.totale+amount})}

        />
        <OrderItem
          product="Acqua Minerale Vera"
          url="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ9yLVy-BcqL9yEtElYpJ0LGcVr7n6IPAAyYmcVez_2F8b1N-d7"
          price={0.90}
          onQuantityChange={this.quantitaCambiata.bind(this)}

        />
      <div>
        <h3>TOTALE: {this.state.totale}</h3>

      </div>


      </div>


    );
  }
}

export default App;
