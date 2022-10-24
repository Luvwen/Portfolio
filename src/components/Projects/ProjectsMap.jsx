import React from 'react'
import {
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  LinkBox,
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
          <LinkBox as='article' key={index}>
            <Flex
              mb='50px'
              border='1px solid gray'
              borderRadius='10px'
              overflow='hidden'
              _hover={{
                boxShadow:
                  '0 14px 28px rgba(0,0,0,0.50), 0 10px 10px rgba(0,0,0,0.22)',
                transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
              }}
            >
              <Image src={project.image} width='60%' height='400px' />
              <VStack margin='0 auto' spacing={10} background='cyan.50'>
                <Heading as='h3' p='40px 15px 0'>
                  {project.title}
                </Heading>
                <Text noOfLines={2} textAlign='center' p='0 15px'>
                  {project.text}
                </Text>
                <HStack>
                  {project.technologies.map((technology, idx) => {
                    return (
                      <Stack
                        spacing={3}
                        key={idx}
                        alignItems='center'
                        pl='15px'
                      >
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
                <HStack>
                  {project.links.map((link, index) => {
                    return (
                      <Link
                        href={link.platformLink}
                        key={index}
                        target='_blank'
                        color='blue.500'
                        ml='10px'
                        _hover={{
                          color: 'cyan.500',
                          transition: '0.3s'
                        }}
                      >
                        {link.platformName}
                      </Link>
                    )
                  })}
                </HStack>
              </VStack>
            </Flex>
          </LinkBox>
        )
      })}
    </>
  )
}
