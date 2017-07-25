import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from "styled-components";
import placeholder from '../assets/placeholder.png';
import Tags from './Tags';
import { stripHTML, ellipseText } from '../helpers/utilities';
import { colors, fonts } from '../styles';

const fadein = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;

const StyledAnchor = styled.a`
  width: 100%;
  height: 60%;
`

const StyledPhoto = styled.div`
  width: 250px;
  height: 300px;
  margin: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 6px 20px 8px rgba(${colors.black}, 0.3);
  animation: ${fadein} 0.5s 1 linear;
`;

const StyledImage = styled.div`
  width: 100%;
  height: 100%;
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

const parseDescription = description => {
  const noHTML = stripHTML(description);
  const ellipsed = ellipseText(noHTML, 140);
  return ellipsed;
}

const Photo = ({ photo, onSelectTag, ...otherProps }) => (
  <StyledPhoto {...otherProps}>
    <StyledAnchor href={`https://www.flickr.com/photos/${photo.owner}/${photo.id}`} rel="noreferrer noopener" target="_blank">
      <StyledImage img={photo.url_s} />
    </StyledAnchor>
    <div>
      <a href={`https://www.flickr.com/photos/${photo.owner}/${photo.id}`} rel="noreferrer noopener" target="_blank">
        <StyledTitle>{photo.title}</StyledTitle>
      </a>
      <a href={`https://www.flickr.com/photos/${photo.owner}`} rel="noreferrer noopener" target="_blank">
        <span>{`by ${photo.realname ? photo.realname : photo.ownername}`}</span>
      </a>
    </div>
    <StyledDescription>{parseDescription(photo.description._content)}</StyledDescription>
    <Tags tags={photo.tags} onSelectTag={onSelectTag} />
  </StyledPhoto>
);

Photo.propTypes = {
  photo: PropTypes.object.isRequired,
  onSelectTag: PropTypes.func.isRequired
};

export default Photo;
