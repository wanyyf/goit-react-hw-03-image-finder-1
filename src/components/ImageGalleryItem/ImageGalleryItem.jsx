import React from 'react';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image, onModalOpen }) => {
  return (
    <li className="ImageGalleryItem" onClick={e => onModalOpen(e)}>
      <img
        className="ImageGalleryItem-image"
        src={image.webformatURL}
        alt={image.tags}
      />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onModalOpen: PropTypes.func.isRequired,
};
