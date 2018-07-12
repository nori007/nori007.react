import React, { Component} from 'react'
import profileImg from '../img/profile.png';
import './SimpleInfo.css'

export default class SimpleInfo extends Component {
    render () {
        return (
            <div className="profile">
                <div className="profile_img">
                    <img src={profileImg} alt='profileImgage'/>
                </div>
                <div className="profile_text">
                    -
                    <br/>
                    <br/>
                    -
                    <br/>
                    -
                </div>
            </div>
        )
    }
}