import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Photo from './Photo';
import Spinner from './Spinner';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class PhotosContainer extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.onScrollEvent);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScrollEvent);
  }

  onScrollEvent = () => {
    const documentHeight = document.body.scrollHeight - document.body.offsetHeight;
    if (documentHeight - 20 <= window.scrollY && !this.props.fetching) {
      this.props.onScroll();
    }
  }
  render() {
    const { fetching, photos, onSelectTag, ...otherProps } = this.props;
    return (
      <StyledContainer {...otherProps}>
        {photos.map((photo, idx) =>
          <Photo key={photo.id} photo={photo} onSelectTag={onSelectTag} />)}
        <Spinner show={fetching} />
      </StyledContainer>
    )
  }
}

PhotosContainer.propTypes = {
  fetching: PropTypes.bool.isRequired,
  onScroll: PropTypes.func.isRequired,
  onSelectTag: PropTypes.func.isRequired,
  photos: PropTypes.array.isRequired
};

export default PhotosContainer;
