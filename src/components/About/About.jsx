import React from 'react'
import { Box, Heading, Link, Text } from '@chakra-ui/react'

export const About = ({darkMode}) => {
  return (
    <Box as='section'>
      <Box
        as='article'
        bg={darkMode ? '#4e525a' : 'blue.50'}
        height={['auto', '350px']}
        borderRadius={['15px', '8px']}
        m={['25px 20px 0 20px', '100px 0 0 0']}
        p={['15px 20px', '35px']}
      >
        <Heading fontWeight='medium' fontSize={['2xl', '5xl']}>
          👋 Hi, I'm Santiago
        </Heading>
        <Text mt='15px' fontSize={['lg', '2xl']} fontWeight='light'>
          I'm a web developer from Buenos Aires, AR. Currently im studying
          React. In my spare time I enjoy reading, gaming, practice and learning
          new things. My preferred tools are React and JavaScript.
        </Text>
        <Text mt={['15px', '35px']} fontSize={['lg', '2xl']} fontWeight='light'>
          I'm on {''}
          <Link
            color='#ff77a9'
            fontWeight='semibold'
            href='https://github.com/Luvwen'
            target='_blank'
          >
            GitHub
          </Link>
          {''} and {''}
          <Link
            color='#ff77a9'
            fontWeight='semibold'

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
