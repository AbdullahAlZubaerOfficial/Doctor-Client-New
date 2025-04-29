import React from 'react';

const Footer = () => {
  return (
    <div className="w-[410px] sm:w-full lg:max-w-screen-xl mx-auto">
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 w-full">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226..." />
          </svg>
          <p>
            Abdullah AL Zubaer
            <br />
            Providing reliable tech since 2024
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 w-full">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by @zubaer</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
