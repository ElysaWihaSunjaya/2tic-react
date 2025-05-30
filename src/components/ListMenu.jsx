import { IoFastFoodOutline } from "react-icons/io5"; 
import { RiFileUserFill } from "react-icons/ri"; 
import { BiError } from "react-icons/bi"; 
import { GrUnorderedList } from "react-icons/gr"; 
import { BsFillPersonFill } from "react-icons/bs"; 
import { CgHome } from "react-icons/cg"; 
import { Link, NavLink } from "react-router-dom";

export default function ListMenu() {
    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${isActive ? 
            "text-hijau bg-green-200 font-extrabold" : 
            "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`

    return (
            <div id="sidebar-menu" className="mt-10">
                <ul id="menu-list" className="space-y-3">
                    <li>
                        <NavLink id="menu-1" to="/" className={menuClass}>
                            <CgHome  className="mr-4 text-xl"/>Dashboard</NavLink>
                      </li>
                    <li>
                        <NavLink id="menu-2" to="/orders" className={menuClass}>
                            <GrUnorderedList className="mr-4 text-xl"/>Orders</NavLink>
                      </li>
                      <li>
                        <NavLink id="menu-3" to="/customers" className={menuClass}>
                            <BsFillPersonFill  className="mr-4 text-xl"/>Customers</NavLink>
                      </li>
                      <li>
                        <NavLink id="menu-3" to="/User" className={menuClass}>
                            <RiFileUserFill className="mr-4 text-xl"/>User</NavLink>
                      </li>
                      <li>
                        <NavLink id="400" to="/400" className={menuClass}>
                            <BiError className="mr-4 text-xl"/>Error 400</NavLink>
                      </li>
                      <li>
                        <NavLink id="401" to="/401" className={menuClass}>
                            <BiError  className="mr-4 text-xl"/>Error 401</NavLink>
                      </li>
                      <li>
                        <NavLink id="403" to="/403" className={menuClass}>
                            <BiError  className="mr-4 text-xl"/>Error 403</NavLink>
                      </li>
                      <li>
                        <NavLink
                            id="menu-4"
                            to="/products"
                            className={menuClass}
                        >
                            <IoFastFoodOutline className="mr-4 text-xl" />
                                Products
                        </NavLink>
                        </li>
                </ul>
            </div>
    );
}