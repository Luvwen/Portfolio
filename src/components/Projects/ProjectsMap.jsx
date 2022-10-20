import React from 'react'
import {
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'

import { myProjects } from '../../data/data'
import { Icon } from '../../icons/CustomIcon'

export const ProjectsMap = () => {
  return (
    <>
      {myProjects.map((project, index) => {
        return (
          <Flex
            as='article'
            mb='50px'
            border='1px solid gray'
            key={index}
            _hover={{
              transform: 'scale(1.1)',
              transition: 'all 0.5s cubic-bezier(.25,.8,.25,1)',
              cursor: 'pointer'
            }}
          >
            <Image src={project.image} width='550px' height='400px' />
            <VStack margin='0 auto' spacing={6}>
              <Heading as='h3' pt='24px'>
                {project.title}
              </Heading>
              <Text noOfLines={2} textAlign='center'>
                {project.text}
              </Text>
              <HStack>
                {project.technologies.map((technology, idx) => {
                  return (
                    <Stack spacing={3} key={idx} alignItems='center' pl='15px'>
                      <Icon
                        iconName={technology}
                        width={'50px'}
                        height={'50px'}
                      />
                      <Text fontWeight='medium' fontSize='18px'>
                        {technology}
                      </Text>
                    </Stack>
                  )
                })}
              </HStack>
            </VStack>
          </Flex>
        )
      })}
    </>
  )
}
