/**
 * Created by GennadySX on @2020
 */
import React from "react";
import {connect} from "react-redux";
import {Cart, showIt} from "../store/actions";
import $ from 'jquery'
import {API} from "../constants/API";
import index from "../middleware";

class ItemModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: this.props.onShow,
            order_count: 1,
            pizzaCost: 0,
            sum: 0,
            size: 'sm',
            type: null,
            cart: {},
            addition: []
        }
    }

    handleClose = () => this.setState({size: 0}, () => {
        $('.item-size span').removeClass('active');
        $('.item-footer .add-btn').removeClass('active');
        $('.item-size span:nth-child(1)').addClass('active');
        this.setState({sum: 0, size: 'sm', cart: {}, pizzaCost: 0})
        this.props.dispatch(showIt(this.props.onShow))
    });

    componentDidUpdate(prevProps, prevState, snapshot) {
        $('.item').tilt()
    }

    sizeChange(e, size) {
        $('.item-size span').removeClass('active')
        $(e.target).addClass('active')
        this.setState({sum: this.sumFixer(size.cost), size: this.sizeFixer(size), type: size})
    }

    sumFixer(cost) {
        if (this.state.pizzaCost > 0) {
            const sum = (this.state.sum - this.state.pizzaCost) + cost
            this.setState({pizzaCost: cost})
            return sum
        } else {
            this.setState({pizzaCost: cost})
            return this.state.sum + cost
        }
    }
    sizeFixer(size) {
        switch (size.name) {
            case "Large":
                return 'lg';
            case "Middle":
                return 'md';
            default:
                return 'sm'
        }
    }

    addition(e, addition) {
        e.preventDefault()
        let item = $(e.target)[0].tagName === 'A' ? $(e.target) : $(e.target).parent('a');
        item.hasClass('active') ?
            this.setState({
                sum: (this.state.sum - addition.cost),
                addition: this.state.addition.filter(item => item !== addition)
            }, () => item.removeClass('active'))
            : this.setState({
                sum: (this.state.sum ? this.state.sum : this.props.item.type[0].cost) + addition.cost,
                addition: [...this.state.addition, addition]
            }, () => item.addClass('active'))

    }

    addCart(item) {
        const cart = {
            item: item,
            type: this.state.type ? this.state.type : item.type[0],
            addition: this.state.addition,
            count: 1,
            sum: this.state.sum > 0 ? this.state.sum : this.state.type ? this.state.type.cost : item.type[0].cost
        }
        //this.setState({cart: cart},() =>  console.log('item cart => ', this.state))
        this.props.dispatch(Cart(cart, "ADD_CART"))
        this.handleClose()
    }

    render() {
        const item = this.props.item
        return (
            this.props.item ?
                <>
                    <div className={`modal-sx ${this.props.onShow.modal ? true : false}`}>
                        <div className="modal-sx-content">
                            <div className="modal-header col-md-12 d-flex justify-content-end pr-0">
                                <button
                                    className="btn close-btn bg-danger text-light d-flex justify-content-center align-items-center  "
                                    onClick={() => this.handleClose()}
                                ><p>&times;</p></button>
                            </div>
                            <div className="modal-body d-flex justify-content-between">
                                <div className="left-block col-md-">
                                    <img className={this.state.size} src={API.origin + item.image} alt=""/>
                                </div>
                                <div className="right-block col-12 col-md-5">
                                    <div className="block-header">
                                        <h2 className="item-title">{item.name}</h2>
                                        <div className="item-desc">
                                            <span className="desc">{item.description}</span>
                                        </div>
                                        <div className="item-composition">
                                            <p>{item.composition}</p>
                                        </div>
                                    </div>
                                    <div className="block-body pt-2">
                                        <div className="item-size d-flex justify-content-between">
                                            {item.type.map((size, index) => <span onClick={(e) =>
                                                this.sizeChange(e, size)} key={index}
                                                                                  className={this.state.size === this.sizeFixer(size) ? ' active' : ' '}>{size.name}</span>)}
                                        </div>
                                        {
                                            this.props.additions ?
                                                <div className="additional-block">
                                                    <h4 className="title">Additions to pizza</h4>
                                                    <div
                                                        className="adt-block d-flex flex-wrap justify-content-between ">

                                                        {this.props.additions.map((addition, index) =>
                                                            <div key={index} className="item">
                                                                <img src={API.origin+addition.image}
                                                                     alt=""/>
                                                                <p className="title ">{addition.name}</p>
                                                                <div
                                                                    className="item-footer d-flex justify-content-between">
                                                                    <p className="cost">${addition.cost}</p>
                                                                    <a onClick={(e) => this.addition(e, addition)} href={'/'}
                                                                       className="add-btn"><span> </span></a>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                : null
                                        }
                                    </div>
                                    <div className="block-footer">
                                        <button
                                            onClick={() => this.addCart(this.props.item, this.state.sum ? this.state.sum : this.props.item.type[0].cost)}
                                            className="btn btn-orange">Add to Cart
                                            as {(this.state.sum ? this.state.sum : this.props.item.type[0].cost).toString().slice(0, 5)} ₽
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                : null
        );
    }
}


export default ItemModal = connect(
    state => ({
        state: state
    }))(ItemModal)