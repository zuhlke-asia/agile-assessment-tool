import * as QuestionType from "../../../client/src/app/surveyconfig/QuestionType";

const dummyQuestions = {

    pages: [
        {
            questions: [
                {
                    type: QuestionType.RADIO,
                    category: 'agility',
                    question: 'Is your organisation currently practicing plan-driven or agile software development?',
                    choices: [
                        {
                            value: 5,
                            text: 'All Agile'
                        },
                        {
                            value: 4,
                            text: 'Mostly Agile'
                        },
                        {
                            value: 3,
                            text: 'Both Agile and plan-driven'
                        },
                        {
                            value: 2,
                            text: 'Mostly plan-driven'
                        },
                        {
                            value: 1,
                            text: 'All plan-driven'
                        },
                    ]
                },
                {
                    type: QuestionType.RADIO,
                    category: 'agility',
                    question: 'How happy are you with your current software development process?',
                    choices: [
                        {
                            value: 5,
                            text: 'Very happy'
                        },
                        {
                            value: 4,
                            text: 'Somewhat happy'
                        },
                        {
                            value: 3,
                            text: 'Not so happy'
                        },
                        {
                            value: 2,
                            text: 'Very unhappy'
                        },
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    type: QuestionType.DROPDOWN,
                    category: 'estimation',
                    question: 'What units do you use for estimation?',
                    choices: [
                        {
                            text: 'Story Points',
                            value: 10,
                        },
                        {
                            text: 'Working Hours',
                            value: 1
                        },
                        {
                            text: 'T-Shirt Sizes',
                            value: 8
                        }
                    ],
                },
            ]
        },
        {
            questions: [
                {
                    type: QuestionType.RATING,
                    question: 'How confident are you that your current project will be successful?',
                    description: '1 means not confident at all, 5 means very confident',
                    category: 'mood',
                },
            ]
        },
        {
            questions: [
                {
                    type: QuestionType.MULTIPLE_TEXT,
                    question: 'Optionally, you can leave some contact data here.',
                    description: 'We would love to work with you!',
                    category: 'contact',
                    items: [{name: 'Company Name'}, {name: 'Email'}]
                },
            ]
        }

    ]
};