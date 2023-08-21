import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import { Loader } from '../Loader/Loader';
import PropTypes from 'prop-types';
export const ImageGallery = ({ images, load, onModalOpen }) => {
  return (
    <div>
      <ul className="ImageGallery">
        {images.map(pic => (
          <ImageGalleryItem
            image={pic}
            onModalOpen={onModalOpen}
            key={pic.id}
          />
        ))}
      </ul>
      {load ? <Loader /> : ''}
    </div>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  load: PropTypes.bool,
  onModalOpen: PropTypes.func.isRequired,
};
