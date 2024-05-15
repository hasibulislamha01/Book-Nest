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
import ValidateUser from './Pages/UserManagement/ValidateUser';
import AddBooks from './Pages/AddBooksPage/AddBooks';
import SameCategoryBooks from './Pages/ShowBookByCategory/SameCategoryBooks';
import Details from './Pages/BookDetailsPage/Details';
import UpdateProfile from './Pages/UserManagement/UpdateProfile';
import BorrowedBooks from './Pages/BorrowedBooksPage/BorrowedBooks';

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
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: "/allBooks",
        element: <AllBooks></AllBooks>
      },
      {
        path: "/allBooks/update/:id",
        loader: ({ params }) => fetch(`https://booknest-phi.vercel.app/${params.id}`),
        element:
          <ValidateUser>
            <UpdateBook></UpdateBook>
          </ValidateUser>
      },
      {
        path: "/allBooks/:id",
        loader: ({ params }) => fetch(`https://booknest-phi.vercel.app/${params.id}`),
        element:
          <ValidateUser>
            <Details></Details>
          </ValidateUser>
      },
      {
        path: "/addBooks",
        element:
          <ValidateUser>
            <AddBooks></AddBooks>
          </ValidateUser>
      },
      {
        path: "/borrowedBooks/:email",
        loader: ({params})=>fetch(`http://localhost:5000/borrowedBooks/${params.email}`),
        element:
          <ValidateUser>
            <BorrowedBooks></BorrowedBooks>
          </ValidateUser>
      },
      {
        path: "/allBooks/categories/:category",
        loader: ({params})=> fetch(`https://booknest-phi.vercel.app/categories/${params?.category}`),
        element: <SameCategoryBooks></SameCategoryBooks>
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
