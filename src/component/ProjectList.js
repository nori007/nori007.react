import React, {Component} from 'react';
import './ProjectList.css'
import ProjectItem from './ProjectItem';

export default class ProjectList extends Component {

    createProjectList(item, indext) {
        return (
            <li className='projectList_row' key={item.key}>
                <ProjectItem projectInfo={item.projectInfo}/>
            </li>
        )
    }

    render() {
        return <ul> </ul>
    }
}
