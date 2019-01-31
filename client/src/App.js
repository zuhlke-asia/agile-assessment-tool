import React, { Component } from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';
import 'bootstrap/dist/css/bootstrap.css';

import 'jquery-ui/themes/base/all.css';
import 'nouislider/distribute/nouislider.css';
import 'select2/dist/css/select2.css';
import 'bootstrap-slider/dist/css/bootstrap-slider.css';

import 'jquery-bar-rating/dist/themes/css-stars.css';

import $ from 'jquery';
import 'jquery-ui/ui/widgets/datepicker.js';
import 'select2/dist/js/select2.js';
import 'jquery-bar-rating';

import json from './questionnaire/questionnaire';

import * as widgets from 'surveyjs-widgets';
import Header from './Header';

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

class App extends Component {

    componentWillMount() {
        import('icheck');
        window['$'] = window['jQuery'] = $;
    }

    onValueChanged(result) {
        console.log('value changed!');
    }

    onComplete(result) {
        console.log('Complete! ' + result);
    }

    render() {
        Survey.Survey.cssType = 'bootstrap';
        var model = new Survey.Model(json);
        return (
            <div id="outer">
                <Header/>
                <div className="surveyjs">
                    <div id="pagecontent">
                        <div
                            className="github-content mobile-padding row zue-teaser-medium-boxes zue-boxes-container ng-scope">
                            <Survey.Survey
                                model={model}
                                onComplete={this.onComplete}
                                onValueChanged={this.onValueChanged}
                            />
                        </div>
                    </div>
                    <div className="zue-brick zue-col-area bg-gray-light zue-oss-header">
                        <div className="row">
                            <div>
                                <div className="columns">
                                    <p className="headersize-6"><span>Zühlke is a </span> <strong> service provider for
                                        innovation
                                        projects</strong>. By combining both <strong>business and technology
                                        expertise</strong>, we
                                        create solutions that satisfy our customers. We develop <strong>financially
                                            successful
                                            products, services and business models</strong> for today’s digital world –
                                        from coming
                                        up with the initial idea through to the implementation and operation. </p>


                                    <p>&nbsp;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div ng-include="'components/footer/footer.html'" className="row"></div>
                </footer>
            </div>
        );
    }
}

export default App;
