/**
 * Created by GennadySX on @2020
 */
import React from "react";
import {connect} from "react-redux";
import {showIt} from "../store/actions";
import $ from 'jquery'

class ItemModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: this.props.onShow,
            order_count: 1
        }
    }

    handleClose = () => this.props.dispatch(showIt(this.props.onShow))

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('props itemModal', this.props)
    }


    componentDidMount() {
        $('.item-size span').click(function () {
                $('.item-size span').removeClass('active')
            $(this).addClass('active')
        })
    }



    render() {
        return (
            <>
                <div className={`modal-sx ${this.state.modal}`}>
                    <div className="modal-sx-content">
                        <div className="modal-header col-md-12 d-flex justify-content-end pr-0">
                            <button
                                className="btn close-btn bg-danger text-light d-flex justify-content-center align-items-center  "
                                onClick={() => this.handleClose()}
                            ><p>&times;</p></button>
                        </div>
                        <div className="modal-body d-flex justify-content-between">
                            <div className="left-block col-md-">
                                <img src={require('../assets/img/original.png')} alt=""/>
                            </div>
                            <div className="right-block col-12 col-md-5">
                                <div className="block-header">
                                    <h2 className="item-title">Дереренская</h2>
                                    <div className="item-desc">
                                        <span className="desc">25 см, традиционное тесто, 510 г</span>
                                    </div>
                                    <div className="item-composition">
                                        <a href="/" className="composition">Картофель</a>
                                        <a href="/" className="composition">Картофель</a>
                                        <a href="/" className="composition">Картофель</a>
                                        <a href="/" className="composition">Картофель</a>
                                        <a href="/" className="composition">Картофель</a>
                                    </div>
                                </div>
                                <div className="block-body pt-2">
                                    <div className="item-size d-flex justify-content-between">
                                        <span className={'active'}>Маленькая</span>
                                        <span>Маленькая</span>
                                        <span>Маленькая</span>
                                    </div>
                                    <div className="additional-block">
                                        <h4 className="title">Добавить в пиццу</h4>
                                        <div className="adt-block d-flex flex-wrap justify-content-between ">
                                            <div className="item">
                                                <img src={require('../assets/img/cucumber.jpg')} alt=""/>
                                                <p className="title "> Сыр моцарелла</p>
                                                <div className="item-footer d-flex justify-content-between">
                                                    <p className="cost">49 руб</p>
                                                    <a href={'/'} className="add-btn"><span>+</span></a>
                                                </div>
                                            </div>
                                            <div className="item ">
                                                <img src={require('../assets/img/cucumber.jpg')} alt=""/>
                                                <p className="title "> Сыр моцарелла</p>
                                                <div className="item-footer d-flex justify-content-between">
                                                    <p className="cost">49 руб</p>
                                                    <a href={'/'} className="add-btn"><span>+</span></a>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <img src={require('../assets/img/cucumber.jpg')} alt=""/>
                                                <p className="title "> Сыр моцарелла</p>
                                                <div className="item-footer d-flex justify-content-between">
                                                    <p className="cost">49 руб</p>
                                                    <a href={'/'} className="add-btn"><span>+</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-footer">
                                        <button className="btn btn-orange">Добавить в корзину за 375 руб.</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default ItemModal = connect(
    state => ({
        state: state
    }))(ItemModal)