import {Accordion, Header, Icon, Segment} from "semantic-ui-react";
import React, {Component} from "react";
import LinearRegression from "../sketches/LinearRegression";

export default class Projects extends Component {
    state = {activeIndex: 0};

    handleClick = (e, titleProps) => {
        const {index} = titleProps;
        const {activeIndex} = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({activeIndex: newIndex})
    }

    render() {
        const {activeIndex} = this.state;

        return (
            <Segment.Inline>
                <Header as='h1'>Projects</Header>
                <Accordion styled fluid>
                    <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                        <Icon name='dropdown'/>
                        Linear Regression
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <p>Using TensorFlow.js and p5 + React, this example shows a linear regression. Click the canvas to add
                            points and watch the line attempt a best fit. The learning rate is purposefully slow here
                            for demo purposes.
                        </p>
                        <LinearRegression/>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                        <Icon name='dropdown'/>
                        Mouse and Cheese
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                        <p>Blurb about what this is and why it's being demoed.</p>
                        <div style={{border: '1px black solid', height: 350}}>Processing container here</div>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                        <Icon name='dropdown'/>
                        XOR
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                        <p>Blurb about what this is and why it's being demoed.</p>
                        <div style={{border: '1px black solid', height: 350}}>Processing container here</div>
                    </Accordion.Content>
                </Accordion>
            </Segment.Inline>
        )
    }
}