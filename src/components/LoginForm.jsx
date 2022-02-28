import { Button, FormControl, FormLabel, Heading, Input, Stack, Center, Text } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'

import { signInWithEmail, signInWithGoogle } from '../services/auth'
import useForm from '../hooks/useForm'

const initialState = {
  email: '',
  password: ''
}

const LoginForm = () => {

  const { formValues, handleInputChange } = useForm(initialState)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = formValues
    await signInWithEmail(email, password)
  }

  const handleLoginGoogle = async () => {
    await signInWithGoogle()
  }

  return (
    <>
      <Heading fontSize='2xl' mb='15px'>Email and Password</Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id='email'>
            <FormLabel>Email address</FormLabel>
            <Input
              type='email'
              name='email'
              value={formValues.email}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl id='password'>
            <FormLabel>Password</FormLabel>
            <Input
              type='password'
              name='password'
              value={formValues.password}
              onChange={handleInputChange}
            />
          </FormControl>
          <Stack spacing={6}>
            <Button type='submit' bg={'blue.400'} color={'white'}>
              Sign in
            </Button>
            <Button
              w={'full'}
              maxW={'md'}
              variant={'outline'}
              leftIcon={<FcGoogle />}
              onClick={handleLoginGoogle}>
              <Center>
                <Text>Sign in with Google</Text>
              </Center>
            </Button>
          </Stack>
        </Stack>
      </form>
    </>
  )
}

export default LoginForm