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

function App() {
  const router = createBrowserRouter([
    {
      path:'/', element: <Main></Main>,
      children:[
        {
          path:'/', element: <Home></Home>
        },
        {
          path:'/all', element: <AllItems></AllItems>
        },
        {
          path:'/details/:id', element: <Details></Details>,
          loader: ({params})=> fetch(`http://localhost:5000/tests/${params.id}`)
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
          loader: ({params}) => fetch(`http://localhost:5000/review/${params.id}`)
        },
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
