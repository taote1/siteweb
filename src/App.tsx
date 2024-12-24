import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Booking } from './pages/Booking'
import { Main } from './pages/Main'
import { Provider } from 'react-redux'
import store from './redux/store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/bookings',
    element: <Booking />
  },
])  

function App() {
  return (
    <>
    <Provider store={store}>

      <RouterProvider router={router}/>
    </Provider>
    </>
  )
}

export default App
