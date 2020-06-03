/**
 * Created by GennadySX on @2020
 */

import React from "react";


export default class Item extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        const {title, desc, cost} = this.props
        return (
            <div className={"col-md-3"}>
            <div className="item p-3">
                <div className="item-body">
                    <img src={require("../assets/img/original.png")} alt=""/>
                    <p className="item-title font-weight-bold">{title}</p>
                    <span className="item-desc">{desc}</span>
                </div>
                <div className="item-footer d-flex justify-content-between">
                    <p className="item-cost font-weight-bold">{cost}</p>
                    <button className="btn btn-choose">Choose</button>
                </div>
            </div>
            </div>
        )
    }
}