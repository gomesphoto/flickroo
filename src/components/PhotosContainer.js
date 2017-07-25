import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import Spinner from './Spinner';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PhotosContainer = ({ fetching, photos, ...otherProps }) => (
  <StyledContainer {...otherProps}>
    {photos.map(photo => <Photo key={photo.id} photo={photo} />)}
    {!!fetching && <Spinner />}
  </StyledContainer>
);

PhotosContainer.propTypes = {
  fetching: PropTypes.bool.isRequired,
  photos: PropTypes.array.isRequired
};

export default PhotosContainer;
