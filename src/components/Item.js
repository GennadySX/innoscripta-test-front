/**
 * Created by GennadySX on @2020
 */

import React from "react";
import tilt from 'tilt.js'
import $ from 'jquery'
export default class Item extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}

    }


    componentDidMount() {
        $('.item').tilt()
    }


    getIt(item) {
        return `$${item && item.cost ? item.cost : 0}`

    }

    prettyString(string, size) {
        return string.toString().length > size ? `${string.toString().slice(0, size)}...` : string
    }

    render() {
        const {title, desc, cost, image} = this.props
        return (
            <div className={"col-12 col-md-6 col-lg-3 "}>
            <div className="item p-3">
                <div className="item-body">
                    <img src={ image ? image : require("../assets/img/original.png")} alt=""
                         onClick={() => this.props.onClick(title)}
                    />
                    <p className="item-title font-weight-bold">{this.prettyString(title, 20)}</p>
                    <span className="item-desc">{desc}</span>
                </div>
                <div className="item-footer d-flex justify-content-between">
                    <p className="item-cost font-weight-bold">{this.getIt(cost)}</p>
                    <button className="btn btn-choose"
                            onClick={() => this.props.onClick(title)}
                    >Choose</button>
                </div>
            </div>
            </div>
        )
    }
}