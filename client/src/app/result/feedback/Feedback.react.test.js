import React from 'react';
import { mount } from 'enzyme';
import Feedback from './Feedback';

test('sets submit button to disabled when no feedback is entered', () => {
  const wrapper = mount(<Feedback onSubmit={() => {}} />);

  const textarea = wrapper.find('textarea');
  const submitBeforeChange = wrapper.find('button[type="submit"]');

  expect(textarea).toHaveText('');
  expect(submitBeforeChange).toBeDisabled();

  textarea.simulate('change', { target: { value: 'Feedback' } });

  const submitAfterChange = wrapper.find('button[type="submit"]');
  expect(submitAfterChange).not.toBeDisabled();
});

test('displays invalid email warning when invalid email is entered', () => {
  const onSubmitCallback = jest.fn(() => {});
  const wrapper = mount(<Feedback onSubmit={onSubmitCallback} />);

  const textarea = wrapper.find('textarea');
  const email = wrapper.find('input[name="email"]');

  textarea.simulate('change', { target: { value: 'Feedback' } });
  email.simulate('change', { target: { value: 'invalid' } });

  const form = wrapper.find('form');
  form.simulate('submit');

  const validationError = wrapper.find('span.validation-error');
  expect(validationError).toHaveText('Please enter a valid email address.');
  expect(onSubmitCallback.mock.calls.length).toBe(0);
});

test('displays invalid email warning when email is blank', () => {
  const onSubmitCallback = jest.fn(() => {});
  const wrapper = mount(<Feedback onSubmit={onSubmitCallback} />);

  const textarea = wrapper.find('textarea');

  textarea.simulate('change', { target: { value: 'Feedback' } });

  const form = wrapper.find('form');
  form.simulate('submit');

  const validationError = wrapper.find('span.validation-error');
  expect(validationError).toHaveText('Please enter a valid email address.');
  expect(onSubmitCallback.mock.calls.length).toBe(0);
});

test('displays privacy agreement warning when email is provided but privacy agreement not checked', () => {
  const onSubmitCallback = jest.fn(() => {});
  const wrapper = mount(<Feedback onSubmit={onSubmitCallback} />);

  const textarea = wrapper.find('textarea');
  const email = wrapper.find('input[name="email"]');

  textarea.simulate('change', { target: { value: 'Feedback' } });
  email.simulate('change', { target: { value: 'test@test.com' } });

  const form = wrapper.find('form');
  form.simulate('submit');

  const validationError = wrapper.find('span.validation-error');
  expect(validationError).toHaveText('Please read and accept our privacy policy and terms of use.');
  expect(onSubmitCallback.mock.calls.length).toBe(0);
});

test('calls the onSubmit callback when input is valid', () => {
  const onSubmitCallback = jest.fn(() => {});
  const wrapper = mount(<Feedback onSubmit={onSubmitCallback} />);

  const textarea = wrapper.find('textarea');
  const email = wrapper.find('input[name="email"]');
  const organisation = wrapper.find('input[name="organisation"]');
  const privacyAgreement = wrapper.find('input[type="checkbox"]');

  textarea.simulate('change', { target: { value: 'Feedback' } });
  email.simulate('change', { target: { value: 'test@test.com' } });
  organisation.simulate('change', { target: { value: 'Zuhlke' } });
  privacyAgreement.simulate('change', { target: { checked: true } });

  const form = wrapper.find('form');
  form.simulate('submit');

  expect(onSubmitCallback.mock.calls.length).toBe(1);
  expect(onSubmitCallback.mock.calls[0][0]).toEqual({
    feedback: 'Feedback',
    email: 'test@test.com',
    organisation: 'Zuhlke',
    privacyAgreement: true,
  });
});
