import React from 'react';

export default props => {
    return (
        <div id="pagecontent">
            <div
                className="github-content mobile-padding row zue-teaser-medium-boxes zue-boxes-container ng-scope">

                <h4>Welcome</h4>
                <button onClick={props.onStart}>Start</button>
            </div>
        </div>
    )
}
