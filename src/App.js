import React, {Component} from 'react';
import AboutMe from "./AboutMe";
import Home from './Home';
import Navigation from './Navigation';
import Resume from './Resume';
import './App.less';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
    state = {currentPage: 'home'};

    pageChange = page => this.setState({currentPage: page});

    render() {
        const {currentPage} = this.state;
        const space = 20;
        return (
            <div>
                <Navigation pageChange={this.pageChange}/>
                <div style={{marginLeft: 150 + space, marginRight: space, marginTop: space, marginBottom: space}}>
                    {currentPage == 'home' ? <Home/> : null}
                    {currentPage == 'about' ? <AboutMe/> : null}
                    {currentPage == 'resume' ? <Resume/> : null}
                </div>
            </div>
        );
    }
}

export default App;
