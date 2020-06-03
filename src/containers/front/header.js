/**
 * Created by GennadySX on @2020
 */
import React from "react";
import {Navbar, Nav} from "react-bootstrap";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
    }


    render() {
        return (
            <header>
                <Navbar  bg={"dark"} className="col-12 d-flex justify-content-between" variant={"dark"} >
                    <Navbar.Brand href={"/"} className={" col-9 text-warning"}>InnoScripta Pizza </Navbar.Brand>
                    <Nav className={"mr-auto col-3 "}>
                        <Nav.Link href={'cart'}>Cart</Nav.Link>
                        <Nav.Link href={'auth'}>Sign</Nav.Link>
                    </Nav>
                </Navbar>
            </header>
        )
    }


}