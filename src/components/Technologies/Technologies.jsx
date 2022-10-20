import React from 'react'
import { Box, Divider, Flex, Grid, GridItem, Heading } from '@chakra-ui/react'
import { CustomIcon } from '../../icons/CustomIcon'

export const Technologies = () => {
  return (
    <Box height='auto'>
      <Heading mt='50px' fontWeight='medium'>
        Technologies
      </Heading>
      <Divider
        orientation='horizontal'
        display='block'
        height='5px'
        borderRadius='1000px'
        background='gray.400'
        mt='40px'
      />
      <Grid
        templateColumns='repeat(1, 1fr)'
        templateRows='repeat(1, 1fr)'
        rowGap={12}
        columnGap={12}
        mt='48px'
        justifyItems='center'
      >
        <GridItem width='75%'>
          <Flex justifyContent='space-between'>
            <CustomIcon iconName={'javascript'} />
            <CustomIcon iconName={'react'} />
            <CustomIcon iconName={'redux'} />
          </Flex>
        </GridItem>
        <GridItem width='75%'>
          <Flex justifyContent='space-around'>
            <CustomIcon iconName={'git'} />
            <CustomIcon iconName={'github'} />
          </Flex>
        </GridItem>
        <GridItem width='75%'>
          <Flex justifyContent='center'>
            <CustomIcon iconName={'typescript'} />
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  )
}
