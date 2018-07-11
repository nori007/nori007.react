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

    getKeywordList(target) {
        console.log('getKeywordList');
        let list = dao.list(20);
        let resList = [];

        if(!(target == '' || target == 'undefined')) {
            list.map((item) => {
                item.keyword.map((keyword) => {
                    if(keyword == target) {
                        resList.push(item);
                    }
                })
            });
        }else {
            resList = list;
        }
        return resList;
    }

    setKeyword(target) {
        var newList = [];
        newList.push(new Item());
        // 키워드 설정
        // 리스트 새로
        return this.setState({
            projectList: getKeywordList(target),
            keywordList: target
        });
    }

    componentWillMount() {
        this.state.projectList.push(new Item());
        this.state.projectList.push(new Item());
        this.state.projectList.push(new Item());
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
