import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

const Header = ({ orders }) => {
  let count = orders.reduce((total, order) => (total += order.quantity), 0);
  let [active, onActive] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", function() {
      if (window.innerWidth > 768) {
        onActive(false);
      }
    });
  });
  let handleOpen = () => {
    active ? onActive(false) : onActive(true);
  };

  return (
    <div className={`header`}>
      <div className={classNames(`wrapper`, { open: active })}>
        <label htmlFor={`cart`} className={`cart-btn`} onClick={handleOpen}>
          <FontAwesomeIcon icon="shopping-cart" />
          <span>My Cart</span> ( {count} )
        </label>
        <ul className={`cart-list`}>
          {count ? (
            orders.map((order, key) => (
              <li className="cart" key={key}>
                <div className="cart-image">
                  <img src={order.image} alt={order.name} />
                </div>
                <div className="cart-details">
                  <p className="cart-name">{order.name}</p>
                  <p className="cart-summary">
                    <span className="cart-quantity">{order.quantity}</span>x
                    <span className="cart-price">
                      ${order.price.toFixed(2)}
                    </span>
                  </p>
                  <p className="cart-size">Size: {order.sizes}</p>
                </div>
              </li>
            ))
          ) : (
            <li className={`no-cart`}>Please add items to your cart.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
