import React from 'react';

import {connect} from "react-redux";

// import PrivateRoute from '../Main/Parts/PrivateRoute';

function ProductList (props) {
  return (
    <ul className="products-list">{
      props.products.productsArray.map((item, index) =>
        item.title.toLowerCase().includes(props.title.toLowerCase()) === true ?
        <li className="product" key={index}>
          <div className="product-image">
            <img src={item.img}></img>
          </div>
          <div className="product-description">
            <div className="title">
                <h3>{item.title}</h3>
                <div className="volume">{item.volume}</div>
            </div>
            <div className="price">
              <div className="price">{item.price}</div>
            </div>
          </div>
        </li> : ''
      )
    }</ul>
  )
}

const mapStateToProps = (state) => ({
  products: state.products
})

export default connect(mapStateToProps)(ProductList);