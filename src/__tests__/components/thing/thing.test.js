import React from 'react';
import renderer from 'react-test-renderer';
import Thing from 'components/thing/thing.js';

describe('<Thing />', () => {
  it('is alive at application start', () => {
    let app = shallow(<Thing />);
    expect(app.find('h2').exists()).toBeTruthy();
  });

  it('changes state on click', () => {
    let app = mount(<Thing />);
    let button = app.find('button');
    button.simulate('click');
    expect(app.state('toggled')).toBe(true);
    expect(app.find('h2').text()).toContain('true');
    button.simulate('click');
    expect(app.state('toggled')).toBe(false);
    expect(app.find('h2').text()).toContain('false');
  });

  //   it('renders right', () => {
  //     const tree = renderer.create(<Thing />).toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });
});
