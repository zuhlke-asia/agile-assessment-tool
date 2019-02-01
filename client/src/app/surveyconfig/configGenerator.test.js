import { generatePageConfig, generateSurveyConfig } from './configGenerator';
import * as QuestionType from './QuestionType';

test('generates one page with text field of category "contact"', () => {
    // given
    const category = 'contact';
    const question = 'Enter your contact details';
    const type = QuestionType.TEXT;
    const description = 'some additional text';

    const page = {
        questions: [{
            type,
            question,
            category,
            description
        }]
    };

    // when
    const pageConfig = generatePageConfig(page);

    // then
    const expectedPageConfig = {
        questions: [{
            type: type,
            description,
            name: `${category}__${question}`,
            title: question,
        }]
    };

    expect(pageConfig).toEqual(expectedPageConfig);
});

test('generates one page with a multiple text field of category "contact"', () => {
    // given
    const category = 'contact';
    const question = 'Enter your contact details';
    const type = QuestionType.MULTIPLE_TEXT;
    const items = [{name: 'text1'}, {name: 'text2'}];

    const page = {
        questions: [{
            type,
            question,
            category,
            items
        }]
    };

    // when
    const pageConfig = generatePageConfig(page);

    // then
    const expectedPageConfig = {
        questions: [{
            type: type,
            name: `${category}__${question}`,
            title: question,
            items
        }]
    };

    expect(pageConfig).toEqual(expectedPageConfig);
});


test('generates one page with radio group of category "agility"', () => {
    // given
    const category = 'agility';
    const question = 'How agile are you?';
    const type = QuestionType.RADIO;
    const choices = [{
        text: 'Very agile',
        value: 10
    }, {
        text: 'A little agile',
        value: 1
    }];

    const page = {
        questions: [{
            type,
            question,
            category,
            choices
        }]
    };

    // when
    const pageConfig = generatePageConfig(page);

    // then
    const expectedPageConfig = {
        questions: [{
            type,
            name: `${category}__${question}`,
            title: question,
            choices
        }]
    };

    expect(pageConfig).toEqual(expectedPageConfig);
});

test('generates one page with dropdown of category "estimation"', () => {
    // given
    const category = 'estimation';
    const question = 'How do you estimate?';
    const type = QuestionType.DROPDOWN;
    const choices = [{
        text: 'Story points',
        value: 10
    }, {
        text: 'Working hours',
        value: 1
    }];

    const page = {
        questions: [{
            type,
            question,
            category,
            choices
        }]
    };

    // when
    const pageConfig = generatePageConfig(page);

    // then
    const expectedPageConfig = {
        questions: [{
            type,
            name: `${category}__${question}`,
            title: question,
            choices
        }]
    };

    expect(pageConfig).toEqual(expectedPageConfig);
});

test('generates one page with two text fields of category "contact"', () => {
    // given
    const category = 'contact';
    const type = QuestionType.TEXT;
    const question1 = 'Enter your contact details';
    const question2 = 'Enter some more details';

    const page = {
        questions: [{
            category,
            type,
            question: question1,
        },{
            category,
            type,
            question: question2,
        }]
    };

    // when
    const pageConfig = generatePageConfig(page);

    // then
    const expectedPageConfig = {
        questions: [{
            type: type,
            name: `${category}__${question1}`,
            title: question1,
        },{
            type: type,
            name: `${category}__${question2}`,
            title: question2,
        }]
    };

    expect(pageConfig).toEqual(expectedPageConfig);
});

test('generates complete survey config given a config', () => {
    // given
    const category = 'contact';
    const question = 'Enter your contact details';
    const type = QuestionType.TEXT;

    const config = {
        pages: [{
            questions: [{
                type,
                question,
                category,
            }]
        }]
    };

    // when
    const surveyConfig = generateSurveyConfig(config);

    // then
    const expectedSurveyConfig = {
        showProgressBar: 'top',
        questionTitleTemplate: '{no}. {title}',
        pages: [{
            questions: [{
                type: type,
                name: `${category}__${question}`,
                title: question,
            }]
        }]
    };

    expect(surveyConfig).toEqual(expectedSurveyConfig);
});
