import React from 'react';
import { ValidationErrors, getValidationResult } from './feedbackValidator';

export default class Feedback extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feedback: '',
      email: '',
      organisation: '',
      privacyAgreement: false,
      validation: {},
    };
  }

  async handleSubmit(event) {
    event.preventDefault();

    const { email, feedback, organisation, privacyAgreement } = this.state;
    const { onSubmit } = this.props;

    const validation = getValidationResult(email, privacyAgreement);

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
      organisation: '',
      feedback: '',
      privacyAgreement: false,
    }));

    await onSubmit({ feedback, email, organisation, privacyAgreement });

    this.setState((prev) => ({
      ...prev,
      feedbackSaved: true,
    }));
  }

  handleEmailChanged(email) {
    this.setState((prev) => ({
      ...prev,
      email,
    }));
  }

  handleOrganisationChange(organisation) {
    this.setState((prev) => ({
      ...prev,
      organisation,
    }));
  }

  handleFeedbackChanged(feedback) {
    this.setState((prev) => ({
      ...prev,
      feedback,
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
          <h5>We&apos;d love to hear from you!</h5>
          <p>
            Get in touch if you&apos;d like to receive a personalised assessment based on your
            answers, or for a more in-depth conversation on the value agile practices can bring to
            your organisation.
          </p>
          <form onSubmit={(ev) => this.handleSubmit(ev)}>
            {this.emailIsInvalid() && (
              <span className="validation-error">Please enter a valid email address.</span>
            )}

            {this.privacyAgreementMissing() && (
              <span className="validation-error">
                Please read and accept our privacy policy and terms of use.
              </span>
            )}

            <input
              name="email"
              type="text"
              placeholder="Email"
              disabled={feedbackSaved}
              onChange={(event) => this.handleEmailChanged(event.target.value)}
            />

            <input
              name="organisation"
              type="text"
              placeholder="Organisation (Optional)"
              disabled={feedbackSaved}
              onChange={(event) => this.handleOrganisationChange(event.target.value)}
            />

            <textarea
              name="feedback"
              placeholder="Feedback / Comments / Specific areas of interest"
              disabled={feedbackSaved}
              onChange={(event) => this.handleFeedbackChanged(event.target.value)}
            />

            <label htmlFor="privacy-agreement">
              <input
                type="checkbox"
                id="privacy-agreement"
                onChange={(event) => this.handlePrivacyAgreementChanged(event.target.checked)}
                disabled={feedbackSaved}
              />
              <span>I hereby confirm that I have read and accepted the&nbsp;</span>
              <a href="https://www.zuehlke.com/ch/en/privacy-policy/">privacy policy</a>
              <span>&nbsp;and&nbsp;</span>
              <a href="https://www.zuehlke.com/ch/en/terms-use">terms of use</a>
              <span>.</span>
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
