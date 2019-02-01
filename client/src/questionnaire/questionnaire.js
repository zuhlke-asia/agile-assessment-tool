module.exports = {
    showProgressBar: 'top',
    questionTitleTemplate: '{no}. {title}',
    pages: [
        {
            questions: [
                {
                    type: 'radiogroup',
                    name: 'Is your organisation currently practicing plan-driven or agile software development?',
                    title: 'Is your organisation currently practicing plan-driven or agile software development?',
                    choices: [
                        'All Agile',
                        'Mostly Agile',
                        'Both Agile and plan-driven',
                        'Mostly plan-driven',
                        'All plan-driven'
                    ],
                    isRequired: true
                }
            ]
        },
        {
            questions: [
                {
                    type: 'radiogroup',
                    name: 'Which methodology does your organisation most closely follow?',
                    title: 'Which methodology does your organisation most closely follow?',
                    choices: [
                        'Scrum',
                        'Lean',
                        'Kanban',
                        'RUP',
                        'Waterfall'
                    ]
                },
                {
                    type: 'radiogroup',
                    name: 'How satisfied are YOU with your current methodology?',
                    title: 'How satisfied are YOU with your current methodology?',
                    choices: [
                        'Unsatisfied',
                        'Somewhat satisfied',
                        'Satisfied',
                        'Very satisfied',
                    ]
                }

            ]
        },
        {
            questions: [
                {
                    type: 'dropdown',
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
                    name: 'estimation-unit',
                    title: 'What units do you use for estimation?',
                },
            ]
        },
        {
            questions: [
                {
                    type: 'rating',
                    name: 'mood',
                    title: 'How confident are you that your current project will be successful?',
                    description: '1 means not confident at all, 5 means very confident'
                },
            ]
        },
        {
            questions: [
                {
                    type: 'text',
                    name: 'company',
                    title: 'Optionally, you can leave your company name here.',
                    description: 'We would love to work with you!'
                },
            ]
        }
    ]
};