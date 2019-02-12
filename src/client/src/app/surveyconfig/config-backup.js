import * as QuestionType from './QuestionType';

const draftQuestions = {
    pages: [
        {
            questions:[
                {
                    type:"radiogroup",
                    category:'organisation',
                    isRequrired: true,
                    question: 'Is software being developed and delivered with plan-driven or agile frameworks at your organization?',
                    choices:[
                        {
                            value: 1,
                            text:'Fully plan driven'
                        },
                        {
                            value: 2,
                            text:'Mostly plan driven'
                        },
                        {
                            value: 3,
                            text:'Plan and agile driven'
                        },
                        {
                            value: 4,
                            text:'Mostly agile'
                        },
                        {
                            value: 5,
                            text:'Fully agile'
                        },
                        {
                            value: -2,
                            text:'Does not apply'
                        },
                        {
                            value: -1,
                            text:'I don’t know'
                        }
                    ]
                },
                {
                    type:"radiogroup",
                    category:'organisation',
                    isRequrired: true,
                    question: 'How long have you been using agile software development delivery frameworks?',
                    choices:[
                        {
                            value: 1,
                            text:'Just starting'
                        },
                        {
                            value: 2,
                            text:'1 to 3 years'
                        },
                        {
                            value: 3,
                            text:'4 to 8 years'
                        },
                        {
                            value: 4,
                            text:'9 to 12 years '
                        },
                        {
                            value: 5,
                            text:'over 12 years'
                        },
                        {
                            value: -2,
                            text:'Does not apply'
                        },
                        {
                            value: -1,
                            text:'I don’t know'
                        }
                    ]
                }
            ]
        },
        {
            questions:[
                {
                    type:"radiogroup",
                    category:'organisation',
                    isRequrired: true,
                    question: 'How transparent are the processes, work progress, and planning across your organisation?',
                    choices:[
                        {
                            value: 1,
                            text:'Not transparent'
                        },
                        {
                            value: 2,
                            text:'A little transparent'
                        },
                        {
                            value: 3,
                            text:'Mostly transparent'
                        },
                        {
                            value: 4,
                            text:'Very transparent'
                        },
                        {
                            value: 5,
                            text:'Completely transparent'
                        },
                        {
                            value: -2,
                            text:'Does not apply'
                        },
                        {
                            value: -1,
                            text:'I don’t know'
                        }
                    ]
                },
                {
                    type:"radiogroup",
                    category:'organisation',
                    question: 'In your opinion, how agile is the overall culture of your organisation?',
                    choices:[
                        {
                            value: 1,
                            text:'Not agile',
                        },
                        {
                            value: 2,
                            text:'A little agile'
                        },
                        {
                            value: 3,
                            text:'Very agile'
                        },
                        {
                            value: 4,
                            text:'Mostly agile'
                        },
                        {
                            value: 5,
                            text:'Completely agile'
                        },
                        {
                            value: -2,
                            text:'Does not apply'
                        },
                        {
                            value: -1,
                            text:'I don’t know'
                        }
                    ]
                }
            ]
        },
        {
            questions:[
                {
                    type:"radiogroup",
                    category:'organisation',
                    isRequrired: true,
                    question: 'How often do you release software to production?',
                    choices:[
                        {
                            value: 1,
                            text:'Every 6 months or less often'
                        },
                        {
                            value: 2,
                            text:'Quarterly'
                        },
                        {
                            value: 3,
                            text:'Every month or two'
                        },
                        {
                            value: 4,
                            text:'Weekly or every two weeks'
                        },
                        {
                            value: 5,
                            text:'Daily'
                        },
                        {
                            value: -2,
                            text:'Does not apply'
                        },
                        {
                            value: -1,
                            text:'I don’t know'
                        }
                    ]
                },
                {
                    type:"radiogroup",
                    category:'organisation',
                    isRequrired: true,
                    question: 'How often do you use agile at scale (e.g. SAFe, LESS) for your projects?',
                    choices:[
                        {
                            value: 1,
                            text:'Never',
                        },
                        {
                            value: 2,
                            text:'Rarely'
                        },
                        {
                            value: 3,
                            text:'Sometimes'
                        },
                        {
                            value: 4,
                            text:'Often'
                        },
                        {
                            value: 5,
                            text:'Always'
                        },
                        {
                            value: -2,
                            text:'Does not apply'
                        },
                        {
                            value: -1,
                            text:'I don’t know'
                        }
                    ]
                }
            ]
        },
        {
            questions:[
                {
                    type:"radiogroup",
                    category:'teams',
                    isRequrired: true,
                    question: 'Are your teams cross-functional?',
                    choices:[
                        {
                            value: 1,
                            text:'No'
                        },
                        {
                            value: 2,
                            text:'Some of them'
                        },
                        {
                            value: 3,
                            text:'Half of them'
                        },
                        {
                            value: 4,
                            text:'Most of them'
                        },
                        {
                            value: 5,
                            text:'All of them'
                        },
                        {
                            value: -2,
                            text:'Does not apply'
                        },
                        {
                            value: -1,
                            text:'I don’t know'
                        }
                    ]
                },
                {
                    type:"radiogroup",
                    category:'organisation',
                    isRequrired: true,
                    question: 'Are your teams self-organising and empowered to make decisions about how they work?',
                    choices:[
                        {
                            value: 1,
                            text:'No',
                        },
                        {
                            value: 2,
                            text:'Some of them'
                        },
                        {
                            value: 3,
                            text:'Half of them'
                        },
                        {
                            value: 4,
                            text:'Most of them'
                        },
                        {
                            value: 5,
                            text:'All of them'
                        },
                        {
                            value: -2,
                            text:'Does not apply'
                        },
                        {
                            value: -1,
                            text:'I don’t know'
                        }
                    ]
                }
            ]
        },
        {
            questions:[
                {
                    type:"radiogroup",
                    category:'teams',
                    isRequrired: true,
                    question: 'How often does the team get together to decide on process improvements?',
                    choices:[
                        {
                            value: 1,
                            text:'Never'
                        },
                        {
                            value: 2,
                            text:'Once or twice a year'
                        },
                        {
                            value: 3,
                            text:'Every few months'
                        },
                        {
                            value: 4,
                            text:'At least once a month'
                        },
                        {
                            value: 5,
                            text:'On a weekly or biweekly basis'
                        },
                        {
                            value: -2,
                            text:'Does not apply'
                        },
                        {
                            value: -1,
                            text:'I don’t know'
                        }
                    ]
                },
                {
                    type:"radiogroup",
                    category:'teams',
                    isRequrired: true,
                    question: 'How often do you use automated testing for your software development?',
                    choices:[
                        {
                            value: 1,
                            text:'Never',
                        },
                        {
                            value: 2,
                            text:'Rarely'
                        },
                        {
                            value: 3,
                            text:'Sometimes'
                        },
                        {
                            value: 4,
                            text:'Often'
                        },
                        {
                            value: 5,
                            text:'Always'
                        },
                        {
                            value: -2,
                            text:'Does not apply'
                        },
                        {
                            value: -1,
                            text:'I don’t know'
                        }
                    ]
                }
            ]
        },
        {
            questions:[
                {
                    type:"radiogroup",
                    category:'project/product',
                    isRequrired: true,
                    question: 'How often do you gather feedback from your end users?',
                    choices:[
                        {
                            value: 1,
                            text:'Never'
                        },
                        {
                            value: 2,
                            text:'Rarely'
                        },
                        {
                            value: 3,
                            text:'Often'
                        },
                        {
                            value: 4,
                            text:'After each release'
                        },
                        {
                            value: 5,
                            text:'During development and after release'
                        },
                        {
                            value: -2,
                            text:'Does not apply'
                        },
                        {
                            value: -1,
                            text:'I don’t know'
                        }
                    ]
                },
                {
                    type:"radiogroup",
                    category:'project/product',
                    isRequrired: true,
                    question: 'How often do you demonstrate your software to any stakeholders outside the team?',
                    choices:[
                        {
                            value: 1,
                            text:'Never',
                        },
                        {
                            value: 2,
                            text:'Once or twice a year'
                        },
                        {
                            value: 3,
                            text:'Every few months'
                        },
                        {
                            value: 4,
                            text:'Once a month, but not more often'
                        },
                        {
                            value: 5,
                            text:'Multiple times per months.'
                        },
                        {
                            value: -2,
                            text:'Does not apply'
                        },
                        {
                            value: -1,
                            text:'I don’t know'
                        }
                    ]
                }
            ]
        },
        {
            questions:[
                {
                    type:"radiogroup",
                    category:'project/product',
                    isRequrired: true,
                    question: 'How often do you work from a Single Backlog per product?',
                    choices:[
                        {
                            value: 1,
                            text:'Never'
                        },
                        {
                            value: 2,
                            text:'Rarely'
                        },
                        {
                            value: 3,
                            text:'Sometimes'
                        },
                        {
                            value: 4,
                            text:'Often'
                        },
                        {
                            value: 5,
                            text:'Always'
                        },
                        {
                            value: -2,
                            text:'Does not apply'
                        },
                        {
                            value: -1,
                            text:'I don’t know'
                        }
                    ]
                },
                {
                    type:"radiogroup",
                    category:'project/product',
                    isRequrired: true,
                    question: 'Do your teams work with a dedicated Product Owner?',
                    choices:[
                        {
                            value: 1,
                            text:'Never'
                        },
                        {
                            value: 2,
                            text:'Rarely'
                        },
                        {
                            value: 3,
                            text:'Sometimes'
                        },
                        {
                            value: 4,
                            text:'Often'
                        },
                        {
                            value: 5,
                            text:'Always'
                        },
                        {
                            value: -2,
                            text:'Does not apply'
                        },
                        {
                            value: -1,
                            text:'I don’t know'
                        }
                    ]
                },
                {
                    type:"radiogroup",
                    category:'project/product',
                    isRequrired: true,
                    question: 'Does the team understand the product vision and the value it brings to the user?',
                    choices:[
                        {
                            value: 1,
                            text:'Never'
                        },
                        {
                            value: 2,
                            text:'Rarely'
                        },
                        {
                            value: 3,
                            text:'Sometimes'
                        },
                        {
                            value: 4,
                            text:'Often'
                        },
                        {
                            value: 5,
                            text:'Always'
                        },
                        {
                            value: -2,
                            text:'Does not apply'
                        },
                        {
                            value: -1,
                            text:'I don’t know'
                        }
                    ]
                }
            ]
        },
        {
            questions:[
                {
                    type:"radiogroup",
                    category:'project/product',
                    isRequrired: true,
                    question: 'Does the Scrum Master / Agile Coach, live by and teach the Agile Values and Principles to the team?',
                    choices:[
                        {
                            value: 1,
                            text:'Never'
                        },
                        {
                            value: 2,
                            text:'Rarely'
                        },
                        {
                            value: 3,
                            text:'Sometimes'
                        },
                        {
                            value: 4,
                            text:'Often'
                        },
                        {
                            value: 5,
                            text:'Always'
                        },
                        {
                            value: -2,
                            text:'Does not apply'
                        },
                        {
                            value: -1,
                            text:'I don’t know'
                        }
                    ]
                },
                {
                    type:"radiogroup",
                    category:'project/product',
                    isRequrired: true,
                    question: 'Do you work on your projects or product development in an iterative way?',
                    choices:[
                        {
                            value: 1,
                            text:'Never'
                        },
                        {
                            value: 2,
                            text:'Rarely'
                        },
                        {
                            value: 3,
                            text:'Sometimes'
                        },
                        {
                            value: 4,
                            text:'Often'
                        },
                        {
                            value: 5,
                            text:'Always'
                        },
                        {
                            value: -2,
                            text:'Does not apply'
                        },
                        {
                            value: -1,
                            text:'I don’t know'
                        }
                    ]
                }
            ]
        },
        {
            questions:[
                {
                    type:"radiogroup",
                    category:'project/product',
                    isRequrired: true,
                    question: 'How long does it take to get a specified feature in production?',
                    choices:[
                        {
                            value: 1,
                            text:'Over one year'
                        },
                        {
                            value: 2,
                            text:'Between 6 months and a year'
                        },
                        {
                            value: 3,
                            text:'Between one and 6 months'
                        },
                        {
                            value: 4,
                            text:'Between two weeks and one month'
                        },
                        {
                            value: 5,
                            text:'Two weeks or below'
                        },
                        {
                            value: -2,
                            text:'Does not apply'
                        },
                        {
                            value: -1,
                            text:'I don’t know'
                        }
                    ]
                },
                {
                    type:"radiogroup",
                    category:'project/product',
                    isRequrired: true,
                    question: 'How often do you have a fully integrated, deployable version of your software?',
                    choices:[
                        {
                            value: 1,
                            text:'Once or twice a year'
                        },
                        {
                            value: 2,
                            text:'Every few months'
                        },
                        {
                            value: 3,
                            text:'At least once every few weeks, but not every day'
                        },
                        {
                            value: 4,
                            text:'Daily'
                        },
                        {
                            value: 5,
                            text:'With every Check In / Pull Request'
                        },
                        {
                            value: -2,
                            text:'Does not apply'
                        },
                        {
                            value: -1,
                            text:'I don’t know'
                        }
                    ]
                }
            ]
        },
        {
            questions:[
                {
                    type:"radiogroup",
                    category:'aditional',
                    isRequrired: true,
                    question: 'How much are you satisfied with your software development and delivery framework ?',
                    choices:[
                        {
                            value: 1,
                            text:'Unsatisfied'
                        },
                        {
                            value: 2,
                            text:'Fairly satisfied'
                        },
                        {
                            value: 3,
                            text:'Satisfied'
                        },
                        {
                            value: 4,
                            text:'Very satisfied'
                        },
                        {
                            value: 5,
                            text:'Fully Satisfied'
                        },
                        {
                            value: -2,
                            text:'Does not apply'
                        },
                        {
                            value: -1,
                            text:'I don’t know'
                        }
                    ]
                }
            ]
        },
    ]
}

export default draftQuestions;
