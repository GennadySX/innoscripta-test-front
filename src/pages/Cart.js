/**
 * Created by GennadySX on @2020
 */

import React from "react";
import {API} from "../constants/API";
import {Cart, decrement, removeCart} from "../store/actions";
import {connect} from "react-redux";
import ConfirmModal from "../components/ConfirmModal";
import {Lang} from "../helpers/Lang";


 class CartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }


    sumFixer(items, sum = 0) {
        items.map((item) => sum += (item.sum*item.count))
        return sum.toString().slice(0, 5)
    }

    removeIt(e, item) {
        e.preventDefault()
        this.props.dispatch(removeCart(item, "REMOVE_IT"))
    }

    onPlus=(item) => this.props.dispatch(Cart(item, "ADD_CART"))

    onMinus=(item, index) => {
        item.index = index
        this.props.dispatch(decrement(item, "DECREMENT_CART"))
    };

    render() {
        let cart = JSON.parse(localStorage.getItem('cart'))
        return (
            <div className={'cart-cd container d-flex justify-content-center flex-wrap'}>
                <div className="header-page col-md-12 d-flex justify-content-center ">
                    <h1 className="title col-5 col-md-2">{Lang.get('cart')}</h1>
                </div>
                <div
                    onMouseEnter={() => this.setState({show: true})}
                    onMouseLeave={() => this.setState({show: false})}
                    className={`MiniCart cart-page `}>
                    <div className="order-block pt-4 col-md-12 ">
                        <div className={`item-list `}>
                            {cart ?
                                cart.map((purchase, index) =>
                                    <div key={index} className="order-item d-flex">
                                        <div className="left-block ">
                                            <img src={API.origin + purchase.item.image} alt=""/>
                                        </div>
                                        <div className="right-block col-md-10 p-0 pl-3">
                                            <div className="header d-flex justify-content-between">
                                                <p className="title col-md-6 font-weight-bold">{purchase.item.name}</p>
                                                <div className="container-x position-absolute d-flex  justify-content-between col-md-5 ">
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
                                                    <p className="order-item-cost font-weight-bold">{Lang.get('cash')}{(purchase.sum * purchase.count).toString().slice(0,5) }</p>
                                                    <a href={'/'}
                                                       onClick={(e) => this.removeIt(e, purchase)}
                                                       className="col-md-2 cart-icon"><i className="fa fa-trash"></i></a>
                                                </div>
                                            </div>

                                            <div className="body">
                                                <p className="mb-0 type ">{Lang.get(purchase.type.name.toLowerCase())}</p>
                                                <p className="desc text-gray">{purchase.item.composition.slice(0, 75)}</p>
                                                <div className="footer d-flex justify-content-between">
                                                </div>
                                            </div>
                                                <div className="container-x-sm mt-2 d-flex d-md-none d-lg-none justify-content-between col-12 pl-0">
                                                    <div className="order-item-counter d-flex">
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
                                                    <p className="order-item-cost font-weight-bold col-3">{Lang.get('cash')}{(purchase.sum * purchase.count).toString().slice(0,5) }</p>
                                                    <a href={'/'}
                                                       onClick={(e) => this.removeIt(e, purchase)}
                                                       className=" cart-icon"><i className="fa fa-trash"></i></a>
                                                </div>

                                        </div>
                                    </div>)
                                : null
                            }
                        </div>
                        <div
                            className="block-footer pt-2 d-flex justify-content-between col-md-12 pl-0 pr-0 font-weight-bold">
                            <div className="order-cost-title">{Lang.get('totalSum')}</div>
                            <div className="order-total-cost-value"> {Lang.get('cash')}{cart ? this.sumFixer(cart) : 0}</div>
                        </div>
                        <div className="confirm-block col-md-12 mb-3 mt-5 d-flex justify-content-end pr-0 ">
                            <button
                                onClick={() => this.setState({modal: true})}
                                className="btn btn-orange">{Lang.get('confirmOrder')}</button>
                        </div>
                    </div>
                </div>

                <ConfirmModal
                    onShow={this.state.modal}
                    onClose={() => this.setState({modal: false})}

                />
            </div>
        )
    }

}

export default CartPage = connect(store => ({
    store: store
}))(CartPage)