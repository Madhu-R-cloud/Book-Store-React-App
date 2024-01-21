import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePageComponent from './components/HomePageComponent';
import reportWebVitals from './reportWebVitals';
import BooksContainerComponent from './components/BooksContainerComponent';
import { RouterProviderProps, Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignUpAndLoginComponent from './components/SignUpAndLoginComponent';
import HeaderAndFooterComponent from './components/HeaderAndFooterComponent';
import { paste } from '@testing-library/user-event/dist/paste';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignUpAndLoginComponent />,
  },
  {
    path: '/home',
    element: <HeaderAndFooterComponent />,
    children: [
      {
        path: '',
        element: <BooksContainerComponent />,
      },
    ],
  },
]);


root.render(
  // <React.StrictMode>
  //   <BooksContainerComponent />
  // </React.StrictMode>
  <RouterProvider router={router}/>

 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
