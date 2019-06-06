import React, { Component } from "react";

import Header from "./components/header";
import Product from "./components/product";

import ShirtImg from "./assets/images/classic-tee.jpg";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart);

class App extends Component {
  state = {
    product: {
      id: 1,
      name: "Classic Tee",
      image: ShirtImg,
      price: 75,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae suscipit assumenda voluptatem rerum repellendus fugit inventore ad, delectus officiis nam magni praesentium officia, temporibus nostrum. dolor sit amet consectetur adipisicing elit.Accusantium cumque in odio tempore!",
      sizes: ["S", "M", "L"]
    },
    orders: [],
    selectedSize: null
  };

  handleOrder = e => {
    e.preventDefault();
    let orders = [...this.state.orders];
    let product = { ...this.state.product };
    product.sizes = this.state.selectedSize;
    let index = orders.findIndex(
      order =>
        order.id === product.id && order.sizes === this.state.selectedSize
    );
    if (this.state.selectedSize) {
      if (index === -1) {
        product.quantity = 1;
        this.setState({ orders: [...orders, product] });
      } else {
        orders[index].quantity = orders[index].quantity + 1;
        this.setState({ orders: orders });
      }
    }
  };

  handleChange = size => {
    this.setState({ selectedSize: size });
  };

  render() {
    let { product, orders, selectedSize } = this.state;
    return (
      <div className={`main`}>
        <Header orders={orders} />
        <Product
          product={product}
          onOrder={e => this.handleOrder(e)}
          onChange={this.handleChange}
          selectedSize={selectedSize}
        />
      </div>
    );
  }
}

export default App;
