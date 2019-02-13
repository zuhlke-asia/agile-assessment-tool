import * as QuestionType from './QuestionType';

export function generateSurveyConfig(config) {
    return {
        showProgressBar: 'top',
        questionTitleTemplate: '{no}. {title}',
        pages: config.pages.map(page => ({
            questions: page.questions.map(question => generateQuestionConfig(question))
        }))
    };
}

export const generatePageConfig = page => {

    const questions = page.questions.map(question => generateQuestionConfig(question));

    return {
        questions
    };
};

function generateQuestionConfig(question) {
    const questionConfig = {
        type: question.type,
        isRequired: question.isRequired,
        title: question.question,
    };

    questionConfig.name = question.name ? question.name:`${question.category}__${question.question}`;

    if(question.visibleIf){
        questionConfig.visibleIf = question.visibleIf;
    }

    if(question.colCount !== undefined){
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
