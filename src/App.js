import React, {Component} from 'react';
import AboutMe from "./pages/AboutMe";
import Navigation from './pages/Navigation';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import './App.less';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
    state = {currentPage: 'about'};

    pageChange = page => this.setState({currentPage: page});

    render() {
        const {currentPage} = this.state;
        const marginBuffer = 20;
        return (
            <div className="main-content">
                <Navigation pageChange={this.pageChange}/>
                <div style={{
                    marginLeft: 150 + marginBuffer,
                    marginRight: marginBuffer,
                    marginTop: marginBuffer,
                    marginBottom: marginBuffer
                }}>
                    {currentPage === 'about' ? <AboutMe/> : null}
                    {currentPage === 'resume' ? <Resume/> : null}
                    {currentPage === 'projects' ? <Projects/> : null}
                </div>
            </div>
        );
    }
}

export default App;
