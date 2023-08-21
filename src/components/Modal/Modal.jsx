import React from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ image, handleClick }) => {
  return (
    <div className="Overlay" onClick={e => handleClick(e)}>
      <div className="Modal">
        <img src={image.src} alt={image.alt} />
      </div>
    </div>
  );
};
Modal.propTypes = {
  image: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};
