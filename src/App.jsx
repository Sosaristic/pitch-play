import { Outlet } from 'react-router-dom'
import Layout from './components/Layout/Layout'
function App() {

  return (
    <>
   <Layout>
    <section className='w-[95%] lg:max-w-[60%] mx-auto lg:w-[50%] md:w-[80%] min-h-[80vh] relative'>
    <Outlet />
    </section>
   </Layout>
    </>
  )
}

export default App
