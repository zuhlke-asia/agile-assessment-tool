import React, { Component } from 'react';

import config from '../questionnaire/questionnaire';

import Header from './Header';
import Footer from './Footer';
import FootNote from './FootNote';
import AgileAssessment from './AgileAssessment';


export default class App extends Component {

    onValueChanged(result) {
        console.log('value changed!');
    }

    onComplete(result) {
        console.log('Complete! ' + JSON.stringify(result));
    }

    render() {
        return (
            <div id="outer">
                <Header/>
                <AgileAssessment
                    config={config}
                    onComplete={this.onComplete}
                    onValueChange={this.onValueChanged}
                />
                <FootNote />
                <Footer/>
            </div>
        );
    }
}