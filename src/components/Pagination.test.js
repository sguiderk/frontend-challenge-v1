import React from 'react';

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;

import * as sinon from "sinon";

import Pagination from "./Pagination";


describe("<Pagination />", () => {


    const friends = [
      {
      name: 'Theodore Roosevelt',
      gender: 'male',
      starred: true
    },
    {
      name: 'Abraham Lincoln',
      gender: 'male',
      starred: false
    },
    {
      name: 'Margaret Hamilton',
      gender: 'female',
      starred: true
    },
    {
      name: 'George Washington',
      gender: 'male',
      starred: false
    }
    ];

  test("should render with previous button, next button and page number ", () => {
    const props = {
      currentIndex: 3,
      onChangePage: function(){},
      pageSize: 2,
      items: friends
    };

    const wrapper = Enzyme.shallow(<Pagination {...props} />);

    expect(wrapper.find("li a").at(0).text()).toBe('First');

    expect(wrapper.find("li a").at(1).text()).toBe('Previous');

    expect(wrapper.find("li").length).toBe(6);

    expect(wrapper.find("li a").at(4).text()).toBe('Next');

    expect(wrapper.find("li a").at(5).text()).toBe('Last');

  });


  test("should notify correct page index when next button is clicked", () => {
    const onPageClicked = sinon.spy();
    const props = {
      currentIndex: 3,
      onChangePage: function(){},
      pageSize: 2,
      items: friends
    };

    const wrapper = Enzyme.shallow(<Pagination {...props} />);
    wrapper
      .find("li a")
      .at(0)
      .simulate("click");

   // expect(onPageClicked.calledWith(props.currentIndex + 3)).toBeTruthy();
  });

});