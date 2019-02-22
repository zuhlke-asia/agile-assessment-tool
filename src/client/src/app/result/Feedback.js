import React from 'react';

export default class Feedback extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            feedback: '',
            email: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const feedback = event.target.elements.feedback.value;
        const email = event.target.elements.email.value;

        this.props.onSubmit({feedback, email});
    }

    render() {
        return (
            <div className="feedback">
                <h5>We are happy to hear your feedback!</h5>
                <p>Feel free to leave your feedback and email address here. Thanks!</p>

                <form onSubmit={ev => this.handleSubmit(ev)}>
                    <textarea name="feedback" placeholder="Enter your feedback here"/>
                    <input name="email" type="text" placeholder="Enter your email here"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}