import React from 'react'

import Home from "./Pages/Home";
import About from './Pages/About';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Products from './Pages/Products';

const router =createBrowserRouter(
  [
    
     { path:"/" ,element:<Home/>},
     { path:"/About" ,element:<About/>},
     { path:"/Products" ,element:<Products/>},

    
  ]
)
const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
