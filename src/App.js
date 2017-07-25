import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import FadeIn from './components/FadeIn';
import Column from './components/Column';
import Form from './components/Form';
import Input from './components/Input';
import PhotosContainer from './components/PhotosContainer';
import logo from './assets/logo.svg';
import { photosSearch } from './redux/_photos';

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const StyledLogo = styled.img`
  width: 100%;
  max-width: 400px;
  margin: 40px;
  padding: 10px;
`;

const SForm = styled(Form)`
  padding: 0 20px;
`;

class App extends Component {
  state = {
    input: '',
    page: 1
  }
  onSubmit = () => {
    this.setState({ page: 1 });
    this.props.photosSearch(this.state.input, 1, true);
  };
  onScroll = () => {
    if (this.props.query) {
      const page = this.state.page + 1
      this.setState({ page });
      this.props.photosSearch(this.props.query, page);
    }
  }
  onSelectTag = tag => {
    this.setState({ input: tag, page: 1 });
    this.props.photosSearch(tag, 1, true);
  }
  render = () => (
    <StyledWrapper>
      <FadeIn>
        <Column>
          <StyledLogo src={logo} alt="Flickroo" />
          <SForm onSubmit={this.onSubmit}>
            <Input
              label={'Search Photos'}
              value={this.state.input}
              onValueChange={input => this.setState({ input })}
            />
          </SForm>
        </Column>
        <PhotosContainer
          fetching={this.props.fetching}
          onScroll={this.onScroll}
          onSelectTag={this.onSelectTag}
          photos={this.props.photos}
        />
      </FadeIn>
    </StyledWrapper>
    );
}

App.propTypes = {
  photosSearch: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  query: PropTypes.string.isRequired,
  photos:  PropTypes.array.isRequired
};

const reduxProps = ({ photos }) => ({
  fetching: photos.fetching,
  query: photos.query,
  photos:  photos.photos
});

export default connect(reduxProps, { photosSearch })(App);
