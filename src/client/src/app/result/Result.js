import React from 'react';
import Evaluation from './evaluation/Evaluation';
import Link from './link/Link';
import Profile from './profile/Profile';
import '../../styles/result.scss';

export default ({ evaluations }) => (
    <div id="pagecontent">
        <div className="github-content mobile-padding row zue-teaser-medium-boxes zue-boxes-container ng-scope">
            <div className="result-content">
                <div className="result-left">
                    <h3 className="color-primary">Thank you for participating!</h3>
                    <Evaluation evaluations={evaluations}/>
                    <Link/>
                </div>
                <Profile/>
            </div>
        </div>
    </div>
);