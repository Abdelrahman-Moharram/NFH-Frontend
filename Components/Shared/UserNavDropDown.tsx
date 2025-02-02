"use client";
import { Fragment } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { setLogout } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useLogoutMutation } from "@/redux/features/authApiSlice";
import { ImageSkeleton } from "../Common";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
interface user {
  full_name: string;
  username: string;
  id: string;
}

interface Props {
  user: user;
}

const UserNavDropDown = ({ user }: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();

  const handleLogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        dispatch(setLogout());
        router.push("/auth/login");
      });
  };
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Menu as="div" className="relative inline-block ">
      <div>
        <MenuButton className="text-negative-color bg-secondary drop-shadow-xl items-center inline-flex w-full justify-center gap-x-2 rounded-full px-3 py-2 text-sm font-semibold transition ">
          {user?.id ? (
            <div className="flex items-center gap-2 ">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6001 7.45825L11.1668 12.8916C10.5251 13.5333 9.47515 13.5333 8.83348 12.8916L3.40015 7.45825"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="font-semibold ">{user?.full_name}</span>
              {
                <div className="p-[1px] rounded-full">
                  <FaUser />
                </div>
              }
            </div>
          ) : (
            <ImageSkeleton width="200px" height="30px" rounded="30px" />
          )}
        </MenuButton>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {/* <div className="py-1">
                <MenuItem>
                  {({ active }) => (
                    <Link
                      href={`/auth/profile/${user.id}`}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Profile
                    </Link>
                  )}
                </MenuItem> 
              </div> */}

          <div className="py-1">
            <MenuItem>
              {({ active }) => (
                <button
                  onClick={handleLogout}
                  className={classNames(
                    active ? "bg-gray-100 text-color" : "text-color",
                    "block px-4 py-2 text-sm cursor-pointer w-full text-start"
                  )}
                >
                  Logout
                </button>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default UserNavDropDown;
