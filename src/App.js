import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layer/Main';
import AllItems from './Components/AllItems/AllItems';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';

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
