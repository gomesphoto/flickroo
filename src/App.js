import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import { photosSearch } from "../redux/_photos";

const StyledWrapper = styled.div`
  padding: 25px;
`;

const StyledLogo = styled.img`
  width: 200px;
`;

class App extends Component {
  onSubmit = () => {
    this.props.photosSearch();
  };
  render = () => (
    <StyledWrapper fetching={this.props.fetching}>
      <StyledLogo src={logo} alt="App Logo" />
    </StyledWrapper>
    );
}

App.propTypes = {
  photosSearch: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired
};

const reduxProps = ({ photos }) => ({
  fetching: photos.fetching
});

export default connect(reduxProps, {
  photosSearch
})(App);
