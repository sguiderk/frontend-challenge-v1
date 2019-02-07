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

import App from './App';

// check the creaction of component App

describe('creaction of component', () => {

	it('component App created', () => {
	        const renderedComponent = shallow(<App />);
	        expect(renderedComponent).toMatchSnapshot();
	});

})

