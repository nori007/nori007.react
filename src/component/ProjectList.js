import React, {Component} from 'react';
import './ProjectList.css'
import ProjectItem from './ProjectItem';
import ProjectItemEdit from './ProjectItemEdit';

export default class ProjectList extends Component {

    constructor (props) {
        super(props);
        this.login = true;
        this.createProject = this.createProject.bind(this);
        this.createEditMenu = this.createEditMenu.bind(this);
        
    }

    createProject(item, index) {
        // return (
        //     <div className='projectList_row' key={index}>
        //         <ProjectItem project={item}/>
        //     </div>
        // )

        return (
            <div className='projectList_row' key={index}>
                <ProjectItemEdit project={item}/>
            </div>
        )
    }

    createEditMenu() {
        return (
            <div className='projectList_edit'>
                <button className='projectList_edit_button'>추가</button>
                <button className='projectList_edit_button'>전체 삭제</button>                
            </div>
        )
    }

    render() {
        if(this.login) {
            return (
                <div className='projectList'>
                    {this.createEditMenu()}
                    {this.props.projectList.map(this.createProject)}
                </div>
            )
        }else {
            return <div className='projectList'>{this.props.projectList.map(this.createProject)}</div>
        }
    }
}
