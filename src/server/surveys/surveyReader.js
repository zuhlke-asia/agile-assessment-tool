const fs = require('fs');


module.exports = {
    readSurveyConfig(env) {
        if(env === 'production') env = 'prod';
        return JSON.parse(fs.readFileSync(__dirname + `/survey.${env}.json`, 'utf8'))
    }
};