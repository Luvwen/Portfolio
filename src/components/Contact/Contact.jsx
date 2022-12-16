import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  VStack
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser'

export const Contact = () => {
  const initialValues = {
    username: '',
    email: '',
    text: ''
  }

  const validationErrors = {
    username: {
      required: '* Campo obligatorio',
      minLength: 'Mínimo 4 caracteres',
      maxLength: 'Máximo 20 caracteres'
    },
    email: {
      required: '* Campo obligatorio',
      validEmail: 'Debes ingresar un formato de email válido '
    },
    text: {
      required: '* Campo obligatorio',
      minLength: 'Mínimo 20 caracteres',
      maxLength: 'Máximo 500 caracteres'
    }
  }

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required(validationErrors.username.required)
      .min(4, validationErrors.username.minLength)
      .max(20, validationErrors.username.maxLength),
    email: yup
      .string()
      .required(validationErrors.email.required)
      .email(validationErrors.email.validEmail),
    text: yup
      .string()
      .required(validationErrors.text.required)
      .min(20, validationErrors.text.minLength)
      .max(500, validationErrors.text.maxLength)
  })

  const onSubmit = () => {
    const { username, email, text } = values

    const service_id = 'service_tdp4tqa'
    const template_id = 'template_biu30k6'
    const user_id = 'RqJjax_yRFSfA53Gp'

    const messageDetails = {
      username,
      email,
      text
    }

    emailjs
      .send(service_id, template_id, messageDetails, user_id)
      .then(
        (response) => console.log(response),
        Swal.fire('¡Excelente!', 'El email fue enviado con éxito', 'success')
      )
      .then((error) => console.log(error))

    resetForm()
  }

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    resetForm
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  return (
    <Box m={['0 25px 0', '0']}>
      <Heading mt='50px' fontWeight='medium' id='contact'>
        Contact
      </Heading>
      <Divider
        orientation='horizontal'
        display='block'
        height='5px'
        borderRadius='1000px'
        background='gray.400'
        mt={['25px', '40px']}
      />
      <FormControl
        as='form'
        onSubmit={handleSubmit}
        width={['100%', '60%']}
        textAlign='center'
        margin='0 auto'
        padding='0 auto 100px'

      >
        <VStack alignItems='left' mt='25px'>
          <FormLabel htmlFor='username'>Nombre *</FormLabel>
          <Input
            type='text'
            name='username'
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Santiago'
            isInvalid={errors.username && touched.username ? true : false}
          />
          {errors.username && touched.username && (
            <Text textAlign='left' color='red.500'>
              {errors.username}
            </Text>
          )}
        </VStack>
        <VStack alignItems='left' mt='25px'>
          <FormLabel htmlFor='email'>Email *</FormLabel>
          <Input
            type='email'
            name='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Username@example.com'
            isInvalid={errors.email && touched.email ? true : false}
          />
          {errors.email && touched.email && (
            <Text textAlign='left' color='red.500'>
              {errors.email}
            </Text>
          )}
        </VStack>
        <VStack alignItems='left' mt='25px'>
          <FormLabel htmlFor='text'>Message *</FormLabel>
          <Textarea
            name='text'
            value={values.text}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Hi, my name is...'
            isInvalid={errors.text && touched.text ? true : false}
            size='sm'
          />
          {errors.text && touched.text && (
            <Text textAlign='left' color='red.500'>
              {errors.text}
            </Text>
          )}
        </VStack>
        <Button
          type='submit'
          leftIcon={<EmailIcon />}
          colorScheme='teal'
          mt='20px'
          isDisabled={
            !errors.username && !errors.email && !errors.text ? false : true
          }
        >
          Contact me
        </Button>
      </FormControl>
    </Box>
  )
}
