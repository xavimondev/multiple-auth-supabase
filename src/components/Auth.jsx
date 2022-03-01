import { GridItem, Grid } from '@chakra-ui/react'

import SignUpForm from './SignUpForm'
import MagicLinkForm from './MagicLinkForm'
import LoginForm from './LoginForm'

const Auth = () => {
  
  return (
    <Grid templateColumns='repeat(3,400px)' w='auto' h='100%' gap={70} placeContent='center'>
      <GridItem>
        <SignUpForm />
      </GridItem>
      <GridItem>
       <LoginForm />
      </GridItem>
      <GridItem>
        <MagicLinkForm />
      </GridItem>
    </Grid>
  )
}

export default Auth
