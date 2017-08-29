import React from 'react';
import renderer from 'react-test-renderer';
import Textarea from 'react-textarea-autosize';
import { shallow } from 'enzyme';


describe('>>>Textarea --- Shallow Render REACT COMPONENTS', () => {
  it('+++ Should render Textarea correctly, snapshot', () => {
    const tree = renderer.create(
      <Textarea
        name="description"
        placeholder="Description"
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('+++ render the DUMB component', () => {
    const component = shallow(
      <Textarea
        name="description"
        placeholder="Description"
      />
    );

    expect(component.length).toEqual(1);
  });
});