import React, {Component} from "react";
import P5Interface from './P5Interface';

export default class XOR extends Component {
    render() {
        return (
            <P5Interface canvasId='xor' p5Function={xorP5}/>
        );
    }
}

function xorP5(p5) {
    // eslint-disable-next-line
    let props = {};

    p5.updateProps = newProps => {
        props = newProps;
        p5.loop();
    };

    // eslint-disable-next-line
    const tf = window.tf;
}