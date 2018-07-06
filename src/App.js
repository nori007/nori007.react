import React, {Component} from 'react';
import './App.css';
import SimpleInfo from './component/SimpleInfo'
import Search from './component/Search'

import ProjectItem from './component/ProjectItem'
import ProjectList from './component/ProjectList'
import Item from './component/item'

class App extends Component {
    
    constructor() {
        super();
        this.state = {
            projectList: []
        }
    }

    render() {
        this.state.projectList.push({key: 1, project: new Item()});
        this.state.projectList.push({key: 2, project: new Item()});
        this.state.projectList.push({key: 3, project: new Item()});
        return (
            <div>
                <SimpleInfo />
                {/* <Search /> */}
                <ProjectList projectList={this.state.projectList} />
            </div>
        )
    }
}

export default App;
