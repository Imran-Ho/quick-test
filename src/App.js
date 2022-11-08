import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layer/Main';
import Service from './Components/Service/Service';

function App() {
  const router = createBrowserRouter([
    {
      path:'/', element: <Main></Main>,
      children:[
        {
          path:'/tests', element: <Service></Service>
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
