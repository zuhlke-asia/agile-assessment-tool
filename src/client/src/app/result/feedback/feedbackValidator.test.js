import FeedbackValidator, {ValidationErrors} from './feedbackValidator';

test('given an invalid email, returns invalid due to email', () => {
    const invalidEmail = 'aa';

    const result = FeedbackValidator.getValidationResult(invalidEmail);

    const expected = {
        valid: false,
        reason: ValidationErrors.INVALID_EMAIL
    };

    expect(result).toEqual(expected);
});

test('given an empty email, returns valid result', () => {
    const email = '';

    const result = FeedbackValidator.getValidationResult(email);

    const expected = {
        valid: true,
        reason: undefined
    };

    expect(result).toEqual(expected);
});

test('given an valid email but no privacy agreement, returns invalid due to privacy agreement', () => {
    const email = 'test@test.com';
    const privacyAgreement = false;

    const result = FeedbackValidator.getValidationResult(email, privacyAgreement);

    const expected = {
        valid: false,
        reason: ValidationErrors.PRIVACY_AGREEMENT_MISSING
    };

    expect(result).toEqual(expected);
});