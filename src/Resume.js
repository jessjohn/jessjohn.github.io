import React, {Component} from 'react'
import {Grid, Header, Image, Label, List, Segment, Divider} from 'semantic-ui-react'

export default class Resume extends Component {
    render() {
        const imageRowWidth = 3;
        const descriptionRowWidth = 10;
        const tagsRowWidth = 3;
        const tagMarginStyle = {margin: 5};
        return (
            <Segment.Inline>
                <Header as='h1'>Resumé</Header>
                <Segment>
                    <Header as='h2'>Work Experience</Header>
                    <Divider/>
                    <Grid columns={3} celled='internally' textAlign='justified'>
                        <Grid.Row>
                            <Grid.Column width={descriptionRowWidth}>
                                <p>
                                    Currently working at <b>Interset</b> as a Software Engineer on the <b>Search &
                                    Discovery</b> team to manage <b>Elasticsearch</b> clusters by writing queries and
                                    index management tools in <b>Java</b> and <b>Python</b>. Also writing <b>REST and
                                    CRUD APIs</b> which act at a high level to manipulate different underlying <b>SQL
                                    and NoSQL</b> databases as well as handle authentication and various proxy services.
                                    Worked with Apache's <b>Storm</b> and <b>Kafka</b> to manage a rules engine and notification
                                    system that users can customize to work with the core product. Assisted the Customer
                                    Solutions team by providing support on phone calls, and will be
                                    traveling to a customer site to help with an on-site upgrade and installation.
                                    Wrote unit tests, integration tests, and automated tests.
                                </p>
                            </Grid.Column>
                            <Grid.Column width={imageRowWidth} textAlign='center'>
                                <Image src='https://interset.com/wp-content/uploads/2018/02/Interset_horizontal_RGB.png'
                                       size='small' centered/>
                                <p>Interset</p>
                                <p>Jan 2018 - Present</p>
                            </Grid.Column>
                            <Grid.Column width={tagsRowWidth}>
                                <List bulleted>
                                    <Label style={tagMarginStyle}>Java</Label>
                                    <Label style={tagMarginStyle}>Elasticsearch</Label>
                                    <Label style={tagMarginStyle}>DropWizard</Label>
                                    <Label style={tagMarginStyle}>REST / CRUD API</Label>
                                    <Label style={tagMarginStyle}>SQL / NoSQL</Label>
                                    <Label style={tagMarginStyle}>Storm</Label>
                                    <Label style={tagMarginStyle}>Kafka</Label>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={descriptionRowWidth}>
                                <p>
                                    Worked at <b>Interset</b> as a Software Engineer on the <b>UX team</b>. Used <b>ES6+
                                    JavaScript</b> to develop and maintain a <b>React SPA</b> dedicated to revealing
                                    anomalous behaviour within an entity base. Used <b>d3</b> to build graphs and diagrams
                                    which
                                    represent both baselines and unexpected activity, and used <b>Less</b> to style
                                    components.
                                    Was solely responsible for converting statement from <b>Redux to MobX</b>, and helped
                                    with the
                                    initial transition from <b>Angular to React</b>.
                                </p>
                            </Grid.Column>
                            <Grid.Column width={imageRowWidth} textAlign='center'>
                                <Image src='https://interset.com/wp-content/uploads/2018/02/Interset_horizontal_RGB.png'
                                       size='small' centered/>
                                <p>Interset</p>
                                <p>July 2016 - Dec 2017</p>
                            </Grid.Column>
                            <Grid.Column width={tagsRowWidth}>
                                <List bulleted>
                                    <Label style={tagMarginStyle}>JavaScript</Label>
                                    <Label style={tagMarginStyle}>React</Label>
                                    <Label style={tagMarginStyle}>SPA</Label>
                                    <Label style={tagMarginStyle}>d3</Label>
                                    <Label style={tagMarginStyle}>Less</Label>
                                    <Label style={tagMarginStyle}>Redux</Label>
                                    <Label style={tagMarginStyle}>MobX</Label>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={descriptionRowWidth}>
                                <p>
                                    Worked with <b>7theta</b> as an Independent Contractor. Used <b>ClojureScript</b>
                                    and <b>React</b> to make <b>Material themed</b> components that use advanced
                                    visualization to help users manipulate and gain actionable insight from
                                    <b>Big Data</b> sets. Was the primary developer on an analytics front end for time
                                    based data in a geo-spatial context. Used <b>Clojure</b> to build an asynchronous
                                    event framework for client-to-server as well as server-to-client <b>websocket</b> communication
                                    in support of real-time visualizations.
                                </p>
                            </Grid.Column>
                            <Grid.Column width={imageRowWidth} textAlign='center'>
                                <Image src='https://avatars1.githubusercontent.com/u/13917401?s=200&v=4'
                                       size='mini' centered/>
                                <p>7theta</p>
                                <p>September 2015 - July 2016</p>
                            </Grid.Column>
                            <Grid.Column width={tagsRowWidth}>
                                <List bulleted>
                                    <Label style={tagMarginStyle}>Clojure</Label>
                                    <Label style={tagMarginStyle}>ClojureScript</Label>
                                    <Label style={tagMarginStyle}>React</Label>
                                    <Label style={tagMarginStyle}>Leaflet</Label>
                                    <Label style={tagMarginStyle}>Material UI</Label>
                                    <Label style={tagMarginStyle}>Websockets</Label>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={descriptionRowWidth}>
                                <p>
                                    Worked at <b>CENX</b> as a Junior Software Developer, using <b>Clojure and
                                    ClojureScript</b> to build UIs with <b>React</b> components and to develop a
                                    framework to abstract client and server side communication for
                                    <b>RESTful APIs</b> and <b>websockets</b>. Implemented data transformations for
                                    complex network data so that it could be visualized and indexed in search engines.
                                    Wrote automated test cases for quality assurance.
                                </p>
                            </Grid.Column>
                            <Grid.Column width={imageRowWidth} textAlign='center'>
                                <Image src='https://cenx.com/wp-content/uploads/2017/09/CENX-Logo-RGB.png'
                                       size='small' centered/>
                                <p>CENX</p>
                                <p>May 2014 - August 2015</p>
                            </Grid.Column>
                            <Grid.Column width={tagsRowWidth}>
                                <List bulleted>
                                    <Label style={tagMarginStyle}>Clojure</Label>
                                    <Label style={tagMarginStyle}>ClojureScript</Label>
                                    <Label style={tagMarginStyle}>React</Label>
                                    <Label style={tagMarginStyle}>REST API</Label>
                                    <Label style={tagMarginStyle}>Websockets</Label>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Segment>
                    <Header as='h2'>Education</Header>
                    <Divider/>
                    <Grid columns={3} celled='internally' textAlign='justified'>
                        <Grid.Row>
                            <Grid.Column width={descriptionRowWidth}>
                                <p>
                                    Received a <b>Bachelor of Computer Science with Honours</b> in the Network Computing
                                    stream and a minor in <b>Philosophy</b> from Carleton University. While studying here I
                                    learned the core concepts associated with OOP and functional programming languages, a taste for algorithms,
                                    and developed the techniques needed to learn new skills.
                                </p>
                            </Grid.Column>
                            <Grid.Column width={imageRowWidth} textAlign='center'>
                                <Image src='http://cou.on.ca/wp-content/uploads/2015/04/Carleton-University.png'
                                       size='small' centered/>
                                <p>Carleton University</p>
                                <p>September 2012 - August 2016</p>
                            </Grid.Column>
                            <Grid.Column width={tagsRowWidth}>
                                <List bulleted>
                                    <Label style={tagMarginStyle}>Computer Science</Label>
                                    <Label style={tagMarginStyle}>Honours</Label>
                                    <Label style={tagMarginStyle}>Philosophy</Label>
                                    <Label style={tagMarginStyle}>Network Computing</Label>
                                    <Label style={tagMarginStyle}>OOP</Label>
                                    <Label style={tagMarginStyle}>Functional Programming</Label>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={descriptionRowWidth}>
                                <p>
                                    Attended <b>Loyalist College</b> to study <b>Radio Broadcasting</b>. I specialized in audio
                                    production and commercial writing. I learned a lot about public speaking and
                                    the importance of communication between different teams to enable a radio station
                                    to operate smoothly.
                                </p>
                            </Grid.Column>
                            <Grid.Column width={imageRowWidth} textAlign='center'>
                                <Image src='https://www.collegesinstitutes.ca/wp-content/uploads/2015/11/member_logo_ON_Loyalist_College.jpeg'
                                       size='small' centered/>
                                <p>Carleton University</p>
                                <p>September 2012 - August 2016</p>
                            </Grid.Column>
                            <Grid.Column width={tagsRowWidth}>
                                <List bulleted>
                                    <Label style={tagMarginStyle}>Radio Broadcasting</Label>
                                    <Label style={tagMarginStyle}>Audio Production</Label>
                                    <Label style={tagMarginStyle}>Commercial Writing</Label>
                                    <Label style={tagMarginStyle}>Communication</Label>
                                    <Label style={tagMarginStyle}>Public Speaking</Label>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Segment.Inline>
        );
    }
}