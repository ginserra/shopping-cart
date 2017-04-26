import React, { Component } from 'react';
import './App.css';
import Thumbnail from './Thumbnail';
import ProductIdem from './ProductIdem';








export default class OrderItem extends Component {



  constructor(props) {
          super(props)

          this.state = {
              quantita: 0
              ,totale_order:0

          }

          this.clickAdd = this.clickAdd.bind(this);
          this.clickRemove = this.clickRemove.bind(this);
          this.Repeat = this.Repeat.bind(this);



      }

      Repeat(){
        console.log("sto per montare", this.state.quantita);



      }



    clickAdd() {

          this.setState({quantita: this.state.quantita + 1});


          this.setState({totale_order:(this.state.quantita + 1)*this.props.price});
          this.props.onQuantityChange(this.props.price);


  }

  clickRemove() {

        if(this.state.quantita > 0)
        {
           this.setState({quantita: this.state.quantita - 1});
           this.setState({totale_order:this.state.totale_order-this.props.price});
           this.props.onQuantityChange(-this.props.price);

        }
        else{

          this.setState({quantita: 0});
          this.setState({totale_order:0});
        }




}





  render() {
    return (

        <div style={{ display: "flex", justifyContent: "flex-start", padding: 10, border: "solid"}}>
          <Thumbnail url={this.props.url}/>

          <ProductIdem
            title={this.props.product}
            price={this.props.price} />
          <div style={{padding:20}}>
            <div>Quantità: {this.state.quantita}</div>

            <div>
                  <button onClick={this.clickAdd}>
                    Add
                  </button>
                  <button onClick={this.clickRemove}>
                    Remove
                  </button>
            </div>


          </div>

          <div id="id_total"style={{padding:20}}>
            Totale: {this.state.totale_order}
          </div>

        </div>




    );
  }
}
