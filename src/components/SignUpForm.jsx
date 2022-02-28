import { Button, FormControl, FormLabel, Heading, Input, Stack, InputGroup, InputRightElement } from '@chakra-ui/react'

import { supabase } from '../api/config'
import useForm from '../hooks/useForm'
import { signUpWithEmail, updateProfile } from '../services/auth'

const initialState = {
  fullName: '',
  emailr: '',
  passwordr: ''
}

const SingUpForm = () => {
  const { formValues, handleInputChange, reset } = useForm(initialState)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { emailr, passwordr, fullName } = formValues
    const data = {
      email: emailr,
      password: passwordr
    }
    // Add user in users table
    const result = await signUpWithEmail(data)

    if (result) {
      const user = supabase.auth.user()

      const data = {
        id: user.id,
        full_name: fullName
      }
      // Add user's profile in profiles table
      await updateProfile(data)
    }
  }

  return (
    <>
      <Heading fontSize='2xl' mb='15px'>Register</Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id='fullName'>
            <FormLabel>Full Name</FormLabel>
            <Input type='text' name='fullName' value={formValues.fullName} onChange={handleInputChange}/>
          </FormControl>
          <FormControl id='emailr'>
            <FormLabel>Email</FormLabel>
            <Input type='email' name='emailr' value={formValues.emailr} onChange={handleInputChange}/>
          </FormControl>
          <FormControl id='passwordr'>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input type='password' name='passwordr' value={formValues.passwordr} onChange={handleInputChange}/>
            </InputGroup>
          </FormControl>
          <Button
              type='submit'
              loadingText='Submitting'
              bg={'blue.400'}
              color={'white'}>
              Sign up
          </Button>
        </Stack>
      </form>
    </>
  )
}

export default SingUpForm
