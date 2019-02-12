import React from 'react';

export default props => {
    return (
        <div id="pagecontent">
            <div
                className="github-content mobile-padding row zue-teaser-medium-boxes zue-boxes-container ng-scope">
                <h4>{props.content}</h4>
            </div>
        </div>
    );
}