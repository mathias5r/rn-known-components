import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Dimensions, View} from 'react-native';
import PictureView from './PictureView';
import profile from '../assets/profile.png';

const {height} = Dimensions.get('window');
const h = Math.round(height * 0.2);
const mask = `${h}x${h}`;

const style = {
  flex: 1,
  backgroundColor: '#f7f7f7',
};

storiesOf('PictureView', module)
  .addDecorator((getStory) => <View style={style}>{getStory()}</View>)
  .add(`${mask} Default`, () => <PictureView />)
  .add(`${mask} With picture`, () => <PictureView picture={profile} />)
  .add(`${mask} With loading`, () => (
    <PictureView picture={profile} isLoading />
  ));
