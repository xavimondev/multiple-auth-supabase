import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import { AuthProvider } from './context/AuthContext'

import App from './App'

ReactDOM.render(
  <ChakraProvider>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById('root')
)
