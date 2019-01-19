import React, {Component} from 'react'
import {Icon, Menu, Sidebar} from 'semantic-ui-react'

export default class Navigation extends Component {
    render() {
        const {pageChange} = this.props;
        return (
            <div>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    vertical
                    visible={true}
                    width='thin'
                    color='teal'
                >
                    <Menu.Item as='a' onClick={() => pageChange('about')}>
                        <Icon name='user outline'/>
                        About Me
                    </Menu.Item>
                    <Menu.Item as='a' onClick={() => pageChange('resume')}>
                        <Icon name='file alternate outline'/>
                        CV
                    </Menu.Item>
                    <Menu.Item as='a' onClick={() => pageChange('projects')}>
                        <Icon name='boxes'/>
                        Projects
                    </Menu.Item>
                    <Menu.Item as='a' href='https://github.com/jessjohn' target='_blank'>
                        <Icon.Group size='large'>
                            <Icon name='github'/>
                            <Icon corner name='external' inverted/>
                        </Icon.Group>
                        <br/>
                        GitHub
                    </Menu.Item>
                    <Menu.Item as='a' href='https://www.linkedin.com/in/jess-johnson-84b39164/' target='_blank'>
                        <Icon.Group size='large'>
                            <Icon name='linkedin alternate'/>
                            <Icon corner name='external' inverted/>
                        </Icon.Group>
                        <br/>
                        LinkedIn
                    </Menu.Item>
                </Sidebar>
            </div>
        )
    }
}