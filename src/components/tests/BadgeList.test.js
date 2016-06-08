import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import BadgeList from '../BadgeList';
import {badges} from '../../data/badges';

const firstBadge = badges[0];

function setup() {
  return shallow(<BadgeList />);
}

describe('The BadgeList component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('should have one <ul> element', () => {
    expect(wrapper.find('ul').length).toBe(1);
  });

  it('should have as many <Badge> components as badges', () => {
    expect(wrapper.find('Badge').length).toEqual(badges.length);
  });

  it('should pass use the key prop on each <Badge>', () => {
    const firstBadgeNode = wrapper.find('Badge').nodes[0];
    const firstBadgeId = firstBadge.id.toString();
    expect(firstBadgeNode.key).toExist().toEqual(firstBadgeId);
  });

  it('should pass a badge prop to each <Badge> component', () => {
    const firstBadgeNode = wrapper.find('Badge').nodes[0];
    const {props} = firstBadgeNode;
    expect(props.badge).toExist().toEqual(firstBadge);
  });

});
