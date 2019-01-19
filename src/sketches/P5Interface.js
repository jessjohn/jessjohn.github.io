import React, {Component} from 'react';
import {Segment} from "semantic-ui-react";

export default class P5Interface extends Component {
    p5Canvas = null;

    componentDidMount() {
        this.p5Canvas = new window.p5(this.props.p5Function, this.props.canvasId);
    }

    componentWillReceiveProps(nextProps) {
        this.p5Canvas.updateProps(nextProps);
    }

    componentWillUnmount() {
        if (this.p5Canvas) {
            this.p5Canvas.remove();
        }
    }

    render() {
        return (
            <Segment id={this.props.canvasId} style={{height: 350}}/>
        );
    }
}