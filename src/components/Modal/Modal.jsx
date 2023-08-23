import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.props.handleClick);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.handleClick);
  }
  render() {
    const { image, handleClick } = this.props;
    return (
      <div className="Overlay" onClick={e => handleClick(e)}>
        <div className="Modal">
          <img src={image.src} alt={image.alt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};
