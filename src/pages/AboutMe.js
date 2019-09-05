import {Container, Divider, Header, Message, Segment} from "semantic-ui-react";
import React, {Component} from "react";

export default class AboutMe extends Component {
    render() {
        return (
            <Container textAlign='justified'>
                <Header as='h1'>About Me</Header>
                <Divider/>
                <Segment textAlign='center' compact style={{marginLeft: 'auto', marginRight: 'auto'}}>
                    <img src={process.env.PUBLIC_URL + "/me.jpg"} alt="me" width={200}/>
                    <p>Hi, I'm Jess.</p>
                </Segment>
                <Message>
                    <Message.Header>What is Jess currently doing?</Message.Header>
                    I'm currently working as a full time software engineer at an analytics and machine
                    learning company in Ottawa, Canada. My day job is to write Java that supports Elasticsearch
                    clusters, create REST APIs, and to solve high level problems. In my spare time, I'm learning about
                    ML+AI by playing with TensorFlow.js. I also volunteer at the Ottawa Tool Library, and with Ladies
                    Learning Code. My hobbies are watching TV and movies, playing video games, cooking,
                    snowboarding when there's snow and biking when there isn't.
                </Message>
                <Message>
                    <Message.Header>How did Jess get here?</Message.Header>
                    After studying radio broadcasting in college, I had gotten a taste for higher learning and wanted
                    to continue my educational path. Someone told me I was "very logical" and that I should give
                    programming a try. I enrolled in my first programming class in 2012, and graduated with a BCS
                    in 2016. During university I worked on developing UIs and APIs at a company called CENX, which
                    lead me down the path of Big Data and analytics. In 2016, just before graduating, I began working
                    at Interset doing similar UI and API development but at a much larger scale (from millions of
                    events per month, to billions per week!). Analytics and machine learning play key roles in my
                    current job, and I'm eager to continue honing my skills in these areas.
                </Message>
                <Message>
                    <Message.Header>What does Jess bring to the table?</Message.Header>
                    I've never enjoyed feeling helpless or useless when problems arise. Even with the smallest problems,
                    like a drawer that sticks or a border off by 1 pixel, I just <i>feel</i> better after a problem is
                    solved. Looking back, I can see now that learning to program was a no-brainer for me. What I
                    learned while being a radio DJ still serves me today - communication, creativity, and not being afraid
                    to be the only voice in a room are all skills that I've used throughout my programming career. Combine
                    all that with a no-quit-until-it's-done attitude, and you've got Jess.
                </Message>
                <Message>
                    <Message.Header>What is Jess passionate about?</Message.Header>
                    Solving problems has always been my passion, especially the challenging ones. I'm happy to spend my
                    days solving problems that can be Googled, but I truly enjoy tackling problems that require
                    creative solutions. No matter the domain (programming, DIYing, meal prepping) I love trying to find
                    the perfect solution to the task at hand.
                </Message>
            </Container>
        );
    }
}

