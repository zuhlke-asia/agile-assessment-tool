export default {
  getValidationResult(email, privacyAgreement) {
    const emailProvided = !!email;
    const emailIsValid = !emailProvided || (emailProvided && /(.+)@(.+){2,}\.(.+){2,}/.test(email));
    const privacyAgreementIsValid = !emailProvided || privacyAgreement;

    const valid = emailIsValid && privacyAgreementIsValid;

    let reason;

    if (!emailIsValid) {
      reason = ValidationErrors.INVALID_EMAIL;
    } else if (!privacyAgreementIsValid) {
      reason = ValidationErrors.PRIVACY_AGREEMENT_MISSING;
    }

    return {
      valid,
      reason,
    };
  },
};

export const ValidationErrors = {
  INVALID_EMAIL: 'INVALID_EMAIL',
  PRIVACY_AGREEMENT_MISSING: 'PRIVACY_AGREEMENT_MISSING',
};
