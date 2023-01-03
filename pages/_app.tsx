import  '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthContextProvider } from '../context/AuthContext'
import ProdectedRoute from '../components/auth/ProdectedRoute'
import { Router, useRouter } from 'next/dist/client/router';
import Dashboard from './dashboard';




export default function App({ Component, pageProps }: AppProps) {
  const noAuthRequired = ['/','/login', '/signup']
  const router = useRouter()

  return(
 
    <AuthContextProvider>
<Dashboard>
    {noAuthRequired.includes(router.pathname) ? (
      <Component {...pageProps} />
    ):(
      <ProdectedRoute>
        <Component {...pageProps} />
      </ProdectedRoute>
    )}
</Dashboard>
  </AuthContextProvider>
  )
}
