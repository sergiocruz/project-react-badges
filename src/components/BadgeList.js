import React from 'react';

class BadgeList extends React.Component {
  render() {
    return (
      <div>
        <h1>Badges <small>List of courses</small></h1>
        <ul>
          {/* beginning of solution: replace <li> elements with map of the list of badges */}
          <li>Badge 1</li>
          <li>Badge 2</li>
          <li>Badge 3</li>
          {/* end of solution */}
        </ul>
      </div>
    );
  }
}

export default BadgeList;
