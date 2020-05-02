import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native';
import CustomButtom from './CustomButton';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const style = {
  flex: 1,
  backgroundColor: '#f7f7f7',
};

const mask = `${Math.round(width * 0.8)}x50`;

storiesOf('CustomButtom', module)
  .addDecorator((getStory) => <View style={style}>{getStory()}</View>)
  .add(`${mask} Default`, () => (
    <CustomButtom color="#24A0ED" text="Click Here!" textColor="white" />
  ))
  .add(`${mask} With custom background`, () => (
    <CustomButtom color="red" text="Click Here!" textColor="white" />
  ))
  .add(`${mask} With custom text color`, () => (
    <CustomButtom color="#24A0ED" text="Click Here!" textColor="red" />
  ))
  .add(`${mask} With loading`, () => (
    <CustomButtom
      color="#24A0ED"
      text="Click Here!"
      textColor="white"
      isLoading
    />
  ));
