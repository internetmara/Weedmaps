import React from "react";

class OrderIndexItem extends React.Component {
  render() {
    const { id, prod_name, dispo_name, quantity, url, dispo_id, prod_id } = this.props
    return(
      <div className="order-products">
        <h1 className="prod_name">{prod_name}</h1>
        <h1 className="id">{id}</h1>
        <h1 className="dispo_name">{dispo_name}</h1>
        <h1 className="quantity">{quantity}</h1>
        <img className="order-image" src={url}/>
        <h1 className="dispo_id">{dispo_id}</h1>
        <h1 className="prod_id">{prod_id}</h1>
      </div>
    )
  }
}

export default OrderIndexItem;