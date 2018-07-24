import React, {Component} from 'react';
import './ProjectItem.css';

export default class ProjectItem extends Component {
    render () {
        let item = this.props.project;
        if(item) {
            return (
                <div className='projectItem'>
                    
                    <div className='projectItem_name'>
                            <h1>{item.name}</h1>
                    </div>
                    <div className='projectItem_date'>
                            <p>{item.date}</p>
                    </div>
                    <div className='projectItem_info'>
                        <h3 className='common_title'>내용</h3>
                        <p className='common_content'>{item.info}</p>
                    </div>
                    <div className='projectItem_skill'>
                        <h3 className='common_title'>사용 기술</h3>
                        <p className='common_content'>{item.skill}</p>
                    </div>
                    <div className='projectItem_text'>
                        <h3 className='common_title'>담당 업무</h3>
                        {item.text.map((txt, index) => {
                            return <p key={index} className='projectItem_text_p'> - {txt}</p>
                        })}
                    </div>
                    {/* <div className='projectItem_etc'>
                        <p>{item.etc}</p>
                    </div> */}
                </div>
            )
        }else {
            return null;
        }
    }
}

