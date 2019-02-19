import React from 'react';
import '../../../styles/evaluation.scss';

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

        return (
            <div>
                {this.state.evaluations && !!this.state.evaluations.length && (
                    <div>
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
                    </div>
                )}
            </div>
        )
    }
}