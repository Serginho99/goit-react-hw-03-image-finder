import { Component } from 'react';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
  state = {
    openModal: false,
  };

  toggle = () => {
    console.log('hello');
    this.setState(prev => {
      return {
        openModal: !prev.openModal,
      };
    });
  };

  render() {
    const { toggle } = this;
    const { openModal } = this.state;
    const { largeImageURL, tags, webformatURL } = this.props;
    return (
      <>
        <li className=" ImageGalleryItem" onClick={toggle}>
          <img
            loading="lazy"
            className="ImageGalleryItem-image"
            src={webformatURL}
            alt={tags}
          />
        </li>
        {openModal && (
          <Modal toggle={toggle} image={largeImageURL} tags={tags} />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  webformatURL: PropTypes.string,
};
