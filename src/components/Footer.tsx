import Link from 'next/link';
import React from 'react';
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 mt-24 py-8">
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <ul className="space-y-2">
              <li className="font-medium text-white">FIND A STORE</li>
              <li className=' hover:underline '><Link href="/">BECOME A MEMBER</Link></li>
              <li className=' hover:underline '><Link href="/">SIGN UP FOR EMAIL</Link> </li>
              <li className=' hover:underline '><Link href="/"> US FEEDBACK</Link>SEND</li>
              <li className=' hover:underline '>STUDENT DISCOUNTS</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li className="font-medium text-white">GET HELP</li>
              <li className='cursor-pointer hover:underline'>Order Status</li>
              <li className='cursor-pointer hover:underline'>Delivery</li>
              <li className='cursor-pointer hover:underline'>Returns</li>
              <li className='cursor-pointer hover:underline'>Payment Options</li>
              <li className='cursor-pointer hover:underline'>Contact Us On Nike.com Inquiries</li>
              <li className='cursor-pointer hover:underline'>Contact Us On All Other Inquiries</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li className="font-medium text-white cursor-pointer">ABOUT NIKE</li>
              <li className='cursor-pointer hover:underline'>News</li>
              <li className='cursor-pointer hover:underline'>Careers</li>
              <li className='cursor-pointer hover:underline'>Investors</li>
              <li className='cursor-pointer hover:underline'>Sustainability</li>
            </ul>
          </div>
          <div className="flex space-x-4 text-xl">
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-500">&copy; 2025 Nike, Inc. All Rights Reserved</p>
          <div className="hidden sm:flex text-sm space-x-6">
            <a href="#" className="hover:text-white">Guides</a>
            <a href="#" className="hover:text-white">Terms of Sale</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Nike Privacy Policy</a>
          </div>
          <p className="text-sm mt-4 sm:mt-0">Pakistan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
