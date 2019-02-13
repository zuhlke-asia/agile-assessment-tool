import React, { Component } from 'react';
import { generateSurveyConfig } from './surveyconfig/configGenerator';
import { evaluateScore } from './evaluation/scoreEvaluator';

import Header from './Header';
import Footer from './Footer';
import FootNote from './FootNote';
import WelcomePage from './Welcome';
import Evaluation from './evaluation/Evaluation';
import AgileAssessment from './AgileAssessment';
import axios from 'axios';

const PageState = {
    WELCOME: 'WELCOME',
    SURVEY: 'SURVEY',
    EVALUATION: 'EVALUATION',
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
                const response = await axios.get("/api/surveyconfig");
                const surveyConfig = generateSurveyConfig(response.data);
                this.setState(prevState => ({
                    ...prevState,
                    surveyConfig: surveyConfig
                }));
            }
        } catch (err) {
            console.error(err);
        }
    }

    async onComplete(result) {
        try {
            const answers = result.data;

            await axios.post("/api/survey", answers);

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
            case PageState.WELCOME:
                return <WelcomePage onStart={() => this.onStart()}/>;
            case PageState.EVALUATION:
                return <Evaluation evaluations={this.state.evaluations}/>;
            default:
                return <AgileAssessment
                    config={this.state.surveyConfig}
                    onComplete={result => this.onComplete(result)}
                    onValueChange={() => this.onValueChange()}
                />;
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