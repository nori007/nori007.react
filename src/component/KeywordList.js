import React, {Component} from 'react';
import './KeywordList.css'

export default class KeywordList extends Component {
    
    constructor(props) {
        super(props);
        this.selectedKeyword = this.selectedKeyword.bind(this);
    }

    selectedKeyword(event) {
        console.log('selectedKeyword');
        this.props.setKeyword('test');
    }

    render() {
        return <div className='keywordList'>{this.props.keywordList.map((item, index)=>{
            return <button className="keywordList_keyword" key={index} onClick={this.selectedKeyword}><span>{item}</span></button>
        })}</div>
    }
}
