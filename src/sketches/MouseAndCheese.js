import React, {Component} from "react";
import P5Interface from './P5Interface';
import {Segment} from "semantic-ui-react";

export default class MouseAndCheese extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Segment basic>
                <p>
                    Using TensorFlow.js, p5, and React, this example shows a mouse trying to get some cheese. The
                    cheese is placed wherever you click and the mouse will try to get it by using some ML magic. The
                    values for what the mouse's current guess at the X and Y position of the cheese are shown on the
                    canvas to prove that the mouse is <i>learning</i>, rather than just being animated towards the given
                    X and Y coordinates. :)
                </p>
                <P5Interface canvasId='mouse-and-cheese' p5Function={mouseAndCheeseP5}/>
            </Segment>
        );
    }
}

function mouseAndCheeseP5(p5) {
    // eslint-disable-next-line
    let props = {};

    let cheeseX, cheeseY, cheeseImg;
    let mouseX, mouseY, mouseImg;

    const predict = x => {

    };

    p5.updateProps = newProps => {
        props = newProps;
        p5.loop();
    };

    // eslint-disable-next-line
    const tf = window.tf;

    p5.preload = () => {
        cheeseImg = p5.loadImage(process.env.PUBLIC_URL + "/cheese.png");
        mouseImg = p5.loadImage(process.env.PUBLIC_URL + "/mouse.png");
    };

    p5.setup = () => {
        const canvasDiv = document.getElementById('mouse-and-cheese');
        const canvasPaddingBuffer = 14;
        p5.createCanvas(canvasDiv.offsetWidth - (canvasPaddingBuffer * 2), canvasDiv.offsetHeight - (canvasPaddingBuffer * 2));
        // start the mouse in the top right corner
        mouseX = p5.width - 50;
        mouseY = 0;
    };

    p5.mousePressed = () => {
        if (p5.mouseX > 0 && p5.mouseX < p5.width && p5.mouseY > 0 && p5.mouseY < p5.height) {
            // make sure the point is inside the canvas
            p5.clear();
            cheeseX = p5.mouseX;
            cheeseY = p5.mouseY;
        }
    };

    p5.draw = () => {
        p5.image(mouseImg, mouseX, mouseY, 40, 40);
        if (cheeseX && cheeseY) {
            p5.image(cheeseImg, cheeseX, cheeseY, 40, 40);
        }
    };
}