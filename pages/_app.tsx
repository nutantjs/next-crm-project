import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthContextProvider } from '../context/AuthContext'
import ProdectedRoute from '../components/ProdectedRoute'
import { Router, useRouter } from 'next/dist/client/router';


export default function App({ Component, pageProps }: AppProps) {
  const noAuthRequired = ['/','/login', '/signup']
  const router = useRouter()

  return(
 
  <AuthContextProvider>
    {noAuthRequired.includes(router.pathname) ? (
      <Component {...pageProps} />
    ):(
      <ProdectedRoute>
        <Component {...pageProps} />
      </ProdectedRoute>
    )}
    
  </AuthContextProvider>

  )
}
