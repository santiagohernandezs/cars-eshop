import '@/styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='min-h-screen bg-[#fffffe]'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
