import * as React from 'react';
import * as PropTypes from 'prop-types';

export class VoterTool extends React.Component {
    render() { 
        return <div>
                 Team 1   
                </div>;
            }
}

// PropTypes
VoterTool.propType = {
    voters: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })).isRequired,
  };
