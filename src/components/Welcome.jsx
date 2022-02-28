import { useContext } from 'react'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'

import { AuthContext } from '../context/AuthContext'
import useProfile from '../hooks/useProfile'
import { logout } from '../services/auth'

const Welcome = () => {
  const { user } = useContext(AuthContext)
  const userProfile = useProfile()

  const handleLogout = async () => await logout()

  return (
    <Flex mt={4} pr={8} pl={8} flexDirection={'row'} justifyContent={'space-between'}>
      <Box>
        <Heading as='h3' size='md' mb={2}>
          Welcome
        </Heading>
        <Text fontSize='sm' color='#718096' fontWeight={'600'}>
          User: { userProfile
          ? userProfile.username
          : user
            ? user.email
            : 'Anonymous'
          }
        </Text>
        <Button onClick={handleLogout}>Logout</Button>
      </Box>
    </Flex>
  )
}

export default Welcome
