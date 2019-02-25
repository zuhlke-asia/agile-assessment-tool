import React, { Component } from 'react';
import { generateSurveyConfig } from './surveyconfig/configGenerator';
import { evaluateScore } from './result/evaluation/scoreEvaluator';

import Header from './Header';
import Footer from './Footer';
import FootNote from './FootNote';
import AgileAssessment from './AgileAssessment';
import axios from 'axios';
import Result from './result/Result';

const PageState = {
    SURVEY: 'SURVEY',
    EVALUATION: 'EVALUATION',
    SAVING_RESULT: 'SAVING_RESULT'
};

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pageState: PageState.SURVEY,
            evaluation: undefined,
            surveyConfig: undefined,
            showBanner: true
        };
    }

    async componentDidMount() {
        try {
            if (!this.surveyConfig) {
                const urlParams = new URLSearchParams(window.location.search);
                const env = urlParams.get('env');

                const response = await axios.get(`api/surveyconfig${env ? `?env=${env}` : ''}`);
                const surveyConfig = generateSurveyConfig(response.data);
                this.setState(prevState => ({
                    ...prevState,
                    surveyConfig: surveyConfig,
                    pageState: PageState.SURVEY,
                }));

            }
        } catch (err) {
            console.error(err);
        }
    }

    async onComplete(result) {
        try {
            const answers = result.data;

            this.setState(prevState => ({
                ...prevState,
                pageState: PageState.SAVING_RESULT,
            }));

            await axios.post('api/survey', answers);

            const evaluations = evaluateScore(answers);

            this.setState(prevState => ({
                ...prevState,
                evaluations,
                pageState: PageState.EVALUATION
            }))
        } catch (err) {
            console.error(err);
        }
    };

    onStart() {
        this.setState(prevState => ({
            ...prevState,
            pageState: PageState.SURVEY
        }));
    };

    onValueChange() {
        if (!this.state.showBanner) {
            return;
        }

        this.setState(prevState => ({
            ...prevState,
            showBanner: false
        }));
    }

    getContent() {
        switch (this.state.pageState) {
            case PageState.EVALUATION:
                return <Result evaluations={this.state.evaluations}/>;
            case PageState.SAVING_RESULT:
                return <div className="spinner">&nbsp;</div>;
            default:
                return (
                    <div>
                        {this.state.surveyConfig && <AgileAssessment
                            config={this.state.surveyConfig}
                            onComplete={result => this.onComplete(result)}
                            onValueChange={() => this.onValueChange()}/>}
                    </div>
                );
        }
    }

    render() {
        const content = this.getContent();
        return (
            <div id="outer">
                <Header showBanner={this.state.showBanner}/>
                {content}
                <FootNote/>
                <Footer/>
            </div>
        );
    }
}