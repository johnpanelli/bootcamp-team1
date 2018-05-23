import { actionTypes } from '../actionTypes';

// Action creator, returns an action object
export const refreshVotersRequest = () => ({type: actionTypes.REFRESH_VOTERS_REQUEST });

// Action creator, returns an action object
export const refreshVotersDone = (voters) => ({type: actionTypes.REFRESH_VOTERS_DONE, voters});

// Action creator, returns a function.  Requires the redux-thunk middleware.
export const refreshVoters = () => {
    return dispatch => {
        // First action
        dispatch(refreshVotersRequest());

        // Second action
        return fetch('http://localhost:3040/voters')
            .then(res => res.json())
            .then(voters => dispatch(refreshVotersDone(voters)));
    };
}

