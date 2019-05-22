const fs = require('fs');


module.exports = {
  readSurveyConfig(env = 'prod') {
    let postfix;

    switch (env) {
    case 'prod':
    case 'production':
      postfix = 'prod';
      break;
    case 'dev':
    case 'test':
      postfix = 'test';
      break;
    default:
      postfix = 'prod';
    }

    return JSON.parse(fs.readFileSync(`${__dirname}/survey.${postfix}.json`, 'utf8'));
  },
};
