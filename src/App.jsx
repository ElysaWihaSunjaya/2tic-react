import { Suspense, useState } from 'react'
import React from 'react';
import './assets/tailwind.css';
import Loading from './components/Loading';
import {Routes, Route} from "react-router-dom"
// import Dashboard from "./pages/Dashboard";
// import Orders from './pages/Orders';
// import Customers from './pages/Customer';
// import NotFound from './pages/NotFound';
// import OrderForm from "./form/orderform";
// import CustomerForm from "./form/customerform";
// import MainLayout from './layouts/MainLayout';
// import AuthLayout from './layouts/AuthLayout';
// import Login from './pages/auth/Login';
// import Register from './pages/auth/Register';
// import Forgot from './pages/auth/Forgot';

const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Orders = React.lazy(() => import("./pages/Orders"))
const Customers = React.lazy(() => import("./pages/Customer"))
const User = React.lazy(() => import("./pages/User"))
const NotFound = React.lazy(() => import("./pages/NotFound"))
const OrderForm = React.lazy(() => import("./form/orderform"))
const CustomerForm = React.lazy(() => import("./form/customerform"))
const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"))
const Login = React.lazy(() => import("./pages/auth/Login"))
const Register = React.lazy(() => import("./pages/auth/Register"))
const Forgot = React.lazy(() => import("./pages/auth/Forgot"))
const CekAnggota = React.lazy(() => import("./form/cekAnggota"))
const Products = React.lazy(() => import("./pages/Products"))

function App() {

  return (
    <Suspense fallback={<Loading />}>
    <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/User" element={<User />} />
          <Route path="/orderform" element={<OrderForm />} />
          <Route path="/customerform" element={<CustomerForm />} />
          <Route path="/400" element={<NotFound code="400"/>} />
          <Route path="/401" element={<NotFound code="401"/>} />
          <Route path="/403" element={<NotFound code="403"/>} />
          <Route path="products" element={<Products />} />
        </Route>

        <Route element={<AuthLayout/>}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/forgot" element={<Forgot/>} />
        </Route>

<Route path="/guest" element={<GuestLayout />}>
</Route>
        <Route path="/cekAnggota" element={<CekAnggota/>}>
        </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </Suspense>
  )
}

export default App
