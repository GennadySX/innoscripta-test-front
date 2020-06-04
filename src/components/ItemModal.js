/**
 * Created by GennadySX on @2020
 */
import React from "react";
import {Modal, Button, Container} from "react-bootstrap";

export default class ItemModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            order_count: 5
        }
    }

    handleClose = () => this.setState({show: false});
    handleShow  = () => this.setState({show: true});

    render() {

        return (
            <div>
           {/*     <Button variant="primary" onClick={() => this.handleShow()}>
                    Launch demo modal
                </Button>*/}

                <Modal
                    className={'modalBlock'}
                    backdrop="static"
                    keyboard={false}
                    show={this.state.show}
                    onHide={() => this.handleClose()}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Body className='d-flex justify-content-lg-between'>
                        <img className='item-img col-4' src={require('../assets/img/original.png')} alt=""/>
                        <Container className="flex-wrap" >
                            <h2 className="title">Комбо за 599 ₽</h2>
                            <h4 className="cost text-warning">599 ₽</h4>
                            <p className="desc">
                                Быстрый заказ: наш хит «Аррива!» или другая пицца 25 см, Додстер, напиток и соус. Выбор пицц ограничен
                            </p>
                            <div className="counter d-flex">
                                <button className="btn minus" onClick={() => this.setState({order_count: this.state.order_count > 1 ? this.state.order_count-1 : this.state.order_count })}>-</button>
                                <p className='order_count'>{this.state.order_count}</p>
                                <button className="btn plus" onClick={() => this.setState({order_count: this.state.order_count < 50 ? this.state.order_count+1 : this.state.order_count })}>+</button>
                            </div>
                        </Container>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}
