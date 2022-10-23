import React from 'react'
import { Box, Divider, Heading } from '@chakra-ui/react'

import { ProjectsMap } from './ProjectsMap'

export const Projects = () => {
  return (
    <Box as='section' mt='50px'>
      <Heading id='projects'>Projects</Heading>
      <Divider
        orientation='horizontal'
        display='block'
        height='5px'
        borderRadius='1000px'
        background='gray.400'
        mt='40px'
      />
      <Box margin='50px auto 0'>
        <ProjectsMap />
      </Box>
    </Box>
  )
}
