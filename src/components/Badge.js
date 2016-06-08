import React from 'react';

export default class Badge extends React.Component {
  render() {
    // beginning of solution
    return (
      <li>Badge</li>
    );
    // end of solution
  }
}

Badge.propTypes = {
  badge: React.PropTypes.object.isRequired
};
