import React from 'react';
import ReactDOM from 'react-dom';
import CompareContainer from './CompareContainer';
import { shallow } from 'enzyme';

describe('CompareContainer', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<CompareContainer />);
  });

  it.skip('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CompareContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
