const { readSurveyConfig } = require('./surveyReader');
const fs = require('fs');

describe('survey reader', () => {
  test('It should return the test survey config if passed test', () => {
    const survey = readSurveyConfig('test');

    const expectedSurvey = JSON.parse(fs.readFileSync(`${__dirname}/survey.test.json`, 'utf8'));

    expect(survey).toEqual(expectedSurvey);
  });

  test('It should return the prod survey config if passed prod', () => {
    const survey = readSurveyConfig('prod');

    const expectedSurvey = JSON.parse(fs.readFileSync(`${__dirname}/survey.prod.json`, 'utf8'));

    expect(survey).toEqual(expectedSurvey);
  });

  test('It should return the prod survey config if passed production', () => {
    const survey = readSurveyConfig('production');

    const expectedSurvey = JSON.parse(fs.readFileSync(`${__dirname}/survey.prod.json`, 'utf8'));

    expect(survey).toEqual(expectedSurvey);
  });

  test('It should return the prod survey config if undefined is passed', () => {
    const survey = readSurveyConfig(undefined);

    const expectedSurvey = JSON.parse(fs.readFileSync(`${__dirname}/survey.prod.json`, 'utf8'));

    expect(survey).toEqual(expectedSurvey);
  });

  test('It should return the prod survey config if no param is passed', () => {
    const survey = readSurveyConfig();

    const expectedSurvey = JSON.parse(fs.readFileSync(`${__dirname}/survey.prod.json`, 'utf8'));

    expect(survey).toEqual(expectedSurvey);
  });

  test('It should return the test survey config if passed dev', () => {
    const survey = readSurveyConfig('dev');

    const expectedSurvey = JSON.parse(fs.readFileSync(`${__dirname}/survey.test.json`, 'utf8'));

    expect(survey).toEqual(expectedSurvey);
  });
});
