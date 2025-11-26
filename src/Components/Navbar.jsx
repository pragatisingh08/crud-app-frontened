import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import toast from "react-hot-toast";
import { use } from "react";

const Navbar = () => {

  let { pathname } = useLocation();
  let navigate=useNavigate()
    let token = sessionStorage.getItem("accesstoken");
 

    const handleLogout=()=>{
    if(confirm("Are you sure ? ")){
      sessionStorage.removeItem("accestoken")
      navigate("/login")
      toast.success("logged out successfully ! ")
    }
    }
  return (
    <header className="h-20 w-full px-2 shadow-xl flex items-center justify-between">
      <div className="font-bold md:text-2xl">
        <Link to="/">Crud-App</Link>
      </div>

      {pathname === "/login" || pathname === "/signup" ? null : (
        <>
          <nav className="hidden md:flex gap-8 font-semibold">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contacts">Contacts</Link>
          </nav>
        </>
      )}
      
      <div className="font-semibold">
       {token ? (<>
       <Link to="/createEmp">
          <button className="cursor-pointer border rounded px-3 py-1 md:px-6 md:py-2 text-red-600 border-blue-600">Create Employee</button>
        </Link>
        <Link to="/allEmp">
          <button className="cursor-pointer border rounded px-3 py-1 md:px-6 md:py-2 text-red-600 border-blue-600">All Employees</button>
         
        </Link>
        <button onClick = {handleLogout} className="text-white bg-red-400 p-1.5 rounded-full hover:bg-red-600"><FaPowerOff/> </button>
         
        </> ):( <>
        <Link to="/login">
          <button className="cursor-pointer border rounded px-3 py-1 md:px-6 md:py-2 text-blue-600 border-blue-600">
            Login
          </button>
        </Link>

        <Link to="/signup">
          <button className="cursor-pointer border rounded px-3 py-1 md:px-6 md:py-2 ms-2 bg-blue-600 text-white">
            Signup
          </button>
        </Link>
        </>)}
      </div>
    </header>
  );
};

export default Navbar;
