import React, { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={` flex justify-between font-serif items-center w-[100vw] md:w-auto sm:bg-blue-600 md:bg-blue-600 lg:bg-white ${
        open ? "" : ""
      }`}
    >
      {/* //mobile responsive */}
      <div className="block md:hidden">
        <div
          className=" font-extrabold text-3xl m-2 cursor-pointer text-white "
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <div>
              <span className="z-10">
                <i class="bi bi-x-lg"></i>
              </span>
              <div className=" flex flex-col items-center justify-center text-[15px] absolute lg:static bg-blue-600 left-0 right-0 md:mt-[130px] md:w-auto text-center">
                <Link to="/Mainpage">
                  <span>Home</span>
                </Link>
                <span>Live</span>
                <span>About</span>
              </div>
            </div>
          ) : (
            <span>
              <i class="bi bi-list"></i>
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-around items-center w-[30vw] h-[60px] ml-8">
        <div className="text-red-600 text-[25px] font-serif font-extrabold md:flex z-10">
          <h1>MILAN</h1>
        </div>
        <div className="hidden md:block">
          <ul className="flex justify-around items-center w-[20vw] h-[60px] m-2 ">
            <li className="hover:underline cursor-pointer underline-offset-8 decoration-4 decoration-blue-500">
              Home
            </li>
            <li className="hover:underline cursor-pointer underline-offset-8 decoration-4 decoration-blue-500">
              About
            </li>
            <li className="hover:underline cursor-pointer underline-offset-8 decoration-4 decoration-blue-500">
              Live
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-around items-center w-[20vw] h-[60px] ">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <i class="bi bi-person-circle"></i>
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
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
            <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/RegisterPage">
                      <p
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Register
                      </p>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <p
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Login
                    </p>
                  )}
                </Menu.Item>
                <form method="POST" action="#">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block w-full px-4 py-2 text-left text-sm"
                        )}
                      >
                        Sign out
                      </button>
                    )}
                  </Menu.Item>
                </form>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
