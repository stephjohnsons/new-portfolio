'use client';

import Link from 'next/link';

const sidebarLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Cello', href: '/cello' },
  { label: 'Works', href: '/works' },
  { label: 'Skills', href: '/skills' },
  { label: 'Contact', href: '/contact' },
];

const Sidebar = () => {
  return (
    <aside className="w-30 h-screen fixed pe-20 me-20 flex flex-col justify-center text-end items-end">
      <nav>
        <ul className="space-y-4">
          {sidebarLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>
                <h1 className="text-5xl transition duration-100 links py-1">
                  {link.label}
                </h1>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
