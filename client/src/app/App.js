import React, { Component } from 'react';

import config from './surveyconfig/config';
import { generateSurveyConfig } from './surveyconfig/configGenerator';
import {evaluate} from './evaluation/scoreEvaluator';

import Header from './Header';
import Footer from './Footer';
import FootNote from './FootNote';
import AgileAssessment from './AgileAssessment';


export default class App extends Component {

    constructor(props) {
        super(props);

        this.surveyConfig = generateSurveyConfig(config);
    }

    onValueChanged(result) {
        console.log('value changed!');
    }

    onComplete(result) {
        const score = evaluate(result.data);
        console.log('Complete! ' + JSON.stringify(score));
    }

    render() {
        return (
            <div id="outer">
                <Header/>
                <AgileAssessment
                    config={this.surveyConfig}
                    onComplete={this.onComplete}
                    onValueChange={this.onValueChanged}
                />
                <FootNote/>
                <Footer/>
            </div>
        );
    }
}