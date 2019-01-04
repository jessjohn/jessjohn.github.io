import React, {Component} from 'react';
import Navigation from './Navigation';
import './App.less';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
    render() {
        return (
            <div>
                <Navigation/>
            </div>
        );
    }
}

export default App;
