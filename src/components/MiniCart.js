/**
 * Created by GennadySX on @2020
 */

import React from "react";
import {connect} from "react-redux";
import {API} from "../constants/API";
import {decrement, Cart} from "../store/actions";


class MiniCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    sumFixer(items, sum = 0) {
        items.map((item) => sum += (item.sum*item.count))
        return sum.toString().slice(0, 5)
    }

    removeIt(e, item) {
        e.preventDefault()
        this.props.onRemove(item)
    }

    onPlus=(item) => this.props.dispatch(Cart(item, "ADD_CART"))

    onMinus=(item, index) => {
        item.index = index
        this.props.dispatch(decrement(item, "DECREMENT_CART"))
    }

    render() {
        let cart = this.props.cart
        return (
            <div
                onMouseEnter={() => this.setState({show: true})}
                onMouseLeave={() => this.setState({show: false})}
                className={`MiniCart ${this.props.onShow || this.state.show ? '' : 'd-none'}`}>
                <div className="order-block pt-4 col-md-12">
                    <div className={`item-list ${cart.length > 4 ? "scroll" : ''}`}>
                        {cart ?
                            cart.map((purchase, index) =>
                                <div key={index} className="order-item d-flex">
                                    <div className="left-block col-md-3 p-0">
                                        <img src={API.origin + purchase.item.image} alt=""/>
                                    </div>
                                    <div className="right-block col-md-9 p-0 pl-3">
                                        <div className="header d-flex justify-content-between">
                                            <p className="title col-md-10 font-weight-bold">{purchase.item.name}</p>
                                            <a href={'/'}
                                               onClick={(e) => this.removeIt(e, purchase)}
                                               className="col-md-2 cart-icon"><i className="fa fa-trash"></i></a>
                                        </div>
                                        <div className="body">
                                            <p className="mb-0 type ">{purchase.type.name}</p>
                                            <p className="desc text-gray">{purchase.item.composition.slice(0, 75)}</p>
                                            <div className="footer d-flex justify-content-between">
                                                <div className="order-item-counter">
                                                    <button
                                                        onClick={() => this.onMinus(purchase, index)}
                                                        className="btn  btn-sm btn-outline-warning btn-counter decrement">
                                                        <span>-</span></button>
                                                    <span className="counter-value">{purchase.count}</span>
                                                    <button
                                                        onClick={() => this.onPlus(purchase)}
                                                        className="btn btn-sm btn-outline-warning btn-counter increment">
                                                        <span>+</span></button>
                                                </div>
                                                <p className="order-item-cost font-weight-bold">${(purchase.sum * purchase.count).toString().slice(0,5) }</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            : null
                        }
                    </div>
                    <div
                        className="block-footer pt-2 d-flex justify-content-between col-md-12 pl-0 pr-0 font-weight-bold">
                        <div className="order-cost-title">Total sum</div>
                        <div className="order-total-cost-value"> ${cart ? this.sumFixer(cart) : 0}</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default MiniCart = connect()(MiniCart)