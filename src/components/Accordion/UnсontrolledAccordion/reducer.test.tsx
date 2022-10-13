import React from 'react';
import {reducer, StateType, TOGGLE_COLLAPSED} from './reducer';

test('reducer should reverse the value', () => {

    const startState: StateType = {collapsed: true}

    const endState: StateType = reducer(startState, {type: TOGGLE_COLLAPSED})

    expect(endState.collapsed).toBeFalsy()
})
test('reducer should throw error because action type is incorrect', () => {

    const state: StateType = {collapsed: true}


    expect(() => reducer(state, {type: 'FAKE-FAKE'})).toThrowError()
})