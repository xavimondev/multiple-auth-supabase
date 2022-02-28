import { Button, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react'

import useForm from '../hooks/useForm'
import { signInWithMagicLink } from '../services/auth'

const initialState = {
  email: ''
}

const MagicLinkForm = () => {
  const { formValues, handleInputChange, reset } = useForm(initialState)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email } = formValues
    await signInWithMagicLink(email)
    reset()
  }

  return (
    <>
      <Heading fontSize='2xl' mb='15px'>Magic link</Heading>
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
          <Stack spacing={6}>
            <Button type='submit' bg={'blue.400'} color={'white'}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </form>
    </>
  )
}

export default MagicLinkForm
