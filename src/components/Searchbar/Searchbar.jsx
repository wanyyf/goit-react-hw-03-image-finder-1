import React, { Component } from 'react';
import '../../styles.css';
import { Icon } from 'react-icons-kit';
import { search } from 'react-icons-kit/fa/search';
import './Searchbar.css';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  render() {
    return (
      <header className="Searchbar">
        <form
          className="SearchForm"
          onSubmit={e => this.props.onSearchButton(e)}
        >
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label ">
              <Icon icon={search} size={24} />
            </span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSearchButton: PropTypes.func.isRequired,
};
