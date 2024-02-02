import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import cartComponent from './components/CartComponent';
import reportWebVitals from './reportWebVitals';
import BooksContainerComponent from './components/BooksContainerComponent';
import { RouterProviderProps, Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignUpAndLoginComponent from './components/SignUpAndLoginComponent';
import HeaderAndFooterComponent from './components/HeaderAndFooterComponent';
import BookDetailsComponent from './components/BookDetailsComponent';
import ErrorComponent from './components/ErrorComponent';
import CartComponent from './components/CartComponent';
import { Provider } from 'react-redux';
import appStore from './utilis/store/AppStore';
import WishListComponent from './components/WishListComponent';
// import { Provider } from 'react-redux';
// import appStore from './utilis/store/AppStore';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignUpAndLoginComponent />,
  },
  {
    path: '/book',
    element: <HeaderAndFooterComponent />,
    children: [
      {
        path: '',
        element: <BooksContainerComponent />,
      },
      {
        path:':bookId',
        element:<BookDetailsComponent />
      },
      {
        path:'error',
        element:<ErrorComponent />
      },
      {
        path:'cart',
        element:<CartComponent/>
      }, 
      {
        path:'wishlist',
        element:<WishListComponent/>,
      },

    ],
  },
]);


root.render(
  <Provider store={appStore}>
  <RouterProvider router={router}/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
