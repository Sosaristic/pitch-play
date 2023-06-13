import { Outlet, } from 'react-router-dom'
import { useAppContext } from './context/AppContext'
import Layout from './components/Layout/Layout'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './components/UI'
function App() {
const {displayLoader, notification} = useAppContext()

  return (
    <>
   <Layout>
    <section className='w-[95%] lg:max-w-[60%] mx-auto lg:w-[50%] md:w-[80%] min-h-[80vh] relative'>
    <Outlet />
    {displayLoader && <Loader />}
    </section>
   </Layout>
    </>
  )
}

export default App
