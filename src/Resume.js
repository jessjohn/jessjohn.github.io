import React, {Component} from 'react'
import {Grid, Header, Image, Segment} from 'semantic-ui-react'

export default class Resume extends Component {
    render() {
        const imageRowWidth = 5;
        const descriptionRowWidth = 11;
        return (
            <Segment.Inline>
                <Header as='h2'>Resumé</Header>
                <Grid columns={2} relaxed='very' celled='internally'>
                    <Grid.Row>
                        <Grid.Column width={descriptionRowWidth}>
                            <p>API/ES Job Description</p>
                        </Grid.Column>
                        <Grid.Column width={imageRowWidth}>
                            <Image src='https://interset.com/wp-content/uploads/2018/02/Interset_horizontal_RGB.png'
                                   size='small' centered/>
                            <p>Interset / July 2016 - Present</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={descriptionRowWidth}>
                            <p>UX Job Description</p>
                        </Grid.Column>
                        <Grid.Column width={imageRowWidth}>
                            <Image src='https://interset.com/wp-content/uploads/2018/02/Interset_horizontal_RGB.png'
                                   size='small' centered/>
                            <p>Interset / July 2016 - Present</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={descriptionRowWidth}>
                            <p>7theta Job Description</p>
                        </Grid.Column>
                        <Grid.Column width={imageRowWidth}>
                            <Image src='https://interset.com/wp-content/uploads/2018/02/Interset_horizontal_RGB.png'
                                   size='small' centered/>
                            <p>7theta / September 2015 - July 2016</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={descriptionRowWidth}>
                            <p>CENX Job Description</p>
                        </Grid.Column>
                        <Grid.Column width={imageRowWidth}>
                            <Image src='https://interset.com/wp-content/uploads/2018/02/Interset_horizontal_RGB.png'
                                   size='small' centered/>
                            <p>CENX / May 2014 - August 2015</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment.Inline>
        );
    }
}