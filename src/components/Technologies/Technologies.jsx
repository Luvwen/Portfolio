import React from 'react'
import { Box, Divider, Flex, Grid, GridItem, Heading } from '@chakra-ui/react'
import { CustomIcon } from '../../icons/CustomIcon'

export const Technologies = () => {
  return (
    <Box height='auto' id='technologies' m={['0 25px 0', '0']}>
      <Heading mt={['25px', '50px']} fontWeight='medium'>
        Technologies
      </Heading>
      <Divider
        orientation='horizontal'
        display='block'
        height='5px'
        borderRadius='1000px'
        background='gray.400'
        mt={['25px', '40px']}
      />
      <Grid
        templateColumns='repeat(1, 1fr)'
        templateRows='repeat(1, 1fr)'
        rowGap={[2, 12]}
        columnGap={12}
        mt={['0', '48px']}
        justifyItems={['start', 'center']}
      >
        <GridItem width={['100%', '75%']}>
          <Flex
            justifyContent='space-between'
            flexDirection={['column', 'row']}
          >
            <CustomIcon
              iconName={'javascript'}
              width={'90px'}
              height={'90px'}
            />
            <CustomIcon iconName={'react'} width={'90px'} height={'90px'} />
            <CustomIcon iconName={'redux'} width={'90px'} height={'90px'} />
          </Flex>
        </GridItem>
        <GridItem width='75%'>
          <Flex justifyContent='space-around' flexDirection={['column', 'row']}>
            <CustomIcon iconName={'git'} width={'90px'} height={'90px'} />
            <CustomIcon iconName={'github'} width={'90px'} height={'90px'} />
          </Flex>
        </GridItem>
        <GridItem width='75%'>
          <Flex justifyContent='center' flexDirection={['column', 'row']}>
            <CustomIcon
              iconName={'typescript'}
              width={'90px'}
              height={'90px'}
            />
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  )
}
