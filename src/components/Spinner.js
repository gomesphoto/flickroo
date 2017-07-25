import React from "react";
import PropTypes from 'prop-types';
import styled, { keyframes } from "styled-components";
import { colors, transitions } from "../styles";

const rotate360 = keyframes`
  from { transform: rotate(0deg) translateZ(0); }
  to { transform: rotate(360deg) translateZ(0); }
`;

const StyledSpinnnerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${transitions.base};
  height: ${({ show }) => (show ? 'auto' : 0)};
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
`;

const StyledSpinner = styled.div`
  animation: ${rotate360} 1s infinite linear;
  border: 0.25rem solid rgba(${colors.dark}, 0.2);
  border-radius: 50%;
  border-top-color: rgb(${colors.dark});
  height: 26px;
  width: 26px;
  margin: 20px;
`;

const Spinner = ({ show, ...otherProps }) => (
  <StyledSpinnnerWrapper show={show} {...otherProps}>
    <StyledSpinner />
  </StyledSpinnnerWrapper>
);

Spinner.propTypes = {
  show: PropTypes.bool.isRequired
}

export default Spinner;
