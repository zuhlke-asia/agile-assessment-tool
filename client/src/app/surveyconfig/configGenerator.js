import * as QuestionType from './QuestionType';

const generateQuestionConfig = (question) => {
  const questionConfig = {
    type: question.type,
    isRequired: question.isRequired,
    title: question.question,
    hasOther: question.hasOther,
  };

  questionConfig.name = question.name
    ? `${question.category}__${question.name}`
    : `${question.category}__${question.question}`;

  if (question.visibleIf) {
    questionConfig.visibleIf = question.visibleIf;
  }

  if (question.colCount !== undefined) {
    questionConfig.colCount = question.colCount;
  }

  if (question.type === QuestionType.RADIO || question.type === QuestionType.DROPDOWN) {
    questionConfig.choices = question.choices;
  }

  if (question.type === QuestionType.MULTIPLE_TEXT) {
    questionConfig.items = question.items;
  }

  if (question.description) {
    questionConfig.description = question.description;
  }

  return questionConfig;
}

// eslint-disable-next-line import/prefer-default-export
export const generateSurveyConfig = (config) => ({
  showProgressBar: 'top',
  questionTitleTemplate: '{title}',
  pages: config.pages.map((page) => ({
    questions: page.questions.map((question) => generateQuestionConfig(question)),
  })),
});
