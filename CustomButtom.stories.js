import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native';
import CustomButtom from './CustomButton';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const style = {
  flex: 1,
  alignItems: 'center',
};

const CenteredView = ({children}) => <View style={style}>{children}</View>;
const mask = `${width}x50`;

storiesOf('CustomButtom', module)
  .add(`${mask} Default`, () => (
    <CenteredView>
      <CustomButtom color="#24A0ED" text="Click Here!" textColor="white" />
    </CenteredView>
  ))
  .add(`${mask} With custom background`, () => (
    <CenteredView>
      <CustomButtom color="red" text="Click Here!" textColor="white" />
    </CenteredView>
  ))
  .add(`${mask} With custom text color`, () => (
    <CenteredView>
      <CustomButtom color="#24A0ED" text="Click Here!" textColor="red" />
    </CenteredView>
  ))
  .add(`${mask} With loading`, () => (
    <CenteredView>
      <CustomButtom
        color="#24A0ED"
        text="Click Here!"
        textColor="white"
        isLoading
      />
    </CenteredView>
  ));
