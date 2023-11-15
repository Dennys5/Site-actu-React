import React from 'react';
import Loby from './components/lobby';
import News from './components/news';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Loby/>
    },
    {
      path:"/News",
      element: <News/>
    }
  ])

  return (<RouterProvider router={router}/>)
    
  
}

export default App;

