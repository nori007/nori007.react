import React, {Component} from 'react';
import './Search.css';

class Search extends Component {

    render() {
        return (
            <div className='search'>
                <div className='search_input'></div> 
                <button className='search_button'>
                    <span> search </span>
                </button>
            </div>
        )
    }
}

export default Search;