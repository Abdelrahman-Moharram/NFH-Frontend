import Link from "next/link";
import Cookies from "js-cookie"
import { IoCalendarSharp, IoSettingsSharp } from "react-icons/io5";
import { ImHome3 } from "react-icons/im";
import { BiSolidDashboard } from "react-icons/bi";
import { GiNotebook } from "react-icons/gi";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { FaCalculator } from "react-icons/fa";

export default function SideNav() {
    return (
        <div className={`fixed transition-all duration-500 flex flex-col justify-around h-screen ${Cookies.get('access_token')?'':'mx-[-160px]'}`}>
            
            <div className={`transition-all duration-500  bg-card rounded-full p-1 default-shadow`}>
 
                {/* item */}

                <Link href={"/"} className="block p-4 rounded-full bg-transparent text-xl text-color transition-all hover:bg-secondary hover:text-white">
                    <ImHome3 />
                </Link>
                <Link href={"/"} className="block p-4 rounded-full bg-transparent text-xl text-color transition-all hover:bg-secondary hover:text-white">
                    <BiSolidDashboard />
                </Link>
                <Link href={"/"} className="block p-4 rounded-full bg-transparent text-xl text-color transition-all hover:bg-secondary hover:text-white">
                    <IoCalendarSharp />
                </Link>
                <Link href={"/"} className="block p-4 rounded-full bg-transparent text-xl text-color transition-all hover:bg-secondary hover:text-white">
                    <GiNotebook />
                </Link>

                <Link href={"/"} className="block p-4 rounded-full bg-transparent text-xl text-color transition-all hover:bg-secondary hover:text-white">
                    <TbMessageChatbotFilled />
                </Link>
                <Link href={"/"} className="block p-4 rounded-full bg-transparent text-xl text-color transition-all hover:bg-secondary hover:text-white">
                    <FaCalculator />
                </Link>

            </div>
            <div className={`transition-all duration-500  bg-card rounded-full p-1 default-shadow `}>
                <Link href={"/settings"} className="block p-4 rounded-full bg-transparent text-xl text-color transition-all hover:bg-secondary hover:text-white">
                    <IoSettingsSharp  />
                </Link>
            </div>
        </div>
    );
}