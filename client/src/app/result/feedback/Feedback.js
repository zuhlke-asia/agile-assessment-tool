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

    const { email, feedback, privacyAgreement } = this.state;
    const { onSubmit } = this.props;

    const validation = FeedbackValidator.getValidationResult(email, privacyAgreement);

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

    await onSubmit({ feedback, email, privacyAgreement });

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
    const { validation } = this.state;
    return validation.reason === ValidationErrors.INVALID_EMAIL;
  }

  privacyAgreementMissing() {
    const { validation } = this.state;
    return validation.reason === ValidationErrors.PRIVACY_AGREEMENT_MISSING;
  }

  render() {
    const { feedback, feedbackSaved } = this.state;
    return (
      <div className="feedback">
        <div className={`feedback-form ${feedbackSaved ? 'collapsed' : ''}`}>
          <h5>We&apos;d love to hear your feedback!</h5>
          <p>Feel free to leave your feedback and email address here. Thanks!</p>
          <form onSubmit={(ev) => this.handleSubmit(ev)}>
            {this.emailIsInvalid() && (
              <span className="validation-error">Please enter a valid email address.</span>
            )}

            {this.privacyAgreementMissing() && (
              <span className="validation-error">
                Please read and accept our privacy policy and terms of use.
              </span>
            )}

            <textarea
              name="feedback"
              placeholder="Enter your feedback here"
              disabled={feedbackSaved}
              onChange={(event) => this.handleFeedbackChanged(event.target.value)}
            />

            <input
              name="email"
              type="text"
              placeholder="Enter your email here"
              disabled={feedbackSaved}
              onChange={(event) => this.handleEmailChanged(event.target.value)}
            />

            <label htmlFor="privacy-agreement">
              <input
                type="checkbox"
                id="privacy-agreement"
                onChange={(event) => this.handlePrivacyAgreementChanged(event.target.checked)}
                disabled={feedbackSaved}
              />
              <span>I hereby confirm that I have read the&nbsp;</span>
              <a href="https://www.zuehlke.com/ch/en/privacy-policy/">privacy policy</a>
              <span>&nbsp;and&nbsp;</span>
              <a href="https://www.zuehlke.com/ch/en/terms-use">terms of use</a>
              <span>&nbsp;and accepted them.</span>
            </label>
            <button type="submit" disabled={!feedback || feedbackSaved}>
              Submit
            </button>
          </form>
        </div>
        {feedbackSaved && <span className="feedback-saved-hint">Thank you for your feedback!</span>}
      </div>
    );
  }
}
