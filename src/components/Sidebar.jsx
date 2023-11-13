'use client'

import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen p-4 ms-3 flex flex-col items-center justify-center">
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