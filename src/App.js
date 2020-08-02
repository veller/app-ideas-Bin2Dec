import React, { useState } from 'react';
import { Box, Button, Heading, Grommet, Text, TextInput } from 'grommet'
import { Bike } from 'grommet-icons'

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
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
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
              <Heading color='heading'>Binary input:</Heading>
              <TextInput
                type="text"
                name={binary}
                value={binary}
                placeholder='Enter 0 or 1'
                onChange={handleBinary}
                maxLength={8}
              />
            </Box>
            <Box>
              <Heading color='heading'>Decimal output:</Heading>
              <Text size='xxlarge' textAlign='center' weight='bold' color='brand'>
                {binary && parseInt(binary, 2)}
              </Text>
            </Box>

          </Box>
        </Box>

        <div>
          <label>
            Binary input:
          <input
              type="text"
              name={binary}
              value={binary}
              placeholder='Enter 0 or 1'
              onChange={handleBinary}
              maxLength={8} />
          </label>
          {
            binaryOnlyAlert &&
            <div>
              Only ones and zeroes allowed
            </div>
          }
        </div>
        <div>
          <p>
            Decimal output:
            {binary && parseInt(binary, 2)}
          </p>
        </div>

      </Box>
    </Grommet>
  );
}

export default App;
