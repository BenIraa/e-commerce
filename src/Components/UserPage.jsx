import React from 'react';


function UserPage() {
    return(
    <>
        <div class="bs-example">
    <nav class="navbar navbar-expand-md navbar-light  bg-gray-300">
    <a href="#" class="nav-item nav-link active">
                    <div className="text-2xl font-bold"><span className="text-blue-800">Ben</span><span className="text-blue-400 text-bold">Iraa</span></div>
                    
                </a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
               
                
            </div>
            <div className="px-3 ml-auto navbar-nav">
               <a href="" className="px-3 text-gray-400 nav-item nav-link">Become a tutor</a>
               <a href="/Find" className="px-3 text-gray-400 nav-item nav-link">Find a tutor</a>
               <a href="/Login" className="px-3 text-gray-400 nav-item nav-link">Login</a>
            </div>
            
            <div class="navbar-nav ml-auto">
                
            <button className="px-4 text-white bg-blue-400 rounded-full ">
                <a href="#" className="text-white nav-item nav-link ">sign up</a>
            </button>
                
                
                
            </div>
        </div>
    </nav>
</div>
    
    </>

    )
    
}
export default UserPage;