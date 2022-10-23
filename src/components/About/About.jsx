import React from 'react'
import { Box, Heading, Link, Text } from '@chakra-ui/react'

export const About = () => {
  return (
    <Box as='section'>
      <Box
        as='article'
        bg='blue.50'
        height='350px'
        borderRadius='8px'
        mt='100px'
        padding='35px'
      >
        <Heading fontWeight='medium' fontSize='5xl'>
          👋 Hi, I'm Santiago
        </Heading>
        <Text mt='15px' fontSize='2xl' fontWeight='light'>
          I'm a web developer from Buenos Aires, AR. Currently im studying
          React. In my spare time I enjoy reading, gaming, practice and learning
          new things. My preferred tools are React and JavaScript.
        </Text>
        <Text mt='35px' fontSize='2xl' fontWeight='light'>
          I'm on {''}
          <Link
            color='blue.500'
            href='https://github.com/Luvwen'
            target='_blank'
          >
            GitHub
          </Link>
          {''} and {''}
          <Link
            color='blue.500'
            href='https://linkedin.com/in/santiago-baliño'
            target='_blank'
          >
            LinkedIn
          </Link>
          .
        </Text>
      </Box>
    </Box>
  )
}
