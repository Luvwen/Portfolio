import React from 'react'
import { Image, Text, VStack } from '@chakra-ui/react'

export const hover = {
  transform: 'scale(1.2)',
  transition: 'all 0.5s cubic-bezier(.25,.8,.25,1)'
}

const transition = {
  transition: 'all 0.5s cubic-bezier(.25,.8,.25,1)'
}

export const CustomIcon = ({ iconName }) => {
  return (
    <VStack spacing={2} width='150px' transition={transition} _hover={hover}>
      <Image
        width='100px'
        height='100px'
        src={require(`./iconsImages/${iconName}.png`)}
      />
      <Text fontSize='18px' fontWeight='medium'>
        {iconName}
      </Text>
    </VStack>
  )
}

export const Icon = ({ iconName, width, height }) => {
  return (
    <Image
      width={width}
      height={height}
      src={require(`./iconsImages/${iconName}.png`)}
    />
  )
}
