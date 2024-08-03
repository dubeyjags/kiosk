import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styling/style.scss'
import Code from './components/Code/Code';
import SearchComponent from './components/Search/Search';
import LayoutWithLeft from './layouts/LayoutWithLeft/LayoutWithLeft';
import PinComponent from './components/PinComponent/PinComponent';
import LayoutWithHeader from './layouts/LayoutWithHeader/LayoutWithHeader';
import WelcomeComponent from './components/WelcomeComponent/WelcomeComponent';

const router= createBrowserRouter([
  {
    path: '/',
    element: <Code />
  },
  {
    path: '/',
    element: <LayoutWithLeft />,
    children: [ 
      {
        path: 'search',
        element: <SearchComponent />
      },
      {
        path: 'search/:id',
        element: <PinComponent />
      },
    ]
  },
  ,
  {
    path: '/',
    element: <LayoutWithHeader />,
    children: [ 
      {
        path: 'welcome/:id',
        element: <WelcomeComponent />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
