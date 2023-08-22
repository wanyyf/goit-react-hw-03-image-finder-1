import React, { Component } from 'react';
import { Button } from 'components/Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { getDataApi } from '../services/dataApi';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],

    params: {
      q: '',
      page: 1,
      per_page: 12,
    },
    isLoading: false,
    isModalOpen: false,
    selectedImage: null,
    hasMoreImages: true,
  };
  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const apiImages = await getDataApi(this.state.params);

      this.setState({ images: apiImages.hits });
    } catch {
      throw new Error('Failed to fetch data from API');
    } finally {
      this.setState({ isLoading: false });
    }
  }
  async componentDidUpdate(prevProps, prevState) {
    if (this.state.params.page !== prevState.params.page) {
      try {
        const apiImages = await getDataApi(this.state.params);
        this.setState(prevState => ({
          images: [...prevState.images, ...apiImages.hits],
        }));
        if (apiImages.hits.length < 12) {
          this.setState({ hasMoreImages: false });
        }
      } catch (error) {
        console.error('Error loading more images:', error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
    if (this.state.params.q !== prevState.params.q) {
      try {
        const apiImages = await getDataApi(this.state.params);
        this.setState({ images: apiImages.hits });
        if (apiImages.hits.length < 12) {
          this.setState({ hasMoreImages: false });
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  onModalOpen = e => {
    const src = e.target.src;
    const alt = e.target.alt;
    const selectedImage = { src, alt };

    this.setState({ selectedImage, isModalOpen: true });
  };

  onModalClose = e => {
    this.setState({ isModalOpen: false });
  };

  handleEscKeyPress = event => {
    if (event.keyCode === 27) {
      this.onModalClose();
    }
    if (event.target === event.currentTarget) {
      this.onModalClose();
    }
  };

  onSearchButton = e => {
    e.preventDefault();
    const SearchQuary = e.currentTarget.search.value;

    this.setState({
      isLoading: true,
      params: {
        ...this.state.params,
        q: SearchQuary,
        page: 1,
      },
    });
  };

  onLoadMoreButton = () => {
    this.setState({ isLoading: true });
    this.setState(prevState => ({
      params: {
        ...prevState.params,
        page: prevState.params.page + 1,
      },
    }));
  };

  render() {
    const { isLoading, images, isModalOpen, selectedImage, hasMoreImages } =
      this.state;
    return (
      <div className="App">
        <Searchbar onSearchButton={this.onSearchButton} />

        {isLoading && this.state.params.q !== '' ? (
          <Loader />
        ) : (
          <>
            <ImageGallery
              images={images}
              load={isLoading}
              onModalOpen={this.onModalOpen}
            />
            {isModalOpen ? (
              <Modal
                image={selectedImage}
                handleClick={this.handleEscKeyPress}
              />
            ) : null}
            {this.state.params.q !== '' && this.state.images.length === 0 ? (
              <span className="nothingSpan">We can`t find anything!</span>
            ) : hasMoreImages ? (
              <Button onLoadMoreButton={this.onLoadMoreButton} />
            ) : (
              <span className="nothingSpan">Thats all!</span>
            )}
          </>
        )}
      </div>
    );
  }
}
