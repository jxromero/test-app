import React, { Component } from "react";

class Product extends Component {
  render() {
    let { product, onChange, onOrder, selectedSize } = this.props;
    return (
      <div className={`product`}>
        <div className={`product-img`}>
          <img src={product.image} alt={product.name} />
        </div>
        <div className={`product-detail`}>
          <h1 className={`product-name`}>{product.name}</h1>
          <p className={`product-price`}>${product.price.toFixed(2)}</p>
          <p className={`product-description`}>{product.description}</p>
          <p className={`product-size`}>
            SIZE<span className="required">*</span>
            <span className="size-selected">{selectedSize}</span>
          </p>
          {!selectedSize ? (
            <p className={`product-note`}>
              Must Select Size<span>*</span>
            </p>
          ) : (
            ""
          )}
          <form onSubmit={onOrder}>
            <ul>
              {product.sizes.map((size, key) => (
                <li key={key}>
                  <input
                    type={`radio`}
                    name={`size`}
                    value={size}
                    id={size}
                    onClick={() => onChange(size)}
                  />
                  <label htmlFor={size}>{size}</label>
                </li>
              ))}
            </ul>
            <button type={`submit`}>Add to cart</button>
          </form>
          <ul />
        </div>
      </div>
    );
  }
}

export default Product;
