import React from 'react';
import renderer from 'react-test-renderer';
import Overview from '../Overview.jsx';

test('Overview renders all children elements', () => {
  const component = renderer.create(
    <Overview />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
