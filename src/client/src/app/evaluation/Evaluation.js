import React from 'react';
import '../../styles/progress-bars.scss';
import Profile from '../UI/ProfileSmall';
import profileInformation from '../UI/profileInformation';
import Link from '../UI/Link';
import linkInformation from '../UI/linkInformation';

export default class Evaluation extends React.Component {

    constructor(props) {
        super(props);

        if (!this.props.evaluations) {
            this.state = {};
            return;
        }

        // Set the scores to 0 first so that we can transition on the width later,
        // giving the score bars a nice animation effect
        const emptyEvaluationsForTransitioning = this.props.evaluations
            .map(evaluation => Object.assign({}, evaluation, {total: 0}));

        this.state = {
            evaluations: emptyEvaluationsForTransitioning
        };
    }

    componentDidMount() {

        // Set the scores back to the original, causing the transition
        setTimeout(() => {
            this.setState(state => ({
                ...state,
                evaluations: this.props.evaluations
            }));
        }, 100);
    }


    render() {

        const scoreBars = !!this.state.evaluations.length && (<div>
            <p>Here are your results</p>
            <div className="score-container">
                {this.state.evaluations
                    .map((item, i) => ([
                            <div key={item.name} className="category-label">{item.name}</div>,
                            <div key={i} className={`${item.name} score-bar-container`}>
                                <div
                                    className="score-bar"
                                    style={{width: `${100 * item.total / item.max}%`}}
                                >&nbsp;</div>
                            </div>
                        ]
                    ))}
            </div>
        </div>);

        return (
            <div id="pagecontent">
                <div
                    className="github-content mobile-padding row zue-teaser-medium-boxes zue-boxes-container ng-scope">
                    <h3>Thank you for participating!</h3>
                    {scoreBars}
                    <p>
                        Find out how Zuhlke can help your organisation on your path to agility. Contact one of our experienced consultants today.
                    </p>
                    <Link linkArray={linkInformation['team'].slice(0,6)}/>
                    <Profile profileArray={profileInformation}/>
                </div>
            </div>
        )
    }
}