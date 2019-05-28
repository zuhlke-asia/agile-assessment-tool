import React from 'react';
import { mount } from 'enzyme';
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
  const evaluations = [{ name: 'agile', total: 5, max: 20 }, { name: 'mood', total: 1, max: 5 }];
  const wrapper = mount(<Evaluation evaluations={evaluations} />);

  // then
  expect(wrapper.find('.category-label')).toHaveLength(2);
});

test('progress bars have correct percentage width given valid evaluations after transition', () => {
  // given
  const evaluations = [{ name: 'agile', total: 5, max: 20 }, { name: 'mood', total: 1, max: 5 }];
  const wrapper = mount(<Evaluation evaluations={evaluations} />);

  // when
  wrapper.simulate('transitionEnd');

  // then
  expect(wrapper.find('.agile.score-bar-container > div').prop('style')).toHaveProperty(
    'width',
    '25%',
  );
  expect(wrapper.find('.mood.score-bar-container > div').prop('style')).toHaveProperty(
    'width',
    '20%',
  );
});
