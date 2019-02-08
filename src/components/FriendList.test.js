import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;

import * as sinon from "sinon";

import AddFriendInput from './AddFriendInput';
import { addFriend, deleteFriend, starFriend } from '../actions/FriendsActions';
import FriendList from "./FriendList";
import Pagination from "./Pagination";

describe("<FriendList />", () => {
  test("Check if render 4 items the pagtinatin should return 1 and 2", () => {

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

     const props = {
      currentIndex: 3,
      onChangePage: function(){},
      pageSize: 2,
      items: friends
     };

     const wrapper = Enzyme.shallow(<Pagination {...props} />);
     
     expect(wrapper.find("li a").at(2).text()).toBe('1');
     expect(wrapper.find("li a").at(3).text()).toBe('2');


    });
});


