import React, {Componet} from 'react';
import './ProjectItem';

export default class ProjectItem extends Componet {
    render () {
        let ProjectInfo = this.props.ProjectInfo;

        if(ProjectInfo) {
            return (
                <div className='projectItem_top'>
                    <div className='projectItem_title'>
                        <p></p>
                    </div>
                    <div className='projectItem_dsate'>
                        <p></p>
                    </div>
                </div>
                <div className='projectItem_introduction'>
                    <p></p>
                </div>
                <div className='projectItem_my'>
                    <p></p>
                </div>

            )
        }else {
            return null;
        }
    }
}