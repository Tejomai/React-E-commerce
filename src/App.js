import React, {Component} from 'react';
import './App.css';
import axios from "axios";
import Products from "./components/Products.js";
import Filter from "./components/Filter.js";
import Basket from './components/Basket';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {products:[], filterProducts:[], cartItems:[]};
    this.handleChangeSort = this.handleChangeSort.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.handleCart = this.handleCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }
  componentDidMount(){
    axios.get("http://localhost:5000/products")
    .then(response => this.setState({
      products : response.data,
      filterProducts: response.data
    }))
    .catch(error => {
      console.log(error);
    })
    //if(localStorage.getItem("cartItems")){
      //this.setState({cartItems: JSON.parse(localStorage.getItem("cartItem"))});
    //}
    /*fetch("http://localhost:3000/products", {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      } 
    }).then(res => res.json())
     .then(data => this.setState({
       products : data,
       filterProducts: data
     })); */
  }
  handleChangeSort(e){
    this.setState({sort: e.target.value});
    this.listProducts();
  }
  handleChangeSize(e){
    this.setState({size: e.target.value});
    this.listProducts();
  }
  listProducts(){
    this.setState(state => {
      if(state.sort !== ""){
        state.products.sort((a,b)=>(state.sort === "lowest")?(a.price<b.price?1:-1):(a.price>b.price?1:-1))
        //console.log(state.products);
      }
      else{
        state.products.sort((a,b) => (a.id<b.id) ? 1 : -1)
      }
      if(state.size !== ""){
        return {filterProducts: state.products.filter(a=>
          a.availableSize.indexOf(state.size.toUpperCase())>=0)}
      }
      return this.setState({filterProducts: state.products});
    })
  }
  handleCart(e, prod){
    this.setState(state =>{
      const cartItems = state.cartItems;
      let prodInCart = false;
      cartItems.forEach(element => {
        if(element.id === prod.id){
          prodInCart = true;
          element.count++;
        }
      });
      if(!prodInCart){
        cartItems.push({...prod, count:1});
      }
      localStorage.setItem("cartItems",JSON.stringify(cartItems));
      return cartItems;
    })
  }
  handleRemoveFromCart(e, item){
    this.setState(state => {
      const cartItems = state.cartItems.filter(ele => ele.id !== item.id);
      localStorage.setItem("cartItems", cartItems);
      return {cartItems};
    })
  }
  render() {
    return (
      <div className="container p-5">
      <h1 className="text-center"> Sample Ecommerce shopping cart application</h1>
      <hr/>
      <div className="row">
        <div className="col-md-8">
          <Filter size={this.state.size} sort={this.state.sort} handleChangeSize={this.handleChangeSize}
          handleChangeSort={this.handleChangeSort} count={this.state.filterProducts.length} />
          <hr/>
          <Products products={this.state.filterProducts} handleCart={this.handleCart} />
        </div>
        <div className="col-md-4">
          <Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart} />
        </div>
      </div>
    </div>
    );
  }
}
export default App;
