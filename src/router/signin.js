import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Login from '../page/login'
import Register from '../page/register'
import Dashboard from '../page/dashboard'
import Checkout from '../page/checkout'
import Auth from '../page/auth'
import Admin from '../page/admin'

const Signin = (price, seat, movie) => {
	return (
		<div>
			<BrowserRouter>
		
			
			<Routes>
			<Route path="/" exact element={<Auth/>} ></Route>	
			<Route path="/login" exact element={<Login/>} ></Route>
			<Route path="/register" exact element={<Register/>} ></Route>
			<Route path="/admin" exact element={<Admin/>} ></Route>
			<Route path="/dashboard" exact element={<Dashboard/>} ></Route>
			<Route path="/checkout" exact element={<Checkout movie={movie} price={price} seat={seat}/>} ></Route>
			</Routes>
				
			</BrowserRouter>
		</div>
	)
}

export default Signin;