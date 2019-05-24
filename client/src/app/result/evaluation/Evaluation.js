import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/evaluation.scss';

class Evaluation extends React.Component {
  constructor(props) {
    super(props);

    const { evaluations } = this.props;

    if (!evaluations) {
      this.state = {};
      return;
    }

    // Set the scores to 0 first so that we can transition on the width later,
    // giving the score bars a nice animation effect
    const emptyEvaluationsForTransitioning = evaluations.map((evaluation) => Object.assign({}, evaluation, { total: 0 }));

    this.state = {
      evaluations: emptyEvaluationsForTransitioning,
    };
  }

  componentDidMount() {
    const { evaluations } = this.props;
    // Set the scores back to the original, causing the transition
    setTimeout(() => {
      this.setState((state) => ({
        ...state,
        evaluations,
      }));
    }, 100);
  }

  render() {
    const { evaluations } = this.state;
    return (
      <div>
        {evaluations && !!evaluations.length && (
          <div>
            <p>
              Below is our assessment of how agile your organisation is across several categories,
              based on the answers you provided:
            </p>
            <div className="score-container">
              {evaluations.map((item, i) => [
                <div key={item.name} className="category-label">
                  {item.name}
                </div>,
                <div key={i} className={`${item.name} score-bar-container`}>
                  <div className="score-bar" style={{ width: `${(100 * item.total) / item.max}%` }}>
                    &nbsp;
                  </div>
                </div>,
              ])}
            </div>
          </div>
        )}
      </div>
    );
  }
}

Evaluation.propTypes = {
  evaluations: PropTypes.arrayOf(PropTypes.shape({})),
};

Evaluation.defaultProps = {
  evaluations: [],
};

export default Evaluation;
