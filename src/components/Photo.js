import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import placeholder from '../assets/placeholder.png';
import { stripHTML, ellipseText } from '../helpers/utilities';
import { colors, fonts } from '../styles';

const StyledPhoto = styled.div`
  width: 250px;
  height: 300px;
  margin: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 6px 20px 8px rgba(${colors.black}, 0.3);
`;

const StyledImage = styled.div`
  width: 100%;
  height: 60%;
  margin-bottom: 15px;
  background-color: rgb(${colors.lightGrey});
  background-image: url(${({ img }) => img ? img : placeholder});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const StyledTitle = styled.span`
  margin-right: 10px;
  font-weight: 700;
  font-size: ${fonts.large};
`;

const StyledDescription = styled.div`
  height: 20%;
  margin: 10px 0;
  font-size: ${fonts.small};
`;

const StyledTagContainer = styled.div`
  display: flex;
  overflow-y: scroll;
`;

const StyledTag = styled.div`
  background: rgb(${colors.mediumGrey});
  padding: 4px;
  margin-right: 4px;
  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.7;
  }
`;

const parseDescription = description => {
  const noHTML = stripHTML(description);
  const ellipsed = ellipseText(noHTML, 140);
  return ellipsed;
}

const Photo = ({ photo, ...otherProps }) => (
  <StyledPhoto {...otherProps}>
    <StyledImage img={photo.url_s} />
    <div>
      <StyledTitle>{photo.title}</StyledTitle>
      <span>By {photo.realname ? photo.realname : photo.ownername}</span>
    </div>
    <StyledDescription>{parseDescription(photo.description._content)}</StyledDescription>
    <StyledTagContainer>
      {photo.tags.split(" ").map(tag => <StyledTag key={tag}>{tag}</StyledTag>)}
    </StyledTagContainer>
  </StyledPhoto>
);

Photo.propTypes = {
  photo: PropTypes.object.isRequired
};

export default Photo;
