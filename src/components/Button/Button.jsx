import React from 'react';
import PropTypes from 'prop-types';
export const Button = ({ onLoadMoreButton }) => {
  return (
    <button className="Button" onClick={() => onLoadMoreButton()}>
      Load more
    </button>
  );
};
Button.propTypes = {
  onLoadMoreButton: PropTypes.func.isRequired,
};
