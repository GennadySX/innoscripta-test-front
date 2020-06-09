/**
 * Created by GennadySX on @2020
 */

import React from "react";
import {API} from "../constants/API";
import ConfirmModal from "../components/ConfirmModal";
import {Lang} from "../helpers/Lang";
import axios from 'axios'
import {fullDate} from "../helpers/Date";

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            token: localStorage.getItem('token'),
            isData: null,
            loaded: false
        }
    }

    componentDidMount() {
        this.getHistory()
    }

    sumFixer(items, sum = 0) {
        items.map((item) => sum += (item.sum * item.count))
        return sum.toString().slice(0, 5)
    }

    getHistory(){
        axios.get(API.history, {headers: {Authorization: `Bearer ${this.state.token}`}}).then(res => {
            if (res.data.status && res.data.orders) {
                console.log('is', res.data.orders)
               this.setState({isData: res.data.orders, loaded: true})
            }
        })
    }


    render() {
        return (
            <div className={'cart-cd container d-flex justify-content-center flex-wrap'}>
                <div className="header-page col-md-12 d-flex justify-content-center ">
                    <h1 className="title col-5 col-md-5">{Lang.get('history')}</h1>
                </div>
                <div
                    onMouseEnter={() => this.setState({show: true})}
                    onMouseLeave={() => this.setState({show: false})}
                    className={`MiniCart cart-page `}>
                    <div className="order-block pt-4 col-md-12 ">
                        <div className={`item-list `}>
                            {this.state.loaded ?
                                this.state.isData.map((purchase, index) =>
                                    <div key={index} className="order-item d-flex">
                                        <div className="left-block ">
                                            <img src={API.origin + JSON.parse(purchase.order)[0].item.image} alt=""/>
                                        </div>
                                        <div className="right-block col-md-10 p-0 pl-3 ">
                                            <div className="header d-flex justify-content-between">
                                                <p className="title col-md-6 font-weight-bold">{Lang.get('order')} {index + 1}</p>
                                                <div
                                                    className="container-x position-absolute d-flex  justify-content-end col-md-5 ">
                                                    <p className="order-item-cost font-weight-bold">{Lang.get('totalSum')}: {Lang.get('cash')}{this.sumFixer(JSON.parse(purchase.order))}</p>
                                                </div>
                                            </div>

                                            <div className="body">
                                                <p className="mb-0 type " style={{fontSize: 14}}>{fullDate(purchase.created_at)}</p>
                                                <p className="desc text-gray">{purchase.address}</p>
                                                <p className="desc text-gray">{purchase.fullName}</p>
                                                <p className="desc text-gray">{purchase.phone}</p>

                                            </div>
                                        </div>
                                    </div>)
                                : <div className='col-12 d-flex justify-content-center mb-2'>
                                    <h4>{Lang.get('youDidNotOrderYet')}</h4>
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <ConfirmModal
                    onShow={this.state.modal}
                    onClose={() => this.setState({modal: false})}

                />
            </div>
        )
    }

}

export default ProfilePage