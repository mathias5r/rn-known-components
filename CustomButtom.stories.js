import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native';
import CustomButtom from './CustomButton';

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const CenteredView = ({children}) => <View style={style}>{children}</View>;

storiesOf('CustomButtom', module)
  .add('Initial', () => (
    <CenteredView>
      <CustomButtom color="#24A0ED" text="Click Here!" textColor="white" />
    </CenteredView>
  ))
  .add('With custom background', () => (
    <CenteredView>
      <CustomButtom color="red" text="Click Here!" textColor="white" />
    </CenteredView>
  ))
  .add('With custom text color', () => (
    <CenteredView>
      <CustomButtom color="#24A0ED" text="Click Here!" textColor="red" />
    </CenteredView>
  ))
  .add('With loading', () => (
    <CenteredView>
      <CustomButtom
        color="#24A0ED"
        text="Click Here!"
        textColor="white"
        isLoading
      />
    </CenteredView>
  ));
