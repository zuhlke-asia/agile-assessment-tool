module.exports = {
    title: 'Product Feedback Survey Example',
    showProgressBar: 'top',
    pages: [
        {
            questions: [
                {
                    type: 'radiogroup',
                    name: 'Name_Is your organisation currently practicing plan-driven or agile software development?',
                    title: 'Title_Is your organisation currently practicing plan-driven or agile software development?',
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
                    name: 'Name_Which methodology does your organisation most closely follow?',
                    title: 'Title_Which methodology does your organisation most closely follow?',
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
                    name: 'Name_How satisfied are YOU with your current methodology?',
                    title: 'Title_How satisfied are YOU with your current methodology?',
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