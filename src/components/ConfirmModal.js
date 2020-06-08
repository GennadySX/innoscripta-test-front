/**
 * Created by GennadySX on @2020
 */
import React from "react";
import {connect} from "react-redux";
import {showIt} from "../store/actions";
import $ from 'jquery'

class ConfirmModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true,
            order_count: 1,
        }
    }

    handleClose = () => this.props.onClose()




    componentDidMount() {
        $('.item-size span').click(function () {
                $('.item-size span').removeClass('active')
            $(this).addClass('active')
        })
    }

        switcher=(e) => {
        e.preventDefault()
            this.setState({login: !this.state.login})
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
                                    <h2 className="title text-center">Confirm order</h2>
                                    <div className="form-group">
                                        <div className="label">Full name</div>
                                        <input type="text" className="form-control" name={'fullName'}
                                               placeholder={'enter your name'}/></div>
                                    <div className="form-group">
                                        <div className="label">Phone</div>
                                        <input type="tel" className="form-control" name={'phone'}
                                               placeholder={'enter your phone number'}/></div>
                                    <div className="form-group">
                                        <div className="label">Address</div>
                                        <input type="text" className="form-control" name={'address'}
                                               placeholder={'enter your address'}/></div>

                                    <div className="form-group">
                                        <button className="btn btn-orange w-100 text-light font-weight-bold"
                                                type="submit">Order
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