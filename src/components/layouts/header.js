/**
 * Created by GennadySX on @2020
 */
import React from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav, Button} from "react-bootstrap";
import MiniCart from "../MiniCart";
import AuthModal from "../AuthModal";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minicart: false,
            modal: false
        }
    }

    componentDidMount() {
    }


    render() {
        return (
            <header className={'col-12'}>
                <Navbar fixed={'top'} bg={'light'} className=" header-block d-flex justify-content-between"
                        variant={'light'}>
                    <div className="container ">
                        <Link to={'/'} className={"text-warning navbar-brand"}>InnoScripta Pizza</Link>
                        <Nav className={""}>
                            <button  className={"mr-4 btn  btn-auth"}
                                onClick={() => this.setState({modal: true})}
                            >Login</button>
                            <button
                                onMouseEnter={() => this.setState({minicart: true})}
                                onMouseLeave={() => this.setState({minicart: false})}
                                className={'btn btn-cart'}><span className={'title'}>Cart</span> <span
                                className="counter">2</span></button>
                            <MiniCart
                                onShow={this.state.minicart}
                            />
                            <AuthModal onShow={this.state.modal} onClose={() => this.setState({modal: false})}/>
                        </Nav>
                    </div>
                </Navbar>
            </header>
        )
    }

}