import React from 'react';
import Badge from './Badge';
import {badges} from '../data/badges';

class BadgeList extends React.Component {
  render() {
    return (
      <div>
        <h1>Badges <small>List of courses</small></h1>
        <ul className="media-list">
          {badges.map(badge => (
            <Badge badge={badge} key={badge.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default BadgeList;
