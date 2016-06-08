import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Badge from '../Badge';
import {badges} from '../../data/badges';

const badge = badges[0];

function setup(props) {
  return shallow(<Badge {...props} />);
}

describe('The Badge component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = setup({ badge });
  });

  it('should return a <li> element', () => {
    expect(wrapper.node.type).toBe('li');
  });

  it('should contain an <a> with `href` pointing to the course page', () => {

    const bageRegex = new RegExp(`https://www.codeschool.com/courses/${badge.id}`, 'ig');

    const anchorHrefs = wrapper
      .find('a')
      .map(({ node }) => node.props.href)
      .filter(href => bageRegex.test(href));

    expect(anchorHrefs.length).toBeGreaterThan(0);
  });

  it('should contain an <img> tag pointing to the badge url', () => {
    const imagesSource = wrapper
      .find('img')
      .map(({node}) => node.props.src)
      .filter(src => src === badge.url);

    expect(imagesSource.length).toBeGreaterThan(0);
  });

});
