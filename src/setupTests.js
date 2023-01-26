import React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import initialMockState from './mock/mockStore';

const middlewares = [];
const mockStore = configureStore(middlewares);
global.store = mockStore(initialMockState);
configure({ adapter: new Adapter() });

global.React = React;
global.shallow = shallow;
global.render = render;

global.mountSmart = (component, props, store) => {
    const core = store
        ? <Provider store={store}>{component}</Provider>
        : <component props/>;

    return mount(core);
};
