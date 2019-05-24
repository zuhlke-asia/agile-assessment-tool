/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import * as Survey from 'survey-react';
import * as widgets from 'surveyjs-widgets';

import 'bootstrap/dist/css/bootstrap.css';
import 'survey-react/survey.css';
import 'jquery-ui/themes/base/all.css';
import 'nouislider/distribute/nouislider.css';
import 'select2/dist/css/select2.css';
import 'bootstrap-slider/dist/css/bootstrap-slider.css';

import 'jquery-bar-rating/dist/themes/css-stars.css';

import $ from 'jquery';
// eslint-disable-next-line import/extensions
import 'jquery-ui/ui/widgets/datepicker.js';
// eslint-disable-next-line import/extensions
import 'select2/dist/js/select2.js';
import 'jquery-bar-rating';


widgets.icheck(Survey, $);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

class AgileAssessment extends React.Component {
  componentWillMount() {
    import('icheck');
    // eslint-disable-next-line no-multi-assign
    window.$ = window.jQuery = $;
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
