import React, {Component} from 'react';

import config from './surveyconfig/config';
import {generateSurveyConfig} from './surveyconfig/configGenerator';

import Header from './Header';
import Footer from './Footer';
import FootNote from './FootNote';
import AgileAssessment from './AgileAssessment';
import axios from 'axios';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.surveyConfig = generateSurveyConfig(config);
    }

    onValueChanged(result) {
        console.log('value changed!');
    }

    async onComplete(result) {
        try{
            axios.post("/api/survey", result.data);
        }catch(err){
            console.error(err);
        }
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