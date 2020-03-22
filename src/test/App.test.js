import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe('Connect-4 Player Specific Test Suite', () => {
    it('togglePlayer: should return player 2 by default', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.instance().togglePlayer()).toBe(2);
    });
    it('whoIsNext: should return yellow message for player 2 when last player was 1', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.instance().whoIsNext(1)).toBe('Your turn yellow');
    });
    it('whoIsNext: should return yellow message for player 1 when last player was 2', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.instance().whoIsNext(2)).toBe('Your turn red');
    });
});