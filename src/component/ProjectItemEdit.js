import React, {Component} from 'react';
import './ProjectItem.css';

export default class ProjectItemEdit extends Component {

    constructor (props) {
        super(props);
        // this.readOnly = 'true';
        this.number = this.props.number;
        this.getText = this.getText.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
    }

    getText(list) {
        let res = "";

        list.forEach((text)=>{
            res += text;
            res += "\r\n";
        });

        return res;
    }

    getId(name) {
        return name + "_" + this.number;
    }

    update() {

    }

    remove() {
        
    }

    componentDidMount() {
        let textId = 'text_' + this.number;
        let obj = document.getElementById(textId);

        obj.style.height = (12 + obj.scrollHeight) + 'px';
     }

    render () {
        let item = this.props.project;
        let index = this.props.index;

        if(item) {
            return (
                <div className='projectItem'>
                    <div className='projectItem_name'>
                            <input type='text' className='common_text common_text_tite' id={this.getId('name')} placeholder='project name' defaultValue={item.name}/>
                        </div>
                    <div className='projectItem_date'>
                            <input type='text' className='common_text' id={this.getId('date')} placeholder='project date' defaultValue={item.date} />
                        </div>
                    <div className='projectItem_info'>
                        <h3 className='common_title'>소개</h3>
                        <input type='text' className='common_content common_text' id={this.getId('info')} placeholder='project information' defaultValue={item.info} />
                    </div>
                    <div className='projectItem_skill'>
                        <h3 className='common_title'>사용 기술</h3>
                        <input type='text' className='common_content common_text' id={this.getId('skill')} placeholder='project skill' defaultValue={item.skill} />
                    </div>
                    <div className='projectItem_text'>
                        <h3 className='common_title'>담당 업무</h3>
                        <textarea className='common_content common_text' placeholder='project work' id={this.getId('text')}>{this.getText(item.text)}</textarea>
                    </div>
                    {/* <div className='projectItem_etc'>
                        <p>{item.etc}</p>
                    </div> */}
                    <div className='project_bottom'>
                        <button className='project_bottom_button'>수정</button>
                        <button className='project_bottom_button'>삭제</button>
                    </div>
                </div>
            )
        }else {
            return null;
        }
    }
}

// {item.text.map((txt, index) => {
//     return <input type='text' className='projectItem_text_p common_text' defaultValue={txt} key={index}/>
// })}