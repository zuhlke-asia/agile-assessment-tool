export default (['development', 'test'].includes(process.env.NODE_ENV)
  ? {
    agility: {
      25: 'Practicing agile has implications for the whole organisation. To get the most out of it, you need to adapt existing structures to support it. Get in touch if you would like a hand with getting started on this journey.',
      50: 'Continuous improvement is the name of the game, and with enough experiments and insightful changes, your organisation can benefit from agility across all its parts.',
      75: "Not bad! While there are some areas for improvement, your overall score is perfectly respectable and you're well on your way to become fully agile.",
      100: "Well done! Sounds like your whole organisation is built on agile values, collaboration, transparency and trust are solid foundations for all parts of your company. Please get in touch with us because we'd love to hear more about how you have achieved this result.",
    },
    estimation: {
      25: 'Your teams could benefit from empowerment and a cross-functional set up for better results of their work. Talk to us to find out how true collaboration can increase the quality and speed of software delivery in your organisation.',
      50: "It looks like your teams are doing ok, but there's a lot of room for improvement. Keep at the continuous improvement practices built into the agile mindset, and watch your teams' effectiveness and motivation grow.",
      75: 'This is a solid result, and your team members must be working together pretty well already. There are some areas that could be improved, but overall agile practices within the teams are sound.',
      100: "Excellent work, team! You are collaboration machines working together to achieve a common purpose. If you'd like some fresh ideas to continue learning in the spirit of continuous improvement, message us today!",
    },
    mood: {
      25: 'Your organisation probably has a great product, but it could be so much better if the customer was at the forefront of all decisions. Talk to us today about the best ways of incorporating user feedback into the full product development cycle.',
      50: 'You organise your product development following some agile practices, but you could achieve better results if you put user feedback at the centre of all your project and product decisions.',
      75: 'Good work, your projects and products are mostly agile, and with a bit of work you could improve your results further. Keep challenging your assumptions and listening to your customers!',
      100: 'Amazing! You go hand in hand with your customers and most of your product decisions are based on what they say. Keep up the good work! If you drop us a line, we can help with new ideas to experiment and learn rapidly.',
    },
  }
  : {
    organisation: {
      25: 'Practicing agile has implications for the whole organisation. To get the most out of it, you need to adapt existing structures to support it. Get in touch if you would like a hand with getting started on this journey.',
      50: 'Continuous improvement is the name of the game, and with enough experiments and insightful changes, your organisation can benefit from agility across all its parts.',
      75: "Not bad! While there are some areas for improvement, your overall score is perfectly respectable and you're well on your way to become fully agile.",
      100: "Well done! Sounds like your whole organisation is built on agile values, collaboration, transparency and trust are solid foundations for all parts of your company. Please get in touch with us because we'd love to hear more about how you have achieved this result.",
    },
    teams: {
      25: 'Your teams could benefit from empowerment and a cross-functional set up for better results of their work. Talk to us to find out how true collaboration can increase the quality and speed of software delivery in your organisation.',
      50: "It looks like your teams are doing ok, but there's a lot of room for improvement. Keep at the continuous improvement practices built into the agile mindset, and watch your teams' effectiveness and motivation grow.",
      75: 'This is a solid result, and your team members must be working together pretty well already. There are some areas that could be improved, but overall agile practices within the teams are sound.',
      100: "Excellent work, team! You are collaboration machines working together to achieve a common purpose. If you'd like some fresh ideas to continue learning in the spirit of continuous improvement, message us today!",
    },
    'project/product': {
      25: 'Your organisation probably has a great product, but it could be so much better if the customer was at the forefront of all decisions. Talk to us today about the best ways of incorporating user feedback into the full product development cycle.',
      50: 'You organise your product development following some agile practices, but you could achieve better results if you put user feedback at the centre of all your project and product decisions.',
      75: 'Good work, your projects and products are mostly agile, and with a bit of work you could improve your results further. Keep challenging your assumptions and listening to your customers!',
      100: 'Amazing! You go hand in hand with your customers and most of your product decisions are based on what they say. Keep up the good work! If you drop us a line, we can help with new ideas to experiment and learn rapidly.',
    },
    scrum: {
      25: "Some Scrum practices are harder to implement than others. Maybe your team doesn't see the benefits of advanced Scrum techniques - talk to us today to see how Scrum practitioners can contribute to the success of your product.",
      50: "Good start, but you've got quite a way to go before you get the full benefits of the Scrum development practices. Good thing continuous improvement is built into the framework - so you're on the right path.",
      75: 'Good work, your projects and products are mostly agile, and with a bit of work you could improve your results further. Keep challenging your assumptions and listening to your customers!',
      100: "You live and breathe Scrum and the practices come naturally to everyone on your team. Good work, it's impressive to see such a solid result! Let us know if you'd like some new techniques to try with your team to keep them fresh and engaged.",
    },
  });
