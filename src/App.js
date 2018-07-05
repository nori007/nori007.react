import React, {Component} from 'react';
import './App.css';
import SimpleInfo from './component/SimpleInfo'
import Search from './component/Search'

import ProjectItem from './component/ProjectItem'
import Item from './component/item'

class App extends Component {

    render() {
        return (
            <div>
                <SimpleInfo />
                <Search />
                <ProjectItem item={new Item()} />
            </div>
        )
    }
}

export default App;
