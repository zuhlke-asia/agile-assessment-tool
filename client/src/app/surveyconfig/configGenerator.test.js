import { generateSurveyConfig } from './configGenerator';
import * as QuestionType from './QuestionType';

test('generates complete survey config given a config', () => {
  // given
  const category = 'contact';
  const question = 'Enter your contact details';
  const type = QuestionType.TEXT;

  const config = {
    pages: [
      {
        questions: [
          {
            type,
            question,
            category,
          },
        ],
      },
    ],
  };

  // when
  const surveyConfig = generateSurveyConfig(config);

  // then
  const expectedSurveyConfig = {
    showProgressBar: 'top',
    questionTitleTemplate: '{title}',
    pages: [
      {
        questions: [
          {
            type,
            name: `${category}__${question}`,
            title: question,
          },
        ],
      },
    ],
  };

  expect(surveyConfig).toEqual(expectedSurveyConfig);
});

test('generates conditional questions if given visibleIf param', () => {
  // given
  const triggerQuestion = {
    type: QuestionType.RADIO,
    question: 'Do you use Scrum?',
    category: 'scrum',
    name: 'ifScrum',
    choices: ['Yes', 'No'],
    colCount: 0,
  };

  const conditionalQuestion = {
    type: QuestionType.RADIO,
    question: 'How often do you reach your sprint goals?',
    category: 'scrum',
    visibleIf: '{srcum__ifScrum}="Yes"',
  };

  const config = {
    pages: [
      {
        questions: [triggerQuestion, conditionalQuestion],
      },
    ],
  };

  // when
  const surveyConfig = generateSurveyConfig(config);

  // then
  const expectedSurveyConfig = {
    showProgressBar: 'top',
    questionTitleTemplate: '{title}',
    pages: [
      {
        questions: [
          {
            type: QuestionType.RADIO,
            name: 'scrum__ifScrum',
            title: 'Do you use Scrum?',
            choices: ['Yes', 'No'],
            colCount: 0,
          },
          {
            type: QuestionType.RADIO,
            name: 'scrum__How often do you reach your sprint goals?',
            title: 'How often do you reach your sprint goals?',
            visibleIf: '{srcum__ifScrum}="Yes"',
          },
        ],
      },
    ],
  };

  expect(surveyConfig).toEqual(expectedSurveyConfig);
});
