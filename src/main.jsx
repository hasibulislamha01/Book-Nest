import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './HomePage/Home';
import Login from './Pages/UserManagement/Login';
import Register from './Pages/UserManagement/Register';
import AuthProvider from './Components/AuthProvider';
import AllBooks from './Pages/AllBooksPage/AllBooks';
import UpdateBook from './Pages/UpdateBookPage/UpdateBook';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/allBooks",
        element: <AllBooks></AllBooks>
      },
      {
        path: "/allBooks/:id",
        loader: ({params})=>fetch(`http://localhost:5000/books/${params.id}`),
        element: <UpdateBook></UpdateBook>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
