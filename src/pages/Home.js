/**
 * Created by GennadySX on @2020
 */

import React from "react";
import Item from "../components/Item";
import ItemModal from "../components/ItemModal";
import {connect} from "react-redux";
import {showIt} from "../store/actions";
import axios from 'axios'
import {API} from "../constants/API";
import {Lang} from "../helpers/Lang";


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: this.props.modal ? this.props.modal : false,
            title: this.props.title,
            pizzaList: null,
            pizza: null,
            additions: null
        }
    }

    componentDidMount() {

        this.getList()
    }

    getList() {
        axios.get(API.pizzaList).then(res => {
            //console.log('pizza list ', res.data);
            if (res.data) {
                this.setState({pizzaList: res.data.list, additions: res.data.additions})
            }
        })
    }

    getColumn(item, column) {
        return item.type[0][column].toString()
    }

    render() {
        return (
            this.state.pizzaList ?
            <>
                <div className=" container item-block p-0 d-flex justify-content-between flex-wrap">
                    {this.state.pizzaList.map((item, index) =>
                        <Item
                            key={index}
                            title={item.name}
                            desc={item.desc}
                            cost={item.type[0]}
                            image={API.origin+item.image}
                            {...this.props}
                            onClick={(title) => {
                                this.setState({pizza: item}, () => this.props.dispatch(showIt(this.state, title))
                                )
                            }}
                        />
                    )}
                    <ItemModal
                        additions={this.state.additions}
                        item={this.state.pizza}
                        onShow={this.state}/>
                </div>
            </>
                :
            <>
                <div className="d-flex justify-content-center align-items-center  w-100 h-100 position-fixed">
                    <h1>{Lang.get('loading')}...</h1>
                </div>
            </>
        )
    }
}

HomePage = connect(state => ({
    state: state
}))(HomePage);

export default HomePage