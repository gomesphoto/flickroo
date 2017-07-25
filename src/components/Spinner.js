import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../styles";

const rotate360 = keyframes`
  from { transform: rotate(0deg) translateZ(0); }
  to { transform: rotate(360deg) translateZ(0); }
`;

const StyledSpinner = styled.div`
  animation: ${rotate360} 1s infinite linear;
  border: 0.25rem solid rgba(${colors.dark}, 0.2);
  border-radius: 50%;
  border-top-color: rgb(${colors.dark});
  height: 26px;
  width: 26px;
  left: 50%;
  margin-left: -13px;
  margin-top: -13px;
  position: absolute;
  top: 50%;
`;

const Spinner = ({ ...otherProps }) => <StyledSpinner {...otherProps} />;

export default Spinner;
