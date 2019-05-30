import { evaluateScore, MAX_POINTS_PER_ANSWER } from './scoreEvaluator';

test('given a result with one category, returns the score of a category', () => {
  // given
  const result = {
    'agility__question?': 3,
  };

  // when
  const score = evaluateScore(result);

  // then
  const expected = [
    {
      name: 'agility',
      total: 3,
      max: MAX_POINTS_PER_ANSWER,
    },
  ];

  expect(score).toEqual(expected);
});

test('given a result with one category, returns the summed score of a category', () => {
  // given
  const result = {
    'agility__question1?': 3,
    'agility__question2?': 2,
  };

  // when
  const score = evaluateScore(result);

  // then
  const expected = [
    {
      name: 'agility',
      total: 5,
      max: MAX_POINTS_PER_ANSWER * 2,
    },
  ];

  expect(score).toEqual(expected);
});

test('given a result with two categories, returns the summed score of each category', () => {
  // given
  const result = {
    'agility__question1?': 3,
    'agility__question2?': 2,
    'estimation__question1?': 2,
    'estimation__question2?': 2,
  };

  // when
  const score = evaluateScore(result);

  // then
  const expected = [
    {
      name: 'agility',
      total: 5,
      max: MAX_POINTS_PER_ANSWER * 2,
    },
    {
      name: 'estimation',
      total: 4,
      max: MAX_POINTS_PER_ANSWER * 2,
    },
  ];

  expect(score).toEqual(expected);
});

test('negative ratings should be ignored', () => {
  // given
  const result = {
    'agility__question1?': 3,
    'agility__question2?': -1,
  };

  // when
  const score = evaluateScore(result);

  // then
  const expected = [
    {
      name: 'agility',
      total: 3,
      max: MAX_POINTS_PER_ANSWER,
    },
  ];

  expect(score).toEqual(expected);
});

test('questions of category "additional" should be ignored', () => {
  // given
  const result = {
    'additional__question1?': 3,
    'additional__question2?': -1,
  };

  // when
  const score = evaluateScore(result);

  // then
  const expected = [];

  expect(score).toEqual(expected);
});


test('ignores non-numeric values that cannot be scored', () => {
  // given
  const result = {
    "email__what's your email?": 'something@something.com',
  };

  // when
  const score = evaluateScore(result);

  // then
  const expected = [];

  expect(score).toEqual(expected);
});
