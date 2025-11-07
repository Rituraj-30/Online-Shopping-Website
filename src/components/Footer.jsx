import React from 'react';
import { FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import toast from "react-hot-toast";

const Footer = () => {
    return (
        
        <footer className="bg-gray-800 text-gray-400 pt-8 mt-[40px]   pb-4">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap border-b border-gray-700 pb-6">
                    
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-x-12 gap-y-8 w-full">
                        
                        <div className="col-span-1 md:col-span-1">
                            <h3 className="text-xs font-semibold uppercase text-gray-500 mb-4">ABOUT</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white transition duration-200">Contact Us</a></li>
                                <li><a href="#" className="hover:text-white transition duration-200">About Us</a></li>
                            </ul>
                        </div>

                      

                        {/* 2. HELP Column */}
                        <div className="col-span-1 md:col-span-1">
                            <h3 className="text-xs font-semibold uppercase text-gray-500 mb-4">HELP</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white transition duration-200">Payments</a></li>
                                <li><a href="#" className="hover:text-white transition duration-200">Shopping</a></li>
                                <li><a href="#" className="hover:text-white transition duration-200">Cancellation & Returns</a></li>
                            </ul>
                        </div>

                        {/* 3. CONSUMER POLICY Column */}
                        <div className="col-span-1 md:col-span-1">
                            <h3 className="text-xs font-semibold uppercase text-gray-500 mb-4">CONSUMER POLICY</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white transition duration-200">Cancellation & Returns</a></li>
                                <li><a href="/terms" className="hover:text-white transition duration-200">Terms Of Use</a></li>
                                <li><a href="#" className="hover:text-white transition duration-200">Security</a></li>
                                <li><a href="#" className="hover:text-white transition duration-200">Privacy</a></li>
                            </ul>
                        </div>

                        {/* 4. MAIL US & REGISTERED OFFICE (Spans 2 columns on medium screens and up) */}
                        <div className="col-span-2 md:col-span-2 flex flex-col space-y-6">
                            
                            {/* Mail Us */}
                            <div className="mail-us">
                                <h3 className="text-xs font-semibold uppercase text-gray-500 mb-4">Mail Us:</h3>
                                <address className="not-italic text-sm leading-relaxed">
                                    Shop Internet Private Limited,<br />
                                    Buildings Alyssa, Begonia & Clove Embassy Tech Village, Sanawda <br />
                                    mandsaur, 458001,<br />
                                    MP, India
                                </address>
                            </div>
                            </div>
                            {  /*5  Social Links */}
                    <div className="col-span-1 md:col-span-1 flex flex-col space-y-8">

                            <div className="social-links">
                                <h3 className="text-xs font-semibold uppercase text-gray-500 mb-4">Social:</h3>
                                <div className="flex space-x-4 text-xl">
                                    <a href="#"><span className="hover:text-white transition duration-200"> { <FaTwitter /> }  </span></a>
                                    <a href="#"><span className="hover:text-white transition duration-200"> { <FaYoutube /> }  </span></a>
                                    <a href="#"><span className="hover:text-white transition duration-200"> { <FaInstagram />}  </span></a>
                                </div>
                            </div>

                            {/* Registered Office */}
                            <div>
                              
                                <p className="text-xs">
                                    Help Number: 
                                    <a href="#" className="text-blue-400 hover:text-blue-300"> 044-45614700 </a> 
                                    / 
                                    <a href="#" className="text-blue-400 hover:text-blue-300"> 044-67415800</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Bottom Bar: Utility Links, Copyright, and Payment Icons */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
                <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                    
                    {/* Utility Links */}
                    <div className="flex flex-wrap space-x-6 mb-4 md:mb-0">
                        <a href="#" className="flex items-center hover:text-white transition duration-200 font-medium" 
                            onClick={() =>
              toast("Seller section coming soon!", {
                icon: "🛍️",
                style: { background: "#333", color: "#fff" },
              })
            }
                        >
                            {/* Placeholder/Icon for 'Store' */}
                            <span role="img" aria-label="store" className="mr-2 text-lg">🛍️</span> Become a Seller
                        </a>
                        <a href="#" className="flex items-center hover:text-white transition duration-200 font-medium">
                            {/* Placeholder/Icon for 'Ad' */}
                            <span role="img" aria-label="ad" className="mr-2 text-lg">📣</span> Advertise
                        </a>
                        <a href="#-cards" className="flex items-center hover:text-white transition duration-200 font-medium">
                            {/* Placeholder/Icon for 'Gift' */}
                            <span role="img" aria-label="gift" className="mr-2 text-lg">💳</span> Gift Cards
                        </a>
                        <a href="#" className="flex items-center hover:text-white transition duration-200 font-medium">
                            {/* Placeholder/Icon for 'Help' */}
                            <span role="img" aria-label="help" className="mr-2 text-lg">❓</span> Help Center
                        </a>
                    </div>

                    <div className="flex items-center space-x-6">
                        <p>© 2020-2025 Shop.com</p>
                        
                        <div className="h-6 w-auto">
                            
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;