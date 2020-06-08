/**
 * Created by GennadySX on @2020
 */
import React from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";

import MiniCart from "../MiniCart";
import AuthModal from "../AuthModal";
import {connect} from "react-redux";
import {cart} from "../../store/cartReducer";
import {removeCart} from "../../store/actions";
import {Lang} from "../../helpers/Lang";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minicart: false,
            modal: false,
            cart: JSON.parse(localStorage.getItem('cart')),
            lang: localStorage.getItem('lang'),

        }
    }

    langChoise(e, lang) {
        e.preventDefault()
        localStorage.setItem('lang', lang)
        window.location.reload()
        //this.setState({lang: lang}, () =>    console.log('lang code', this.state.lang ))
    }

    counterHead(cart, count=0) {
        cart.map((purchase) => count = count += purchase.count)
        return count
    }

    render() {
        return (
            <header className={'col-12'}>
                <Navbar fixed={'top'} bg={'light'} className=" header-block d-flex justify-content-between"
                        variant={'light'}>
                    <div className="container ">
                        <Link to={'/'} className={"text-warning navbar-brand"}>InnoScripta Pizza</Link>
                        <Nav className={""}>
                            <div className="lang-block  mr-md-2 mr-sm-0">
                                <div className="btn lang-title">{this.state.lang ? this.state.lang : "EN"}</div>
                                <div className="lang-box flex-wrap">
                                    {this.state.lang && this.state.lang === "SP" ?
                                        <a href="/" onClick={(e) => this.langChoise(e, 'EN')} className="lang col-12">{Lang.get('english')}</a>
                                        :
                                        <a href="/"
                                        onClick={(e) => this.langChoise(e, 'SP')}
                                        className="lang col-12">{Lang.get('spanish')}</a>
                                    }

                                </div>
                            </div>
                            <button className={"mr-md-4 mr-sm-4 btn  btn-auth"}
                                    onClick={() => this.setState({modal: true})}
                            >{Lang.get('login')}
                            </button>
                            <button
                                onClick={() => window.location.href = '/cart'}
                                onMouseEnter={() => this.setState({minicart: true})}
                                onMouseLeave={() => this.setState({minicart: false})}
                                className={'btn btn-cart'}><span className={'title'}>{Lang.get('cart')}</span> <span
                                className="counter">{this.props.state.cart ? this.counterHead(this.props.state.cart) : 0}</span>
                            </button>
                            <MiniCart
                                cart={this.props.state.cart}
                                onShow={this.state.minicart}
                                onRemove={(item) => this.props.dispatch(removeCart(item, "REMOVE_IT"))}
                            />
                            <AuthModal onShow={this.state.modal} onClose={() => this.setState({modal: false})}/>
                        </Nav>
                    </div>
                </Navbar>
            </header>
        )
    }
}


export default Header = connect(state => ({
    state: state
}))(Header)