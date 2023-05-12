/* eslint-disable import/extensions */
const renderer = require('react-test-renderer');
const Ratings = require('../../client/src/components/Ratings/Ratings.jsx');

describe('', () => {
  it('', () => {
    const component = renderer.create(<div>Hello world</div>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
