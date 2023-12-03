'use client'

import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-screen h-screen pe-4 me-3 flex flex-col justify-center text-end items-end">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/">
              <h1 className="text-6xl hover:scale-110 transition duration-200">
                Home
              </h1>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <h1 className="text-6xl hover:scale-110 transition duration-200">
                About
              </h1>
            </Link>
          </li>
          <li>
            <Link href="/works">
              <h1 className="text-6xl hover:scale-110 transition duration-200">
                Works
              </h1>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <h1 className="text-6xl hover:scale-110 transition duration-200">
                Contact
              </h1>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;