import React from 'react';
import FeedbackValidator, { ValidationErrors } from './feedbackValidator';

export default class Feedback extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feedback: '',
      email: '',
      privacyAgreement: false,
      validation: {},
    };
  }

  async handleSubmit(event) {
    event.preventDefault();

    const { email } = this.state;
    const { feedback } = this.state;
    const { privacyAgreement } = this.state;

    const validation = FeedbackValidator.getValidationResult(email, this.state.privacyAgreement);

    this.setState((prev) => ({
      ...prev,
      validation,
    }));

    if (!validation.valid) {
      return;
    }

    this.setState((prev) => ({
      ...prev,
      email: '',
      feedback: '',
      privacyAgreement: false,
    }));

    await this.props.onSubmit({ feedback, email, privacyAgreement });

    this.setState((prev) => ({
      ...prev,
      feedbackSaved: true,
    }));
  }

  handleFeedbackChanged(feedback) {
    this.setState((prev) => ({
      ...prev,
      feedback,
    }));
  }

  handleEmailChanged(email) {
    this.setState((prev) => ({
      ...prev,
      email,
    }));
  }

  handlePrivacyAgreementChanged(privacyAgreement) {
    this.setState((prev) => ({
      ...prev,
      privacyAgreement,
    }));
  }

  emailIsInvalid() {
    return this.state.validation.reason === ValidationErrors.INVALID_EMAIL;
  }

  privacyAgreementMissing() {
    return this.state.validation.reason === ValidationErrors.PRIVACY_AGREEMENT_MISSING;
  }

  render() {
    return (
      <div className="feedback">
        <div className={`feedback-form ${this.state.feedbackSaved ? 'collapsed' : ''}`}>
          <h5>We'd love to hear your feedback!</h5>
          <p>Feel free to leave your feedback and email address here. Thanks!</p>
          <form onSubmit={(ev) => this.handleSubmit(ev)}>
            {this.emailIsInvalid()
                        && <span className="validation-error">Please enter a valid email address.</span>
            }

            {this.privacyAgreementMissing()
                        && <span className="validation-error">Please read and accept our privacy policy and terms of use.</span>
            }

            <textarea
              name="feedback"
              placeholder="Enter your feedback here"
              disabled={this.state.feedbackSaved}
              onChange={(event) => this.handleFeedbackChanged(event.target.value)}
            />

            <input
              name="email"
              type="text"
              placeholder="Enter your email here"
              disabled={this.state.feedbackSaved}
              onChange={(event) => this.handleEmailChanged(event.target.value)}
            />

            <label>
              <input
                type="checkbox"
                onChange={(event) => this.handlePrivacyAgreementChanged(event.target.checked)}
                disabled={this.state.feedbackSaved}
              />
                            I hereby confirm that I have read
                            the
              {' '}
              <a href="https://www.zuehlke.com/ch/en/privacy-policy/">privacy policy</a>
              {' '}
and
              {' '}
              <a href="https://www.zuehlke.com/ch/en/terms-use">terms of use</a>
              {' '}
and accepted them.
            </label>

            <button type="submit" disabled={!this.state.feedback || this.state.feedbackSaved}>
Submit
            </button>
          </form>
        </div>
        {this.state.feedbackSaved && <span className="feedback-saved-hint">Thank you for your feedback!</span>}
      </div>
    );
  }
}
