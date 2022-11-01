import React from 'react'
import { Box, Divider, Heading, Stack } from '@chakra-ui/react'

import { ProjectsMap } from './ProjectsMap'

export const Projects = () => {
  return (
    <Box as='section' m={['50px 25px 0', '50px 0 0']}>
      <Heading id='projects'>Projects</Heading>
      <Divider
        orientation='horizontal'
        display='block'
        height='5px'
        borderRadius='1000px'
        background='gray.400'
        mt={['25px', '40px']}
      />
      <Stack
        margin='50px auto 0'
        spacing={[0, 50]}
        alignItems={['start', 'center']}
      >
        <ProjectsMap />
      </Stack>
    </Box>
  )
}
