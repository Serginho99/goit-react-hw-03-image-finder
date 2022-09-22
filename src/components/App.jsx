import { Component } from 'react';
import { fetchImages } from 'services/ApiFetch';
import SearchBar from './SearchBar/SearchBar';
import '../styles.css';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default class App extends Component {
  state = {
    images: [],
    imageName: '',
    page: 1,
    loading: false,
  };

  componentDidUpdate(_, prevState) {
    const { page, imageName } = this.state;
    if (
      (imageName && prevState.imageName !== imageName) ||
      page > prevState.page
    ) {
      this.fetchPosts(imageName, page);
    }
  }

  async fetchPosts() {
    const { page, imageName } = this.state;
    this.setState({
      loading: true,
    });

    try {
      const data = await fetchImages(imageName, page);
      if (data.totalHits === 0) {
        return Notify.failure('No such pictures');
      }
      this.setState(({ images }) => {
        return {
          images: [...images, ...data.hits],
        };
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  handleSubmitForm = ({ imageName }) => {
    this.setState({ imageName, images: [] });
  };

  loadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { images, loading } = this.state;
    const { handleSubmitForm, loadMore } = this;
    const isImages = images.length !== 0;
    return (
      <>
        <SearchBar onSubmit={handleSubmitForm} />
        <ImageGallery items={images} />

        {loading ? <Loader /> : isImages && <Button onClick={loadMore} />}
      </>
    );
  }
}
