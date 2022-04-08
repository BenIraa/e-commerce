import React from "react";
import UserPage from './UserPage';


function Login () {

    return (
        <>
       
        <div class="w-full sm:p-32 md:w-1/2 ">
        <form className="px-5 mt-5">
        <div className="mb-4">
    
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700   leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
        </div>
        <div className="mb-6">
            <input class="shadow appearance-none border border-red-500 rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="***********"/>

        </div>
        <div className="flex items-center justify-between">
            <a href="/UserPage" className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
            </a>
            <a class="inline-block align-baseline font-bold text-sm text-yellow-800 hover:text-yellow-700" href="#">
            Forgot Password?
            </a>
        </div>
        </form>

        </div>
        
        
     
        </>
    )
}

export default Login