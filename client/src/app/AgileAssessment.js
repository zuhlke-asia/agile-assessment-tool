/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import * as Survey from 'survey-react';

import 'bootstrap/dist/css/bootstrap.css';
import 'survey-react/survey.css';
import 'nouislider/distribute/nouislider.css';
import 'select2/dist/css/select2.css';
import 'bootstrap-slider/dist/css/bootstrap-slider.css';

// eslint-disable-next-line import/extensions
import 'select2/dist/js/select2.js';

class AgileAssessment extends React.Component {
  componentWillMount() {
    import('icheck');
  }

  shouldComponentUpdate() {
    const { config } = this.props;
    return !config;
  }

  render() {
    Survey.Survey.cssType = 'bootstrap';

    const { config, onComplete, onValueChange } = this.props;

    const model = new Survey.Model(config);

    return (
      <div id="pagecontent">
        <div
          className="github-content mobile-padding row zue-teaser-medium-boxes zue-boxes-container ng-scope"
        >
          <Survey.Survey
            model={model}
            onComplete={onComplete}
            onValueChanged={onValueChange}
          />
        </div>
      </div>
    );
  }
}

AgileAssessment.propTypes = {
  config: PropTypes.shape({}).isRequired,
  onComplete: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default AgileAssessment;
