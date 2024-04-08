import React, { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import ModalRegister from "../Popup/Register/ModalRegister";
import ModalLogin from "../Popup/ModalLogin/ModalLogin";
import Post from "../Popup/MissingPost/Post";
import { AuthContext } from "./../../Context/AuthProvider/AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);

  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };
  const openModal = () => {
    setShowModal(true);
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const openPostModal = () => {
    setShowPostModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowLoginModal(false);
    setShowPostModal(false);
  };
  const handalClick = () => {
    if (!user) {
      openModal();
    } else {
      navigate("/LivePage");
    }
  };

  return (
    <div
      className={` flex justify-between font-serif items-center lg:w-[100vw] md:w-auto sm:bg-blue-600 md:bg-blue-600 lg:bg-white ${
        open ? "" : ""
      }`}
    >
      {/* //mobile responsive */}
      <div className="block md:hidden z-10 ">
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
                <button onClick={handalClick}>
                  <span>Live</span>
                </button>
                <span>About</span>
                <p onClick={openPostModal}>+ Post</p>
              </div>
            </div>
          ) : (
            <span>
              <i class="bi bi-list"></i>
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-around items-center  w-[40vw] h-[60px] ml-8">
        <div className="text-red-600 text-[25px] font-serif font-extrabold md:flex z-10">
          <h1>Miilan</h1>
        </div>
        <div className="hidden md:block">
          <ul className="flex justify-around items-center w-[20vw] h-[60px] m-2 ">
            <Link to="/Mainpage">
              <li className="hover:underline cursor-pointer underline-offset-8 decoration-4 decoration-blue-500">
                Home
              </li>
            </Link>
            <li className="hover:underline cursor-pointer underline-offset-8 decoration-4 decoration-blue-500">
              About
            </li>
            <button onClick={handalClick}>
              <li className="hover:underline cursor-pointer underline-offset-8 decoration-4 decoration-blue-500">
                Live
              </li>
            </button>
            {!user ? null : (
              <li
                onClick={openPostModal}
                className="border w-[80px] h-[30px] text-center font-bold bg-blue-600 rounded text-white hover:bg-red-500 cursor-pointer"
              >
                + Post
              </li>
            )}
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
                {!user ? (
                  <Fragment>
                    <Menu.Item>
                      {({ active }) => (
                        <p
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                          onClick={openModal}
                        >
                          Register
                        </p>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <p
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                          onClick={openLoginModal}
                        >
                          Login
                        </p>
                      )}
                    </Menu.Item>
                  </Fragment>
                ) : (
                  <Fragment>
                    <Menu.Item>
                      {({ active }) => (
                        <Link to={"/Dashbord"}>
                          <p
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Dashboard
                          </p>
                        </Link>
                      )}
                    </Menu.Item>
                    <form method="POST" action="#" onSubmit={handleLogout}>
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
                  </Fragment>
                )}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      {showModal && <ModalRegister closeModal={closeModal} />}
      {showLoginModal && <ModalLogin closeModal={closeModal} />}
      {showPostModal && <Post closeModal={closeModal} />}
    </div>
  );
}

export default Navbar;
