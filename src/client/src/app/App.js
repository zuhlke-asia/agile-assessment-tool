import React, {Component} from 'react';
import {generateSurveyConfig} from './surveyconfig/configGenerator';

import Header from './Header';
import Footer from './Footer';
import FootNote from './FootNote';
import WelcomePage from './Welcome';
import EvaluationPage from './Evaluation';
import AgileAssessment from './AgileAssessment';
import axios from 'axios';

const PageState = {
    WELCOME: 'WELCOME',
    SURVEY: 'SURVEY',
    EVALUATION: 'EVALUATION',
};

export default class App extends Component {

    state = {
        pageState: PageState.WELCOME,
        response: undefined,
        surveyConfig: undefined,
    };

    onValueChanged() {

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

    onComplete = async (result) => {
        try {
            const res = await axios.post("/api/survey", result.data);
            this.setState(prevState => ({
                ...prevState,
                response: JSON.stringify(res.data),
                pageState: PageState.EVALUATION
            }))
        } catch (err) {
            console.error(err);
        }
    };

    onStart = () => {
        this.setState(prevState => ({
            ...prevState,
            pageState: PageState.SURVEY
        }))
    };

    getContent() {
        switch (this.state.pageState) {
            case PageState.WELCOME:
                return <WelcomePage onStart={this.onStart}/>;
            case PageState.EVALUATION:
                return <EvaluationPage content={this.state.response}/>;
            default:
                return <AgileAssessment
                    config={this.state.surveyConfig}
                    onComplete={this.onComplete}
                    onValueChange={this.onValueChanged}
                />;
        }

    }

    render() {
        const content = this.getContent();
        return (
            <div id="outer">
                <Header/>
                {content}
                <FootNote/>
                <Footer/>
            </div>
        );
    }
}