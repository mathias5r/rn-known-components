import React from 'react';
import CustomButtom from './components/CustomButton';
import styled from 'styled-components';
import storybook from './storybook';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <CustomButtom
        color="#24A0ED"
        text="Click Here!"
        textColor="#FFF"
        isLoading
      />
    </Container>
  );
};

export default storybook;

// export default App;
