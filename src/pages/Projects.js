import {Accordion, Header, Icon, Segment} from "semantic-ui-react";
import React, {Component} from "react";
import LinearRegression from "../sketches/LinearRegression";
import MouseAndCheese from "../sketches/MouseAndCheese";
import XOR from "../sketches/XOR";

export default class Projects extends Component {
    state = {activeIndex: 1};

    handleClick = (e, titleProps) => {
        const {index} = titleProps;
        const {activeIndex} = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({activeIndex: newIndex})
    };

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
                        <LinearRegression/>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                        <Icon name='dropdown'/>
                        Mouse and Cheese
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                        <MouseAndCheese/>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                        <Icon name='dropdown'/>
                        XOR
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                        <XOR/>
                    </Accordion.Content>
                </Accordion>
            </Segment.Inline>
        )
    }
}