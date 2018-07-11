import React, {Component} from 'react';
import './App.css';
import SimpleInfo from './component/SimpleInfo'
import ProjectList from './component/ProjectList'
import Item from './component/item'
import FireBaseDAO from './component/FireBaseDAO'
import KeywordList from './component/KeywordList'

class App extends Component {
    
    constructor() {
        super();
        this.dao = new FireBaseDAO();
        this.getKeywordList = this.getKeywordList.bind(this);
        this.setKeyword = this.setKeyword.bind(this);
        this.state = {
            projectList: [],
            keywordList: []
        }
    }

    getKeywordList() {
        console.log('getKeywordList');
        // 키워드 설정
        //return undefined;
    }

    setKeyword(target) {
        var newList = [];
        newList.push({key: 1, project: new Item()});
        // 키워드 설정
        // 리스트 새로
        return this.setState({
            projectList: newList,
            keywordList: ['keyword00']
        });
         
    }

    componentWillMount() {
        this.state.projectList.push({key: 1, project: new Item()});
        this.state.projectList.push({key: 2, project: new Item()});
        this.state.projectList.push({key: 3, project: new Item()});
        this.state.keywordList.push('keyword01');
        this.state.keywordList.push('keyword02');
        // 로딩후 진행.
    }
    

    render() {
        return (
            <div>
                <SimpleInfo />
                <KeywordList keywordList={this.state.keywordList} setKeyword={this.setKeyword}/>
                <ProjectList projectList={this.state.projectList} />
            </div>
        )
    }
}

export default App;
