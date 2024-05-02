import React from "react";
import footer from "../../../assets/images/footer.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: `url(${footer})`,
        backgroundSize: "cover",
      }}
      className="dark:text-white bg-gray-100 dark:bg-black"
    >
      <div className="container mx-auto px-6 pt-16 pb-12">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 text-center md:text-left ">
            <h5 className="uppercase mb-6 font-bold">Links</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500 dark:text-white"
                >
                  I'll return
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500 dark:text-white"
                >
                  I promise
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500 dark:text-white"
                >
                  Reckless is he
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left ">
            <h5 className="uppercase mb-6 font-bold">Legal</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500 dark:text-white"
                >
                  Emperor's Terms
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500 dark:text-white"
                >
                  Pulverized?
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left ">
            <h5 className="uppercase mb-6 font-bold">Social</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500 dark:text-white"
                >
                  Corellia
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500 dark:text-white"
                >
                  Bilbringi
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500 dark:text-white"
                >
                  Fondor
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left ">
            <h5 className="uppercase mb-6 font-bold">Through the Force</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500 dark:text-white"
                >
                  Journey to the Emperor
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500 dark:text-white"
                >
                  Lord Vader ship approaching?
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500 dark:text-white"
                >
                  X-wing class
                </a>
              </li>
            </ul>
          </div>
        </div>
        <footer className="footer footer-center y-4 ">
          <div>
            <p>
              Copyright © {year} - All right reserved by Doctors Industries Ltd.
            </p>
          </div>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
