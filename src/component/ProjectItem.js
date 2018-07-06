import React, {Component} from 'react';
import './ProjectItem.css';

export default class ProjectItem extends Component {
    render () {
        let item = this.props.project;
        if(item) {
            return (
                <div className='projectItem'>
                    <div className='projectItem_top'>
                        <div className='projectItem_name'>
                            <p>{item.name}</p>
                        </div>
                        <div className='projectItem_date'>
                            <p>{item.date}</p>
                        </div>
                    </div>
                    {/* <div className='projectItem_content'> */}
                        <div className='projectItem_info'>
                            <p>{item.info}</p>
                        </div>
                        <div className='projectItem_skill'>
                            <p>{item.skill}</p>
                        </div>
                        <div className='projectItem_text'>
                            <p>{item.text}</p>
                        </div>
                        <div className='projectItem_etc'>
                            <p>{item.etc}</p>
                        </div>
                    {/* </div> */}
                </div>
            )
        }else {
            return null;
        }
    }
}

