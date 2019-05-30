export const ValidationErrors = {
  INVALID_EMAIL: 'INVALID_EMAIL',
  PRIVACY_AGREEMENT_MISSING: 'PRIVACY_AGREEMENT_MISSING',
};

const isEmailProvided = (email) => typeof email !== 'undefined' || email !== null;

const isEmailValid = (email) => isEmailProvided(email) && /(.+)@(.+){2,}\.(.+){2,}/.test(email);

export const getValidationResult = (email, isPrivacyAgreementChecked) => {
  const valid = isEmailValid(email) && isPrivacyAgreementChecked;

  let reason;

  if (!isEmailValid(email)) {
    reason = ValidationErrors.INVALID_EMAIL;
  } else if (!isPrivacyAgreementChecked) {
    reason = ValidationErrors.PRIVACY_AGREEMENT_MISSING;
  }

  return {
    valid,
    reason,
  };
};
