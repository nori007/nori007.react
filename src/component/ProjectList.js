import React, {Component} from 'react';
import './ProjectList.css'
import ProjectItem from './ProjectItem';

export default class ProjectList extends Component {

    constructor (props) {
        super(props);
        this.createProject = this.createProject.bind(this);
    }

    createProject(item, index) {
        return (
            <div className='projectList_row' key={index}>
                <ProjectItem project={item}/>
            </div>
        )
    }

    render() {
        return <div className='projectList'>{this.props.projectList.map(this.createProject)}</div>
    }
}
