module.exports = {
    showProgressBar: 'top',
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
                    ]
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
        }

    ]
};