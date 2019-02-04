import { evaluate } from './scoreEvaluator';

test('given a result with one category, returns the score of a category', () => {
    // given
    const result = {
        "agility__question?": 3
    };

    // when
    const score = evaluate(result);

    // then
    const expected = {
        agility: 3
    };

    expect(score).toEqual(expected);
});

test('given a result with one category, returns the summed score of a category', () => {
    // given
    const result = {
        "agility__question1?": 3,
        "agility__question2?": 2
    };

    // when
    const score = evaluate(result);

    // then
    const expected = {
        agility: 5
    };

    expect(score).toEqual(expected);
});

test('given a result with two categories, returns the summed score of each category', () => {
    // given
    const result = {
        "agility__question1?": 3,
        "agility__question2?": 2,
        "estimation__question1?": 2,
        "estimation__question2?": 2,
    };

    // when
    const score = evaluate(result);

    // then
    const expected = {
        agility: 5,
        estimation: 4
    };

    expect(score).toEqual(expected);
});

test('given a category with non-numeric values, returns the category and answer', () => {
    // given
    const result = {
        "email__what's your email?": "something@something.com",
    };

    // when
    const score = evaluate(result);

    // then
    const expected = {
        email: 'something@something.com',
    };

    expect(score).toEqual(expected);
});


