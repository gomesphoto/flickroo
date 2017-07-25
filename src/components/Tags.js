import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { colors } from '../styles';

const StyledTagWrapper = styled.div`
  overflow: hidden;
  position: relative;
  height: 25px;
`

const StyledTagContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: -17px;
  overflow-y: scroll;
`;

const StyledTag = styled.div`
  background: rgb(${colors.mediumGrey});
  padding: 4px;
  margin-right: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const Tags = ({ tags, onSelectTag, ...otherProps }) => (
  <StyledTagWrapper {...otherProps}>
    <StyledTagContainer>
      {tags.split(" ").map(tag =>
        <StyledTag key={tag} onClick={() => onSelectTag(tag)}>
          {tag}
        </StyledTag>)}
      </StyledTagContainer>
  </StyledTagWrapper>
);


Tags.propTypes = {
  tags: PropTypes.string.isRequired,
  onSelectTag: PropTypes.func.isRequired
};

export default Tags;
