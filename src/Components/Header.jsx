import React from 'react';
import Navbar from './Navbar';
import Login from './Login';
import Services from './Services';

function Header() {
    return (
        <div id='main'>
         <Navbar/>

         <div className="md:flex">
         <div className="md:w-1/2 mt-32 md:px-32 px-5">
         <div className="mt-6 uppercase tracking-wide text-sm text-yellow-700 font-semibold">All in social media marketing</div>
            <p className="block mt-1 text-3xl leading-tight font-medium text-black ">Finding customers for your new business</p>
            <p className="mt-2 ">Login into account</p>
            <p className="text-slate-500 text-sm">Use your credentials to access your account.</p>
            </div>
            
            </div>
        <Login />   
         <Services/>
         
        </div>
       
    )
}

export default Header;