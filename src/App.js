import React, { useState } from 'react';
import { Box, Button, Heading, Grommet, Text, TextInput } from 'grommet'
import { Bike } from 'grommet-icons'
import styled, { keyframes } from 'styled-components'

function blinkingEffect() {
  return keyframes`
    50% {
      opacity: 0;
    }
  `;
}

const AnimatedComponent = styled.div`
  animation: ${blinkingEffect} 1s linear infinite;
`

const theme = {
  global: {
    colors: {
      brand: '#7D4CDB',
      heading: '#333333'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'smal  l' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
)

const App = () => {
  const [binary, setBinary] = useState('')
  const [binaryOnlyAlert, setBinaryOnlyAlert] = useState(false)

  const handleBinary = event => {
    const re = /^[0-1\b]+$/
    const newBinary = event.target.value

    if (newBinary === '' || re.test(newBinary)) {
      setBinary(newBinary)
      setBinaryOnlyAlert(false)
    } else {
      setBinaryOnlyAlert(true)
    }

  }
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar>
          <Heading level='3' margin='none'>Binary to Decimal Converter</Heading>
          <Button icon={<Bike />} onClick={() => { }} />
        </AppBar>

        <Box direction='column' flex overflow={{ horizontal: 'hidden' }}>
          <Box flex align='center' justify='center'>
            <Box>
              <Heading color='heading' textAlign='center'>Binary input:</Heading>
              <TextInput
                type="text"
                name={binary}
                value={binary}
                placeholder='Enter 0 or 1 (up to 8 digits)'
                onChange={handleBinary}
                maxLength={8}
              />
            </Box>
            <Box>
              <Heading color='heading' textAlign='center'>Decimal output:</Heading>
              <Text size='200px' textAlign='center' weight='bold' color='brand'>
                {!binary && <AnimatedComponent>_</AnimatedComponent>}
                {binary && parseInt(binary, 2)}
              </Text>
            </Box>

          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
