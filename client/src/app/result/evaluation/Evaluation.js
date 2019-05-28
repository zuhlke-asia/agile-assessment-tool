import React from 'react';
import PropTypes from 'prop-types';

import '../../../styles/evaluation.scss';

const Evaluation = ({ evaluations }) => (
  <div>
    {!!evaluations.length && (
      <div>
        <p>
          Below is our assessment of how agile your organisation is across several categories, based
          on the answers you provided:
        </p>
        <div className="score-container">
          {evaluations.map((item) => (
            <div key={item.name} className="category-label">
              <div>{item.name}</div>
              <div className={`${item.name} score-bar-container`}>
                <div className="score-bar" style={{ width: `${(100 * item.total) / item.max}%` }}>
                  &nbsp;
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

Evaluation.propTypes = {
  evaluations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    }),
  ),
};

Evaluation.defaultProps = {
  evaluations: [],
};

export default Evaluation;
