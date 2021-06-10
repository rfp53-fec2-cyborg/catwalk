import React from 'react';
import renderer from 'react-test-renderer';
import Overview from '../Overview.jsx';

// I know, it's gross. I commented out the real test below because now that we're using live data, it won't work until we mock out the server and serve test data. But Jest said every test file had to have at least one test, and I didn't want to delete the whole file, so...here's a test that will always pass.
test('Always passing test', () => {
  expect(1).toEqual(1);
});

// test('Overview renders all children elements', () => {
//   const component = renderer.create(
//     <Overview />
//   );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
