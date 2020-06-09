/**
 * Created by GennadySX on @2020
 */
import React from "react";
import {connect} from "react-redux";
import $ from 'jquery'
import {Lang} from "../helpers/Lang";
import axios from 'axios'
import {API} from "../constants/API";

class ConfirmModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true,
            order_count: 1,
            fullName: '',
            address: '',
            phone: '',
            order: null,
            token: localStorage.getItem('token')
        }
    }

    handleClose = () => this.props.onClose()

    componentDidMount() {
        $('.item-size span').click(function () {
            $('.item-size span').removeClass('active')
            $(this).addClass('active')
        })
    }


    success() {
        localStorage.removeItem('cart')
        window.location.pathname = '/'
    }

    sendIt = (e) => {
        e.preventDefault()
        this.setState({order: localStorage.getItem('cart')}, () =>
            axios.post(this.state.token ? API.orderUser : API.order, this.state, {headers: {Authorization: `Bearer ${this.state.token}`}}).then(res => (res.data && res.data.status) ? this.success() : alert('Please fill all the fields!')))
    }

    render() {
        return (
            <>
                <div className={`modal-sx  modal-order  ${this.props.onShow ? true : false}`}>
                    <div className="modal-sx-content confirm-order">
                        <div className="modal-header col-md-12 d-flex justify-content-end pr-0">
                            <button
                                className="btn close-btn bg-danger text-light d-flex justify-content-center align-items-center  "
                                onClick={() => this.handleClose()}
                            ><p>&times;</p></button>
                        </div>
                        <div className="modal-body d-flex justify-content-center">
                            <form action="" className={'col-10'}>
                                <h2 className="title text-center">{Lang.get('confirmOrder')}</h2>
                                <div className="form-group">
                                    <div className="label">{Lang.get('fullName')}</div>
                                    <input
                                        value={this.state.fullName}
                                        onChange={(e) => this.setState({fullName: $(e.target).val()})}
                                        type="text" className="form-control" name={'fullName'}
                                           placeholder={Lang.get('enterYourName')}/></div>
                                <div className="form-group">
                                    <div className="label">{Lang.get('phone')}</div>
                                    <input
                                        value={this.state.phone}
                                        onChange={(e) => this.setState({phone: $(e.target).val()})}
                                        type="tel" className="form-control" name={'phone'}
                                           placeholder={Lang.get('enterYourPhoneNumber')}/></div>
                                <div className="form-group">
                                    <div className="label">{Lang.get('address')}</div>
                                    <input
                                        value={this.state.address}
                                        onChange={(e) => this.setState({address: $(e.target).val()})}
                                        type="text" className="form-control" name={'address'}
                                           placeholder={Lang.get('enterYourAddress')}/></div>

                                <div className="form-group">
                                    <button
                                        onClick={(e) => this.sendIt(e)}
                                        className="btn btn-orange w-100 text-light font-weight-bold"
                                       >{Lang.get('order')}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default ConfirmModal = connect(
    state => ({
        state: state
    }))(ConfirmModal)