import React, {Component} from 'react';
import './App.css';
import SimpleInfo from './component/SimpleInfo'
import ProjectList from './component/ProjectList'
import Item from './component/item'
import FireBaseDAO from './component/FireBaseDAO'
import KeywordList from './component/KeywordList'

class App extends Component {
    
    constructor() {
        console.log("constructor");
        super();
        this.dao = new FireBaseDAO();
        this.getKeywordList = this.getTargetProjectList.bind(this);
        this.setKeyword = this.setKeyword.bind(this);
        this.setKeywordList = this.setKeywordList.bind(this);
        this.state = {
            projectList: [],
            keywordList: []
        }
    }

    getTargetProjectList(target) {
        let pList = this.state.projectList;
        let resList = [];
        
        pList.forEach((item) => {
            item.keyword.forEach((word) => {
                if(word === target) {
                    resList.push(item);
                    return;
                }
            })
        });

        return resList;
    }

    setKeyword(target) {
        if(target === 'all') {
            this.componentWillMount();
        }else {
            return this.setState({
                projectList: this.getTargetProjectList(target),
                keywordList: ['all', target]
            });
        }
    }

    setKeywordList(itemList) {
        let kList = [];

        itemList.forEach((item) => {
            item.keyword.forEach((keyword) => {
                kList.push(keyword);
            });
        });

        return kList.reduce((a, b) => { if(a.indexOf(b) < 0){ a.push(b); } return a;}, []);
    }

    componentWillMount() {
        this.dao.list(25).on('value', (dataList) => {    
            let pList = [];
            
            dataList.forEach((data) => {
                pList.push(data.val());
            });

            return this.setState({
                projectList: pList,
                keywordList: this.setKeywordList(pList)
            })
        });
    }

    componentWillUnmount() {
        this.dao.off();
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
