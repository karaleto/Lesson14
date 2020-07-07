import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Associate's Degree in Web Development" where="Wake Tech Community College" from="August 2019" to="Present" />
                <Widecard title="Certificate in Programming Fundamentals" where="Wake Tech Community College" from="January 2019" to="July 2020" />
                <Widecard title="Associate's Degree in Business Administration" where="Wake Tech Community College" from="August 2014" to=" May 2018" />
            </div>
        )
    }
}
export default Education