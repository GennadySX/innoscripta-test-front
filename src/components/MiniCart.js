/**
 * Created by GennadySX on @2020
 */

import React from "react";
import {connect} from "react-redux";


class MiniCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }




    render() {
        return (
            <div
                onMouseEnter={() => this.setState({show: true})}
                onMouseLeave={() => this.setState({show: false})}
                className={`MiniCart ${this.props.onShow || this.state.show ? '' : 'd-none'}`}>
                <div className="order-block pt-4 col-md-12">
                    <div className="order-item d-flex">
                        <div className="left-block col-md-3 p-0">
                            <img src={require('../assets/img/original.png')} alt=""/>
                        </div>
                        <div className="right-block col-md-9 p-0 pl-3">
                            <div className="header d-flex justify-content-between">
                                <p className="title col-md-10 font-weight-bold">Додо</p>
                                <span className="col-md-2 cart-icon"><i className="fa fa-cart"> </i></span>
                            </div>
                            <div className="body">
                                <p className="desc text-gray">Маленькая 25см, традиционное тесто</p>
                                <div className="footer d-flex justify-content-between">
                                    <div className="order-item-counter">
                                        <button className="btn  btn-sm btn-outline-warning btn-counter decrement">
                                            <span>-</span></button>
                                        <span className="counter-value">1</span>
                                        <button className="btn btn-sm btn-outline-warning btn-counter increment">
                                            <span>+</span></button>
                                    </div>
                                    <p className="order-item-cost font-weight-bold">495 ₽</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-item d-flex">
                        <div className="left-block col-md-3 p-0">
                            <img src={require('../assets/img/original.png')} alt=""/>
                        </div>
                        <div className="right-block col-md-9 p-0 pl-3">
                            <div className="header d-flex justify-content-between">
                                <p className="title col-md-10 font-weight-bold">Додо</p>
                                <span className="col-md-2 cart-icon"><i className="fa fa-cart"> </i></span>
                            </div>
                            <div className="body">
                                <p className="desc text-gray">Маленькая 25см, традиционное тесто</p>
                                <div className="footer d-flex justify-content-between">
                                    <div className="order-item-counter">
                                        <button className="btn  btn-sm btn-outline-warning btn-counter decrement">
                                            <span>-</span></button>
                                        <span className="counter-value">1</span>
                                        <button className="btn btn-sm btn-outline-warning btn-counter increment">
                                            <span>+</span></button>
                                    </div>
                                    <p className="order-item-cost font-weight-bold">495 ₽</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-item d-flex">
                        <div className="left-block col-md-3 p-0">
                            <img src={require('../assets/img/original.png')} alt=""/>
                        </div>
                        <div className="right-block col-md-9 p-0 pl-3">
                            <div className="header d-flex justify-content-between">
                                <p className="title col-md-10 font-weight-bold">Додо</p>
                                <span className="col-md-2 cart-icon"><i className="fa fa-cart"> </i></span>
                            </div>
                            <div className="body">
                                <p className="desc text-gray">Маленькая 25см, традиционное тесто</p>
                                <div className="footer d-flex justify-content-between">
                                    <div className="order-item-counter">
                                        <button className="btn  btn-sm btn-outline-warning btn-counter decrement">
                                            <span>-</span></button>
                                        <span className="counter-value">1</span>
                                        <button className="btn btn-sm btn-outline-warning btn-counter increment">
                                            <span>+</span></button>
                                    </div>
                                    <p className="order-item-cost font-weight-bold">495 ₽</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-item d-flex">
                        <div className="left-block col-md-3 p-0">
                            <img src={require('../assets/img/original.png')} alt=""/>
                        </div>
                        <div className="right-block col-md-9 p-0 pl-3">
                            <div className="header d-flex justify-content-between">
                                <p className="title col-md-10 font-weight-bold">Додо</p>
                                <span className="col-md-2 cart-icon"><i className="fa fa-cart"> </i></span>
                            </div>
                            <div className="body">
                                <p className="desc text-gray">Маленькая 25см, традиционное тесто</p>
                                <div className="footer d-flex justify-content-between">
                                    <div className="order-item-counter">
                                        <button className="btn  btn-sm btn-outline-warning btn-counter decrement">
                                            <span>-</span></button>
                                        <span className="counter-value">1</span>
                                        <button className="btn btn-sm btn-outline-warning btn-counter increment">
                                            <span>+</span></button>
                                    </div>
                                    <p className="order-item-cost font-weight-bold">495 ₽</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/**
                     footer block
                     */}
                    <div
                        className="block-footer pt-2 d-flex justify-content-between col-md-12 pl-0 pr-0 font-weight-bold">
                        <div className="order-cost-title">Сумма заказа</div>
                        <div className="order-total-cost-value">1768 ₽</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default MiniCart = connect()(MiniCart)