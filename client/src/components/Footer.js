import React from 'react'

function Footer() {
  return (
    <footer className="border border-black rounded-t-2xl pt-4 pb-4">
      <div className=" flex flex-row px-4 py-2 justify-between">
        <div className=" w-80 p-1">
          <h2 className="text-2xl font-semibold ">Get notified when launch</h2>
          <p className="text-gray-500">
            Stay up to date with the latest news, announcements, and articles.
          </p>
        </div>
        <form className=" px-2 py-1">
          <input
            type="text"
            placeholder="Enter your email"
            className="border border-r-0  p-2 rounded-l-md "
          />
          <button className="border border-yellow-500 p-2 rounded-r-md bg-yellow-500">
            Subscribe
          </button>
        </form>
      </div>
      <div className="mt-3 px-3">
        <ul className="flex flex-row ph:flex-col">
          <ul className="ph:flex-wrap ml-3 ">
            <ul className="w-4/12 flex ">
              <li className="mt-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-208 0H400v-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16z"></path>
                </svg>
              </li>
              <li className="px-1 font-semibold">Ecomm Store</li>
            </ul>
            <li className='w-8/12'>
              Buy amazing premium digital experiences that suits you well and
              you feel confident.
            </li>
          </ul>
          <ul className="w-2/12  border-black pl-16 ph:pl-3 ph:m-auto ph:my-2 mt-2 ">
            <li className="font-semibold">Company</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media kit</li>
            <li>Contact</li>
          </ul>
          <ul className="w-2/12  border-black pl-16 ph:pl-3 ph:m-auto ph:my-2 mt-2">
            <li className="font-semibold">Resources</li>
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Events</li>
            <li>Help center</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
          <ul className="w-2/12  border-black pl-16 ph:pl-3 ph:m-auto ph:my-2 mt-2">
            <li className="font-semibold">Social</li>
            <li>Twitter</li>
            <li>Linkedin</li>
            <li>Facebook</li>
            <li>GitHub</li>
            <li>AngleList</li>
            <li>Dribbble</li>
          </ul>
          <ul className="w-2/12  border-black pl-16 ph:pl-3 ph:m-auto ph:my-2 mt-2">
            <li className="font-semibold">Legal</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Settings</li>
            <li>Contact</li>
          </ul>
          <ul className="w-2/12 border-black pl-16 ph:pl-3 ph:m-auto ph:my-2 mt-2">
            <li className="font-semibold">Products</li>
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </ul>
      </div>
      <div className="mt-3 px-3 ml-3">
        <p>
          &copy; {new Date().getFullYear()} All rights are reserved by{" "}
          <b>Krishan Kanhaya</b>.
        </p>
      </div>
    </footer>
  );
}

export default Footer