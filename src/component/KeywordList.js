import React, {Component} from 'react';
import './KeywordList.css'

export default class KeywordList extends Component {
    
    constructor(props) {
        super(props);
        this.selectedKeyword = this.selectedKeyword.bind(this);
    }

    selectedKeyword(event) {
        this.props.setKeyword(event.target.value);
    }

    render() {
        return <div className='keywordList'>{this.props.keywordList.map((item, index)=>{
            return <button className="keywordList_keyword" key={index} value={item} onClick={this.selectedKeyword}><span value={item}>{item}</span></button>
        })}</div>
    }
}
