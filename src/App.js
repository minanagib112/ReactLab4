import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './Components/LCH/Products';
import Layout from './Components/Layout/Layout';
import AddProduct from './Components/LCH/AddProduct';
import NotFound from './Components/NotFound/NotFound';
import ProductDetails from './Components/LCH/ProductDetails';
import EditProduct from './Components/LCH/EditProduct';
import { PostsContextProvider } from './Components/ContextApis/PostsContext';
import Posts from './Components/Posts';
let routers = createBrowserRouter([
  {path:'/' ,   element: <Layout showNavbar={true}/> , children:[
    {index: true, element: <Products/>},
    {path:'product/:id' , element: <ProductDetails/>},
    {path:'add' , element: <AddProduct/>},
    {path:'edit/:id' , element: <EditProduct/>},
    {path:'posts' , element: <Posts/>},
    {path:'*' , element:<NotFound/>}

  ]},
]);
function App() {
   return (
    <PostsContextProvider>
   <RouterProvider router={routers}/>
   </PostsContextProvider>
   );
    
}

export default App;
