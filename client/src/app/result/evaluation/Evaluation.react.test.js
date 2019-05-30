import React from 'react';
import { mount } from 'enzyme';
import Tippy from '@tippy.js/react';
import Evaluation from './Evaluation';

test('no progress bars are visible given empty evaluations', () => {
  // given
  const evaluations = [];
  const wrapper = mount(<Evaluation evaluations={evaluations} />);

  // then
  expect(wrapper.find('.category-label')).toHaveLength(0);
});

test('progress bars are visible given valid evaluations', () => {
  // given
  const evaluations = [
    { name: 'agility', total: 5, max: 20 },
    { name: 'estimation', total: 1, max: 5 },
  ];
  const wrapper = mount(<Evaluation evaluations={evaluations} />);

  // then
  expect(wrapper.find('.category-label')).toHaveLength(2);
});

test('progress bars have correct percentage width given valid evaluations after transition', () => {
  // given
  const evaluations = [
    { name: 'agility', total: 5, max: 20 },
    { name: 'estimation', total: 1, max: 5 },
  ];
  const wrapper = mount(<Evaluation evaluations={evaluations} />);

  // when
  wrapper.simulate('transitionEnd');

  // then
  expect(wrapper.find('.agility.score-bar-container > div').prop('style')).toHaveProperty(
    'width',
    '25%',
  );
  expect(wrapper.find('.estimation.score-bar-container > div').prop('style')).toHaveProperty(
    'width',
    '20%',
  );
});

test('no descriptions are visible given empty evaluations', () => {
  // given
  const evaluations = [];
  const wrapper = mount(<Evaluation evaluations={evaluations} />);

  // then
  expect(wrapper.find(Tippy)).toHaveLength(0);
});

test('descriptions are visible given valid evaluations', () => {
  // given
  const evaluations = [
    { name: 'agility', total: 5, max: 20 },
    { name: 'estimation', total: 1, max: 5 },
  ];
  const wrapper = mount(<Evaluation evaluations={evaluations} />);

  // then
  expect(wrapper.find(Tippy)).toHaveLength(2);
});

test('descriptions are correct given evaluation score', () => {
  // given
  const evaluations = [
    { name: 'agility', total: 10, max: 20 },
    { name: 'estimation', total: 1, max: 5 },
  ];
  const wrapper = mount(<Evaluation evaluations={evaluations} />);

  // then
  expect(wrapper.find(Tippy).get(0).props.content).toEqual(
    'Continuous improvement is the name of the game, and with enough experiments and insightful changes, your organisation can benefit from agility across all its parts.',
  );
  expect(wrapper.find(Tippy).get(1).props.content).toEqual(
    'Your teams could benefit from empowerment and a cross-functional set up for better results of their work. Talk to us to find out how true collaboration can increase the quality and speed of software delivery in your organisation.',
  );
});

test('descriptions are correct given maximum score', () => {
  // given
  const evaluations = [
    { name: 'agility', total: 10, max: 10 },
    { name: 'estimation', total: 10, max: 10 },
  ];
  const wrapper = mount(<Evaluation evaluations={evaluations} />);

  // then
  expect(wrapper.find(Tippy).get(0).props.content).toEqual(
    "Well done! Sounds like your whole organisation is built on agile values, collaboration, transparency and trust are solid foundations for all parts of your company. Please get in touch with us because we'd love to hear more about how you have achieved this result.",
  );
  expect(wrapper.find(Tippy).get(1).props.content).toEqual(
    "Excellent work, team! You are collaboration machines working together to achieve a common purpose. If you'd like some fresh ideas to continue learning in the spirit of continuous improvement, message us today!",
  );
});

test('no descriptions shown if category not defined', () => {
  // given
  const evaluations = [{ name: 'project/product', total: 10, max: 10 }];
  const wrapper = mount(<Evaluation evaluations={evaluations} />);

  // then
  expect(wrapper.find(Tippy).props.enabled).toBeFalsy();
});
