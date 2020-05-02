import React from 'react';
import styled from 'styled-components';
import {Dimensions, ActivityIndicator} from 'react-native';
import icon from '../assets/picture.png';

const {height} = Dimensions.get('window');

const Container = styled.View`
  height: ${height * 0.2}px;
  width: ${height * 0.2}px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  background-color: rgba(45, 50, 65, 1);
  overflow: hidden;
`;

const Icon = styled.Image`
  height: ${height * 0.05}px;
  width: ${height * 0.05}px;
  background-color: white;
`;

const Picture = styled.Image`
  height: 100%;
  width: 100%;
`;

const getContent = ({isLoading, picture}) => {
  if (isLoading) {
    return <ActivityIndicator color="white" />;
  }
  if (picture) {
    return <Picture source={picture} />;
  }
  return <Icon source={icon} />;
};

const PictureView = ({picture, isLoading}) => {
  return <Container>{getContent({isLoading, picture})}</Container>;
};

export default PictureView;
