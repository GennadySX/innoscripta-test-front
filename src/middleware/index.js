/**
 * Created by GennadySX on @2020
 */
import React, {Component} from 'react';
import {
    withRouter
} from "react-router-dom";

//components
import Header from '../components/layouts/header';
import Footer from "../components/layouts/footer";

const LayoutContent = (props) => {
    return (
             <>
                <Header/>
                {props.children}
                <Footer/>
            </>
    )
}


class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: localStorage.getItem('token') ? true : false
        };
        this.middleWare()
    }


    middleWare = () => (this.props.location.pathname.indexOf("profile") >=0 && !this.state.admin)  ? this.props.history.push("/") : null



    render() {
        return (
            <LayoutContent {...this.props} admin={this.state.admin}/>
        );
    }
}


export default withRouter((Layout));
