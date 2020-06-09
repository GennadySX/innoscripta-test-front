/**
 * Created by GennadySX on @2020
 */
import React from "react";
import {connect} from "react-redux";
import $ from 'jquery'
import {Lang} from "../helpers/Lang";
import axios from 'axios'
import {API} from "../constants/API";

class AuthModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true,
            order_count: 1,
            isLogin: true,
            name: '',
            email: 'root@mail.com',
            password: 'unlock001',
            c_password: ''
        }
    }

    handleClose = () => this.props.onClose()


    componentDidMount() {
        $('.item-size span').click(function () {
            $('.item-size span').removeClass('active')
            $(this).addClass('active')
        })
    }

    switcher = (e) => {
        e.preventDefault()
        this.setState({isLogin: !this.state.isLogin})
    }

    loginIt(e) {
        e.preventDefault()
        axios.post(API.login, this.state).then(res => {
            if (res.data.success) {
                localStorage.setItem('token', res.data.success.token)
                window.location.pathname = '/profile'
            }
            console.log('res data is ', res.data)
        })
    }

    registerIt(e) {
        e.preventDefault()
        axios.post(API.register, this.state).then(res => {
            if (res.data.token) {
                this.setState({isLogin: true})
            }
        })
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
                            {this.state.isLogin ?
                                <form action="" className={'col-md-10 col-sm-12'}>
                                    <h2 className="title text-center">{Lang.get("login")}</h2>
                                    <div className="form-group">
                                        <div className="label">{Lang.get("email")}</div>
                                        <input
                                            onChange={(e) => this.setState({email: $(e.target).val()})}
                                            value={this.state.email}
                                            type="email"
                                            className="form-control"
                                            name={'email'}
                                            placeholder={Lang.get('enterEmail')}
                                            required
                                        /></div>
                                    <div className="form-group">
                                        <div className="label">{Lang.get("password")}</div>
                                        <input
                                            onChange={(e) => this.setState({password: $(e.target).val()})}
                                            value={this.state.password}
                                            type="password"
                                            id={"#cd"}
                                            name={'password'}
                                            className="form-control current-password"
                                            autoComplete="on"
                                            placeholder={Lang.get('yourPassword')}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <button
                                            onClick={(e) => this.loginIt(e)}
                                            className="btn btn-warning w-100 text-light font-weight-bold"
                                        >{Lang.get("login")}
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
                                        <input
                                            onChange={(e) => this.setState({name: $(e.target).val()})}
                                            value={this.state.name}
                                            type="text"
                                            className="form-control"
                                            name={'fullname'}
                                            placeholder={Lang.get("enterYourName")}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <div className="label">{Lang.get('email')}</div>
                                        <input
                                            onChange={(e) => this.setState({email: $(e.target).val()})}
                                            value={this.state.email}
                                            type="email"
                                            className="form-control"
                                            name={'login'}
                                            placeholder={Lang.get('enterEmail')}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <div className="label">{Lang.get('password')}</div>
                                        <input
                                            onChange={(e) => this.setState({password: $(e.target).val()})}
                                            value={this.state.password}
                                            type="password" className="form-control" name={'password'}
                                            placeholder={Lang.get('enterYourPassword')}
                                            required
                                        /></div>
                                    <div className="form-group">
                                        <div className="label">{Lang.get('confirmPassword')}</div>
                                        <input
                                            onChange={(e) => this.setState({c_password: $(e.target).val()})}
                                            value={this.state.c_password}
                                            type="password" className="form-control" name={'c_password'}
                                            placeholder={Lang.get('confirmPassword')}
                                            required
                                        /></div>

                                    <div className="form-group">
                                        <button
                                            onClick={(e) => this.registerIt(e)}
                                            className="btn btn-warning w-100 text-light font-weight-bold"
                                        >{Lang.get('sign_up')}
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