import { actionTypes } from '../actionTypes';

// The reducer is called on every action. Reducer must ALWAYS be a pure function
// 
// Rules for a pure function:
// 1. All data inputs are passed in via the parameters. 
// 2. Parameters must never be mutated (ever).
// 3. There can be 0 side affects like making an AJax call or writing a file.
// 4. The only output value of a reducer is the return value.
// 5. Never mutate state in a redux store. We only return a value.
export const reducer = (state = {voters: [], elections: []}, action) => {
    console.log('reducer action.type=' + action.type + ' action.value=' + action.value);
    let newState = {};
    switch (action.type) {
        case actionTypes.EXAMPLE:
            newState = { ...state }
            break;
        default:
            newState = state;
            break;
        }
        // console.dir(action);
        console.dir(Array.from(newState.selectedIds.entries()));
        console.dir(newState);
        return newState;
    }
