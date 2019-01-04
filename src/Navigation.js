import React, {Component} from 'react'
import {Button, Icon, Menu, Segment, Sidebar, Container, Header} from 'semantic-ui-react'

export default class Navigation extends Component {
    state = {visible: true};

    handleHideClick = () => this.setState({ visible: false })
    handleShowClick = () => this.setState({ visible: true })
    handleSidebarHide = () => this.setState({ visible: false })

    render() {
        const {visible} = this.state;

        return (
            <div>
                <Button.Group>
                    <Button disabled={visible} onClick={this.handleShowClick}>
                        Show sidebar
                    </Button>
                    <Button disabled={!visible} onClick={this.handleHideClick}>
                        Hide sidebar
                    </Button>
                </Button.Group>

                <Sidebar.Pushable as={Segment}>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        icon='labeled'
                        inverted
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={visible}
                        width='thin'
                    >
                        <Menu.Item as='a'>
                            <Icon name='home'/>
                            Home
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='file outline'/>
                            Resumé
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='user'/>
                            About Me
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon.Group size='large'>
                                <Icon name='github' />
                                <Icon corner name='external' inverted/>
                            </Icon.Group>
                            <br/>
                            GitHub
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon.Group size='large'>
                                <Icon name='linkedin alternate'/>
                                <Icon corner name='external' inverted/>
                            </Icon.Group>
                            <br/>
                            LinkedIn
                        </Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher dimmed={visible}>
                        <Container text>
                            <Header as='h2'>Header</Header>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                                consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
                                link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                                vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
                                ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                                Curabitur ullamcorper ultricies nisi.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                                consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
                                link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                                vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
                                ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                                Curabitur ullamcorper ultricies nisi.
                            </p>
                        </Container>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}