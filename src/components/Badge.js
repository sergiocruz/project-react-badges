import React from 'react';

export default class Badge extends React.Component {
  render() {
    return (
      <li className="media">
        <div className="media-left media-middle">
          <a target="blank" href={`https://www.codeschool.com/courses/${this.props.badge.id}`}>
            <img className="media-object" src={this.props.badge.url} alt={this.props.badge.title} />
          </a>
        </div>
        <div className="media-body media-middle">
          <h4 className="media-heading">
            <a target="blank" href={`https://www.codeschool.com/courses/${this.props.badge.id}`}>
              {this.props.badge.title}
            </a>
          </h4>
          <p>{this.props.badge.short_description}</p>
        </div>
      </li>
    );
  }
}

Badge.propTypes = {
  badge: React.PropTypes.object.isRequired
};
