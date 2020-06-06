/**
 * Created by GennadySX on @2020
 */

import React from "react";
import Item from "../components/Item";
import {ItemJson} from '../json/items'
import ItemModal from "../components/ItemModal";
import {connect} from "react-redux";
import {showIt} from "../store/actions";


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: this.props.modal ? this.props.modal : false,
            title: this.props.title
        }
    }

    componentDidMount() {
    }


    render() {
        return (
            <>
                <div className=" container item-block p-0 d-flex justify-content-between flex-wrap">
                    {ItemJson.map((item, index) =>
                        <Item
                            key={index}
                            title={item.title}
                            desc={item.desc}
                            cost={item.cost}
                            {...this.props}
                            onClick={(title) => this.props.dispatch(showIt(this.state, title))}
                        />
                    )}
                    <ItemModal onShow={this.state}/>
                </div>
            </>
        )
    }
}

HomePage = connect(state => ({
    state: state
}))(HomePage);

export default HomePage