import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe('Connect-4 Essential Rendering Test Suite', () => {
    it('should render 7 <Row> elements for the game', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Row').length).toEqual(7);
    }); 
});

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
describe('Connect-4 Game Board Specific Test Suite', () => {
    it('should return draw when game board is full ', () => {
        const wrapper = shallow(<App />);
        //const cell = [1]; 
        //const row = [0];
        //const board =  [0, 1, 2, 3, 4, 5, 6][1];
        expect(wrapper.instance().checkDraw([0][0])).toBe('draw');        
      });
});