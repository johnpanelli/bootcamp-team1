import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';                        // documentation says not to use curly braces around thunk.
import { reducer } from './reducers/voterReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const voterStore = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
