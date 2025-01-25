import Link from "next/link";
import Cookies from "js-cookie"
import { IoCalendarSharp, IoSettingsSharp } from "react-icons/io5";
import { ImHome3 } from "react-icons/im";
import { BiSolidDashboard } from "react-icons/bi";
import { GiNotebook } from "react-icons/gi";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { FaCalculator } from "react-icons/fa";
import SideNavItem from "./SideNavItem";

const NavList = [
    {title:'Home', icon: <ImHome3 />, href:'/'},
    {title:'Departments', icon: <BiSolidDashboard />, href:'/departments'},
    {title:'Home', icon: <IoCalendarSharp />, href:'/'},
    {title:'Home', icon: <GiNotebook />, href:'/'},
    {title:'Home', icon: <TbMessageChatbotFilled />, href:'/'},
    {title:'Home', icon: <FaCalculator />, href:'/'},
]

export default function SideNav() {
    return (
        <div className={`fixed transition-all duration-500 flex flex-col justify-around h-screen ${Cookies.get('access_token')?'':'mx-[-160px]'}`}>
            
            <div className={`transition-all duration-500  bg-card rounded-full p-1`}>
 
                {/* item */}

                {
                    NavList.map((item, idx)=>(
                        <SideNavItem item={item} key={item.href+idx} />
                    ))
                }
            </div>
            <div className={`transition-all duration-500  bg-card rounded-full p-1 `}>
                <Link href={"/settings"} className="block p-4 rounded-full bg-transparent text-xl text-color transition-all hover:bg-secondary hover:text-white">
                    <IoSettingsSharp  />
                </Link>
            </div>
        </div>
    );
}