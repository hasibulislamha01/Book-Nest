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
import UpdateProfile from './Pages/UserManagement/UpdateProfile';
import BorrowedBooks from './Pages/BorrowedBooksPage/BorrowedBooks';
import BookDetails from './Pages/BookDetailsPage/BookDetails';
import NotFound from './Pages/NotFound/NotFound';

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <NotFound />
  },
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
        loader: ({ params }) => fetch(`https://booknest-phi.vercel.app/books/${params.id}`),
        element:
          <ValidateUser>
            <UpdateBook></UpdateBook>
          </ValidateUser>
      },
      {
        path: "/allBooks/:id",
        loader: ({ params }) => fetch(`https://booknest-phi.vercel.app/books/${params.id}`),
        element:
          <ValidateUser>
            <BookDetails />
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
        loader: ({ params }) => fetch(`https://booknest-phi.vercel.app/borrowedBooks/${params.email}`),
        element:
          <ValidateUser>
            <BorrowedBooks></BorrowedBooks>
          </ValidateUser>
      },
      {
        path: "/allBooks/categories/:category",
        loader: ({ params }) => fetch(`https://booknest-phi.vercel.app/books/categories/${params?.category}`),
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
