import {Container, Divider, Header, Message, Segment} from "semantic-ui-react";
import React, {Component} from "react";

export default class AboutMe extends Component {
    render() {
        return (
            <Container textAlign='justified'>
                <Header as='h1'>About Me</Header>
                <Divider/>
                <Segment textAlign='center' compact style={{marginLeft: 'auto', marginRight: 'auto'}}>
                    <img src={process.env.PUBLIC_URL + "/me.jpg"} alt="me" width={400}/>
                    <p>Hi, I'm Jess.</p>
                </Segment>

                <Message color='teal'>
                    What are you currently doing (in regard to your career)
                    I'm currently working as a full time software engineer at an analytics company in Ottawa, Canada.
                    How did you get there?

                    How does your background make you unique?
                </Message>
                <Message color='teal'>
                    In terms of the work you do, what aspects are you most passionate about and why?
                </Message>
                <Message color='teal'>
                    What do you consider some of your biggest professional and personal accomplishments? How did your
                    attributes contribute to those accomplishments? Be as specific as you can.
                </Message>
                <Message color='teal'>
                    <Message.Header></Message.Header>
                    What are you looking for right now? If you’re job seeking, considering a career change or looking to
                    take on projects or gigs, mention it in your statement. (Include your email address in the last
                    sentence, so it’s easy to get in touch with you.)
                </Message>
            </Container>
        );
    }
}

