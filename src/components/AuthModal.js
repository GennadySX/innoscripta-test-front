/**
 * Created by GennadySX on @2020
 */
import React from "react";
import {connect} from "react-redux";
import $ from 'jquery'
import {Lang} from "../helpers/Lang";

class AuthModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true,
            order_count: 1,
            login: true
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
                <div className={`modal-sx modal-auth ${this.props.onShow ? true : false}`}>
                    <div className="modal-sx-content">
                        <div className="modal-header col-md-12 d-flex justify-content-end pr-0">
                            <button
                                className="btn close-btn bg-danger text-light d-flex justify-content-center align-items-center  "
                                onClick={() => this.handleClose()}
                            ><p>&times;</p></button>
                        </div>
                        <div className="modal-body d-flex justify-content-center">
                            {this.state.login ?
                                <form action="" className={'col-md-10 col-sm-12'}>
                                    <h2 className="title text-center">{Lang.get("login")}</h2>
                                    <div className="form-group">
                                        <div className="label">{Lang.get("login")}</div>
                                        <input type="text" className="form-control" name={'login'}
                                               placeholder={Lang.get('enterLogin')}/></div>
                                    <div className="form-group">
                                        <div className="label">{Lang.get("password")}</div>
                                        <input type="password" className="form-control" name={'password'}
                                               placeholder={Lang.get('yourPassword')}/></div>

                                    <div className="form-group">
                                        <button className="btn btn-warning w-100 text-light font-weight-bold"
                                                type="submit">{Lang.get("login")}
                                        </button>
                                    </div>

                                    <div className="form-group justify-content-center d-flex ">
                                        <a
                                            href={'/'}
                                           onClick={(e) => this.switcher(e)}
                                           className={'text-dark'}>{Lang.get("sign_up")}</a>
                                    </div>
                                </form>
                                :
                                <form action="" className={'col-md-10 col-sm-12'}>
                                    <h2 className="title text-center">{Lang.get('register')}</h2>
                                    <div className="form-group">
                                        <div className="label">{Lang.get('fullName')}</div>
                                        <input type="text"
                                               className="form-control"
                                               name={'fullname'}
                                               placeholder={Lang.get("enterYourName")}/>
                                    </div>

                                    <div className="form-group">
                                        <div className="label">{Lang.get('login')}</div>
                                        <input type="text"
                                               className="form-control"
                                               name={'login'}
                                               placeholder={Lang.get('enterLogin')}/>
                                    </div>

                                    <div className="form-group">
                                        <div className="label">{Lang.get('password')}</div>
                                        <input type="password" className="form-control" name={'password'}
                                               placeholder={Lang.get('enterYourPassword')}/></div>
                                    <div className="form-group">
                                        <div className="label">{Lang.get('confirmPassword')}</div>
                                        <input type="password" className="form-control" name={'password'}
                                               placeholder={Lang.get('confirmPassword')}/></div>

                                    <div className="form-group">
                                        <button className="btn btn-warning w-100 text-light font-weight-bold"
                                                type="submit">{Lang.get('sign_up')}
                                        </button>
                                    </div>
                                    <div className="form-group justify-content-center d-flex ">
                                        <a
                                            href={'/'}
                                            onClick={(e) => this.switcher(e)}
                                            className={'text-dark'}>{Lang.get('sign_in')}</a>
                                    </div>
                                </form>
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default AuthModal = connect(
    state => ({
        state: state
    }))(AuthModal)