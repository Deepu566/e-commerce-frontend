// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home.jsx'
import Products from './Pages/Products/Products.jsx'
import Product from './Pages/Product/Product.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Footer from "./Components/Footer/Footer.jsx"
import Navbar from "./Components/Navbar/Navbar.jsx"
import "./app.scss"
const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/products/:id",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <Product />
      },
      {
        path: "/",
        element: <Home />
      },
    ]
  },

]);

function App() {
  return (
    <>
      <RouterProvider router={router} />

    </>
  );
}

export default App;
