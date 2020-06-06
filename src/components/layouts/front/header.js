/**
 * Created by GennadySX on @2020
 */
import React from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav, Button} from "react-bootstrap";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
    }


    render() {
        return (
            <header className={'col-12'}>
                <Navbar fixed={'top'} bg={'light'} className=" header-block d-flex justify-content-between" variant={'light'}>
                    <Link to={'/'} className={" col-9 text-warning navbar-brand"}>InnoScripta Pizza</Link>
                    <Nav className={"mr-auto col-3 "}>
                        <Link to={'/auth'} className={"nav-link mr-2 text-orange"}>Auth</Link>
                        <Button className={'btn btn-cart'}><span className={'title'}>Cart</span> <span className="counter">2</span></Button>
                    </Nav>
                </Navbar>
            </header>
        )
    }


}