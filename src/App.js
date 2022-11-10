import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layer/Main';
import AllItems from './Components/AllItems/AllItems';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import MyReview from './Components/MyReview/MyReview';
import AddService from './Components/AddService/AddService';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import UpdateItem from './Components/MyReview/UpdateItem';
import Blog from './Components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path:'/', element: <Main></Main>,
      children:[
        {
          path:'/', element: <Home></Home>
        },
        {
          path:'/all', element: <PrivateRoute><AllItems></AllItems></PrivateRoute>
          // loader: ({params})=> fetch(`https://assignment-11-server-imran-ho.vercel.app/tests/${params.id}`)
        },
        {
          path:'/details/:id', element: <PrivateRoute><Details></Details></PrivateRoute>,
          loader: ({params})=> fetch(`https://assignment-11-server-imran-ho.vercel.app/tests/${params.id}`)
        },
        {
          path:'/login', element: <Login></Login>
        },
        {
          path:'/signup', element: <Signup></Signup>
        },
        {
          path:'/myReview', element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
        },
        {
          path:'/addService', element: <AddService></AddService>
        },
        {
          path:'/updateItem/:id', element: <UpdateItem></UpdateItem>,
          loader: ({params}) => fetch(`https://assignment-11-server-imran-ho.vercel.app/review/${params.id}`)
        },
        {
          path:'/blog', element: <Blog></Blog>
        }
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
