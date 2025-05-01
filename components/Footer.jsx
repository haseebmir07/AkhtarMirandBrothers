import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div id="bottom">
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm">
          Welcome to Akhtar Mir and Brothers — where tradition meets craftsmanship. 
          Our journey started with a vision to bring authentic handmade products to your doorstep, 
          rooted in heritage and refined by passion.
          </p>
          <p className="mt-6 text-sm"> From hand-crafted items to premium art accessories, we deliver quality and creativity in every item. 
          Our mission is to empower artisans and provide our customers with unique, meaningful products that speak of culture and class.</p>
          <p className="mt-6 text-sm">
          Thank you for being part of our story. Together, we support artistry and promote local craftsmanship across generations.
        </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="/">Home</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">About us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Contact us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+91-9663687641</p>
              <p>+91-9419063702</p>
              <p>nayeemmir32@gmail.com</p>
              <p>Zadibal, Alipark, Srinagar 190011, Kashmir
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <p className="py-4 text-center text-xs md:text-sm">
        Copyright 2025 © Developed And Designed By Mohammad Haseeb Mir All Right Reserved.
      </p> */}
      <p className="py-4 text-center text-xs md:text-sm">
      © Akhtar Mir And Brothers, All Right Reserved. Developed And Designed By Mohammad Haseeb Mir.
      </p>
      </div>
    </footer>
  );
};

export default Footer;