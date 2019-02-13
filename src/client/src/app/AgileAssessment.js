import React from 'react';
import * as Survey from 'survey-react';
import * as widgets from 'surveyjs-widgets';

import "bootstrap/dist/css/bootstrap.css";
import "survey-react/survey.css";
import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";


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

export default class AgileAssessment extends React.Component {

    componentWillMount() {
        import('icheck');
        window['$'] = window['jQuery'] = $;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return !this.props.config;
    }

    render() {
        Survey.Survey.cssType = 'bootstrap';

        const {config, onComplete, onValueChange} = this.props;

        const model = new Survey.Model(config);

        return (
            <div id="pagecontent">
                <div
                    className="github-content mobile-padding row zue-teaser-medium-boxes zue-boxes-container ng-scope">
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