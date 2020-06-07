/**
 * Created by GennadySX on @2020
 */
import React from "react";
import {connect} from "react-redux";
import {showIt} from "../store/actions";
import $ from 'jquery'

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
                                <form action="" className={'col-10'}>
                                    <h2 className="title text-center">Login</h2>
                                    <div className="form-group">
                                        <div className="label">Login</div>
                                        <input type="text" className="form-control" name={'login'}
                                               placeholder={'enter login'}/></div>
                                    <div className="form-group">
                                        <div className="label">Password</div>
                                        <input type="password" className="form-control" name={'password'}
                                               placeholder={'your password'}/></div>

                                    <div className="form-group">
                                        <button className="btn btn-warning w-100 text-light font-weight-bold"
                                                type="submit">Login
                                        </button>
                                    </div>

                                    <div className="form-group justify-content-center d-flex mt-4">
                                        <a href=""> Forgot password</a>
                                    </div>
                                    <div className="form-group justify-content-center d-flex ">
                                        <a
                                            href={'/'}
                                           onClick={(e) => this.switcher(e)}
                                           className={'text-dark'}> Sign up</a>
                                    </div>
                                </form>
                                :
                                <form action="" className={'col-10'}>
                                    <h2 className="title text-center">Register</h2>
                                    <div className="form-group">
                                        <div className="label">Full name</div>
                                        <input type="text"
                                               className="form-control"
                                               name={'fullname'}
                                               placeholder={'Enter your Full name'}/>
                                    </div>

                                    <div className="form-group">
                                        <div className="label">Login</div>
                                        <input type="text"
                                               className="form-control"
                                               name={'login'}
                                               placeholder={'enter login'}/>
                                    </div>

                                    <div className="form-group">
                                        <div className="label">Password</div>
                                        <input type="password" className="form-control" name={'password'}
                                               placeholder={'your password'}/></div>
                                    <div className="form-group">
                                        <div className="label">Confirm password</div>
                                        <input type="password" className="form-control" name={'password'}
                                               placeholder={'your password'}/></div>

                                    <div className="form-group">
                                        <button className="btn btn-warning w-100 text-light font-weight-bold"
                                                type="submit">Sign up
                                        </button>
                                    </div>
                                    <div className="form-group justify-content-center d-flex ">
                                        <a
                                            href={'/'}
                                            onClick={(e) => this.switcher(e)}
                                            className={'text-dark'}> Sign in</a>
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