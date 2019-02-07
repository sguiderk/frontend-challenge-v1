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
import AddFriendInput from './AddFriendInput';
import { addFriend, deleteFriend, starFriend } from '../actions/FriendsActions';


const nameInput = "test";
const genderInput = "male";

describe('<AddFriendInput />', () => {

    test('check if the gender render correct selected value', () => {

   
      const addFriend = function(nameInput,genderInput){};
      const props = {addFriend};
      const gender = Enzyme.shallow(<AddFriendInput {...props} />);

      expect(gender.find('select').prop('value')).toBe('male');

    });

    test('Check if the form could add name and gender and return the validation is true for both of them', () => {

      const addFriend = function(nameInput,genderInput){};
      const props = {addFriend};
      const AddFriendContainer = Enzyme.shallow(<AddFriendInput {...props} />);

      expect(AddFriendContainer.state().name).toBe('');
      expect(AddFriendContainer.state().gender).toBe('male');

    });

});

