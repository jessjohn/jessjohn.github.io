import React, {Component} from "react";
import {Segment} from "semantic-ui-react";

export default class LinearRegression extends Component {
    componentDidMount() {
        this.linearRegression = new window.p5(linearRegressionP5, 'linear-regression');
    }

    componentWillUnmount() {
        this.linearRegression.remove();
    }

    render() {
        return (
            <Segment id='linear-regression' style={{height: 350}}/>
        );
    }
}

function linearRegressionP5(p5) {
    const tf = window.tf;
    const learningRate = 0.05;
    const optimizer = tf.train.sgd(learningRate);
    const dots = [];
    let m, b;

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
        if (p5.mouseX > 0 && p5.mouseX < p5.width && p5.mouseY > 0 && p5.mouseY < p5.height) {
            // make sure the point is inside the canvas
            let x = p5.map(p5.mouseX, 0, p5.width, 0, 1);
            let y = p5.map(p5.mouseY, 0, p5.height, 1, 0);
            dots.push([x, y]);
        }
    }

    p5.draw = () => {
        tf.tidy(() => {
            if (dots.length > 0) {
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
                optimizer.minimize(() => loss(predict(xTensors), tf.tensor1d(yTensors)));
            }
        });

        p5.background(255);

        p5.stroke(0);
        p5.strokeWeight(2);
        dots.forEach(dot => {
            let x = p5.map(dot[0], 0, 1, 0, p5.width);
            let y = p5.map(dot[1], 0, 1, p5.height, 0);
            p5.ellipse(x, y, 8, 8);
        });

        if (dots.length <= 0) {
            return;
        }

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
