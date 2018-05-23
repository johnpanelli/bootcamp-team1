import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';

import { voterStore } from './voterAppStore';
import { refreshVoters } from './actions/voterRefreshActions';
import { VoterTool } from './components/VoterTool'; 

// Map the redux store to the props of the presentational component
const mapStateToProps = (state) => ({ ...state });

// Map the Redux store actions to the props of the presentational component
const mapDispatchToProps = (dispatch) => bindActionCreators({
    refreshVoters:    refreshVoters,
}, dispatch);

// Calls connect with 2 functions. It returns a function which is then getting invoked.
const VoterToolContainer = connect(mapStateToProps, mapDispatchToProps)(VoterTool);

// Render the VoterTool
ReactDOM.render(
                <div>
                    <Provider store={voterStore} >
                        <VoterToolContainer />
                    </Provider>
                </div>, 
                document.querySelector('#root'),
            );

