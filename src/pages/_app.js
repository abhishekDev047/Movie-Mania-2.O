import '@/styles/globals.css';
import Navbar from './components/Navbar';

export default function App({ Component, pageProps }) {
  return(<>
      <Navbar/>
      <div className='mt-10'>
    <Component {...pageProps} />
    </div>
  </>
  )
   
}
