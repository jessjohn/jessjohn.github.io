import React, {Component} from "react";
import P5Interface from './P5Interface';
import {Segment} from "semantic-ui-react";

export default class LinearRegression extends Component {
    constructor(props) {
        super(props);
        this.state = {learningRate: 0.05};
    }

    changeLearningRate = e => this.setState({learningRate: Math.round(e.target.value * 100) / 100});

    render() {
        const {learningRate} = this.state;
        return (
            <Segment basic>
                <p>
                    Using TensorFlow.js, p5, and React, this example shows a linear regression. Click the canvas to add
                    points and watch the line attempt a best fit. The learning rate is purposefully slow here
                    for demo purposes.
                </p>
                <label htmlFor='learning-rate'>Learning Rate: {learningRate}</label>
                <input id='learning-rate' type='range' min={0} max={0.5} step='any' value={learningRate}
                       onChange={this.changeLearningRate} list='tickmarks' style={{width: 350, margin: 5}}/>
                <datalist id="tickmarks">
                    <option value="0"/>
                    <option value="0.05"/>
                    <option value="0.10"/>
                    <option value="0.15"/>
                    <option value="0.20"/>
                    <option value="0.25"/>
                    <option value="0.30"/>
                    <option value="0.35"/>
                    <option value="0.40"/>
                    <option value="0.45"/>
                    <option value="0.5"/>
                </datalist>
                <P5Interface learningRate={learningRate} canvasId='linear-regression' p5Function={linearRegressionP5}/>
            </Segment>
        );
    }
}

function linearRegressionP5(p5) {
    let props = {};

    p5.updateProps = newProps => {
        props = newProps;
    };

    p5.reset = () => {
        p5.clear();
    };

    const tf = window.tf;
    const dots = [];
    let m, b;

    // pass in an x value to get the next best guess of which y value
    const predict = x => {
        const xTensor = tf.tensor1d(x);
        // y = mx + b
        return xTensor.mul(m).add(b);
    };

    const loss = (pred, labels) => {
        return pred.sub(labels).square().mean();
    };

    p5.setup = () => {
        const canvasDiv = document.getElementById('linear-regression');
        const canvasPaddingBuffer = 14;
        p5.createCanvas(canvasDiv.offsetWidth - (canvasPaddingBuffer * 2), canvasDiv.offsetHeight - (canvasPaddingBuffer * 2));
        m = tf.variable(tf.scalar(p5.random(1)));
        b = tf.variable(tf.scalar(p5.random(1)));
    };

    p5.mousePressed = () => {
        // make sure the point is inside the canvas
        if (p5.mouseX > 0 && p5.mouseX < p5.width && p5.mouseY > 0 && p5.mouseY < p5.height) {
            let x = p5.map(p5.mouseX, 0, p5.width, 0, 1);
            let y = p5.map(p5.mouseY, 0, p5.height, 1, 0);
            dots.push([x, y]);
        }
    };

    p5.draw = () => {
        p5.background(255);

        // reset button - need to figure out how to fire an event when clicking in this area

        // const rectX = p5.width - 100;
        // const rectY = p5.height - 40;
        // p5.strokeWeight(1);
        // p5.stroke(0);
        // p5.rect(rectX, rectY, 80, 30, 5);
        // p5.noStroke();
        // p5.textSize(16);
        // p5.text('Reset', rectX + 20, rectY + 20);

        if (dots.length <= 0) {
            p5.textSize(32);
            p5.text('Click to add points', p5.width * 0.5 - 120, p5.height * 0.5);
            return;
        }

        tf.tidy(() => {
            const xTensors = dots.reduce((vals, dot) => {
                    vals.push(dot[0]);
                    return vals;
                }, []
            );
            const yTensors = dots.reduce((vals, dot) => {
                    vals.push(dot[1]);
                    return vals;
                }, []
            );
            const optimizer = tf.train.sgd(props.learningRate || 0.05);
            optimizer.minimize(() => loss(predict(xTensors), tf.tensor1d(yTensors)));
        });


        p5.stroke(0);
        p5.strokeWeight(2);
        dots.forEach(dot => {
            let x = p5.map(dot[0], 0, 1, 0, p5.width);
            let y = p5.map(dot[1], 0, 1, p5.height, 0);
            p5.ellipse(x, y, 8, 8);
        });

        const lineX = [0, 1];
        const ys = tf.tidy(() => predict(lineX));
        let lineY = ys.dataSync();
        ys.dispose();

        let x1 = p5.map(lineX[0], 0, 1, 0, p5.width);
        let x2 = p5.map(lineX[1], 0, 1, 0, p5.width);

        let y1 = p5.map(lineY[0], 0, 1, p5.height, 0);
        let y2 = p5.map(lineY[1], 0, 1, p5.height, 0);

        p5.stroke('red');
        p5.strokeWeight(4);
        p5.line(x1, y1, x2, y2);
    };
}
