import React from 'react';
import Evaluation from "./evaluation/Evaluation";
import Link from "./link/Link";
import Profile from "./profile/Profile";


export default ({evaluations}) => (
    <div id="pagecontent">
        <div className="github-content mobile-padding row zue-teaser-medium-boxes zue-boxes-container ng-scope">
            <h3>Thank you for participating!</h3>
            <Evaluation evaluations={evaluations}/>
            <p>
                Find out how Zuhlke can help your organisation on your path to agility. Contact one of our experienced consultants today.
            </p>
            <Link />
            <Profile />
        </div>
    </div>
);