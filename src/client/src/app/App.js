import React, {Component} from 'react';

import config from './surveyconfig/config';
import {generateSurveyConfig} from './surveyconfig/configGenerator';

import Header from './Header';
import Footer from './Footer';
import FootNote from './FootNote';
import WelcomePage from './Welcome';
import EvaluationPage from './Evaluation';
import AgileAssessment from './AgileAssessment';
import axios from 'axios';

export default class App extends Component {

    state = {
        isWelcoming: true,
        isSubmitted: false,
        response: undefined,
    }

    constructor(props) {
        super(props);

        this.surveyConfig = generateSurveyConfig(config);
    }

    onValueChanged(result) {
        console.log('value changed!');
    }

     onComplete = async(result) => {
        try {
            const res = await axios.post("/api/survey", result.data);
            this.setState(prevState => ({
                ...prevState,
                response: JSON.stringify(res),
                isSubmitted: true
            }))
        } catch (err) {
            console.error(err);
        }
    }

    onStart = () => {
        this.setState(prevState => ({
           ...prevState,
           isWelcoming: false
        }))
    }

    getContent(){
        if(this.state.isWelcoming){
            return <WelcomePage onStart={this.onStart}/>
        }else if(this.state.isSubmitted){
            return <EvaluationPage content={this.state.response}/>;
        }else {
            return (<AgileAssessment
                config={this.surveyConfig}
                onComplete={this.onComplete}
                onValueChange={this.onValueChanged}
            />);
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