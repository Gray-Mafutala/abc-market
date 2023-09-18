import { RiMastercardFill, RiPaypalFill, RiVisaLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-slate-500 pt-16 pb-5 px-4">
      {/* center inner wrapper */}
      <div className="centered-container flex flex-col gap-y-16">
        {/* A - top lists */}
        <div
          className="flex flex-col tabletM:flex-row gap-12
          tabletM:justify-between"
        >
          {/* Logo and outline */}
          <div
            className="flex flex-col gap-y-1 items-center
            tabletM:items-start"
          >
            <h1
              className="text-2xl text-primary-blue/80 font-bold 
              duration-300 hover:opacity-80 whitespace-nowrap"
            >
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                ABC <span className="text-slate-400">Market</span>
              </Link>
            </h1>

            <p className="text-center tabletM:text-left tabletM:max-w-xs">
              Specializes in providing high-quality stylish and unique jewelry
              products.
            </p>
          </div>

          {/* right lists */}
          <div
            className="flex-grow grid grid-cols-1 mobileL:grid-cols-2 gap-y-8
            mobileXL:flex mobileXL:flex-row mobileXL:justify-between gap-x-6"
          >
            {/* SHOP */}
            <ul
              className="flex flex-col gap-y-2 whitespace-nowrap items-center
              mobileXL:items-start"
            >
              <li className="mb-2 font-bold text-slate-600">SHOP</li>
              <li className="duration-300 hover:text-primary-blue/80">
                <Link to="/products/category/electronics">Electronics</Link>
              </li>
              <li className="duration-300 hover:text-primary-blue/80">
                <Link to="/products/category/jewelery">Jewelery</Link>
              </li>
              <li className="duration-300 hover:text-primary-blue/80">
                <Link to="/products/category/men's clothing">
                  Men's Clothing
                </Link>
              </li>
              <li className="duration-300 hover:text-primary-blue/80">
                <Link to="/products/category/women's clothing">
                  Women's Clothing
                </Link>
              </li>
            </ul>

            {/* COMPANY */}
            <ul
              className="flex flex-col gap-y-2 whitespace-nowrap items-center
              mobileXL:items-start"
            >
              <li className="mb-2 font-bold text-slate-600">COMPANY</li>
              <li className="duration-300 hover:text-primary-blue/80">
                <Link to="">About Us</Link>
              </li>
              <li className="duration-300 hover:text-primary-blue/80">
                <Link to="">Contact</Link>
              </li>
              <li className="duration-300 hover:text-primary-blue/80">
                <Link to="">Affiliates</Link>
              </li>
            </ul>

            {/* SUPPORT */}
            <ul
              className="flex flex-col gap-y-2 whitespace-nowrap items-center
              mobileXL:items-start"
            >
              <li className="mb-2 font-bold text-slate-600">SUPPORT</li>
              <li className="duration-300 hover:text-primary-blue/80">
                <Link to="">FAQs</Link>
              </li>
              <li className="duration-300 hover:text-primary-blue/80">
                <Link to="">Cookie Policy</Link>
              </li>
              <li className="duration-300 hover:text-primary-blue/80">
                <Link to="">Terms of Use</Link>
              </li>
            </ul>

            {/* PAYMENT METHODS */}
            <ul
              className="flex flex-col gap-2 whitespace-nowrap items-center
              mobileXL:items-start"
            >
              <li className="mb-2 font-bold text-slate-600">PAYMENT METHODS</li>

              <li className="flex items-center gap-x-5">
                <RiMastercardFill size={24} />
                <RiVisaLine size={24} />
                <RiPaypalFill size={24} />
              </li>
            </ul>
          </div>
        </div>

        {/* B - bottom text */}
        <p
          className="font-medium text-center relative before:block 
          border-t border-t-gray-300 pt-4"
        >
          © 2022 All rights reserved. Reliance Retail Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
