import React from 'react';
import styled from 'styled-components';
import {ActivityIndicator} from 'react-native';

const Button = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  flex-direction: row;
  background-color: ${({color}) => color};
  border-radius: 7px;
  align-items: center;
  justify-content: space-around;
`;

const Text = styled.Text`
  color: ${({textColor}) => textColor};
  text-align: center;
`;

const CustomButtom = ({text, color, textColor, isLoading, onPress}) => (
  <Button {...{color, onPress}}>
    <Text {...{textColor}}>{text}</Text>
    {isLoading && <ActivityIndicator color={textColor} />}
  </Button>
);

export default CustomButtom;
