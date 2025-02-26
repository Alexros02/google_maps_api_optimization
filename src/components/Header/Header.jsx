import React from "react";
import SweetAlert from "../SweetAlert/SweetAlert";


const Header = () => {

    const handleSubmit = (data) => {
        console.log('Datos del formulario:', data);
        // Aquí puedes enviar los datos a tu API o realizar otras acciones
    };




    return (


    <div className={"w-full flex justify-center"}>
    <div  className=" navbar shadow-lg  w-11/12 my-2 rounded-lg ">
        <div className="flex-1 gap-2">
            <a className="btn btn-ghost text-xl">daisyUI</a>

        </div>
        <div className="flex-none gap-2">
            <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto"/>
            </div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>



    );


};


export default Header;