import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import PropTypes from 'prop-types';

export default function ImageGallery({ items }) {
  return (
    <ul className="ImageGallery">
      {items.map(item => {
        return <ImageGalleryItem key={item.id} {...item} />;
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
};
