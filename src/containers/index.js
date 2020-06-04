/**
 * Created by GennadySX on @2020
 */
import React, {Component} from 'react';
import {
    withRouter
} from "react-router-dom";

//components
import Header from './front/header';
import Footer from "./front/footer";

import AdminHeader from "./admin/footer";
import AdminFooter from "./admin/header";

const LayoutContent = (props) => {
    return (
        props.admin ?
            <>
                <AdminHeader/>
                {props.children}
                <AdminFooter/>
            </>
            : <>
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


    middleWare = () => (this.props.location.pathname.indexOf("admin") >=0 && !this.state.admin)  ? this.props.history.push("auth") : null



    render() {
        return (
            <LayoutContent {...this.props} admin={this.state.admin}/>
        );
    }
}


export default withRouter((Layout));
