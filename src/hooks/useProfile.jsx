import { useEffect, useState } from 'react'

import { getUserProfile } from '../services/auth'

const useProfile = () => {
  const [userProfile, setUserProfile] = useState(null)

  useEffect(() => {
    const getProfile = async () => {
      const result = await getUserProfile()
      if (result) {
        setUserProfile(result)
      }
    }
    getProfile()
  }, [])
  return userProfile
}

export default useProfile
