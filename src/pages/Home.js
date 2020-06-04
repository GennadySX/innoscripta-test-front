/**
 * Created by GennadySX on @2020
 */

import React from "react";
import {Container} from "react-bootstrap";
import Item from "../components/Item";
import {ItemJson} from '../json/items'
import ItemModal from "../components/ItemModal";

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        console.log('is', ItemJson)
    }


    render() {
        return (
            <>
                <Container className="item-block p-0 d-flex justify-content-between flex-wrap">
                    <ItemModal />
                    {ItemJson.map((item, index) =>
                    <Item
                        key={index}
                        title={item.title}
                        desc={item.desc}
                        cost={item.cost}
                    />

                    )}
                </Container>
            </>
        )
    }

}