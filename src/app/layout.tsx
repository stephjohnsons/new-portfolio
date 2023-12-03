import React, { ReactNode } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Cursor from '@/components/Cursor';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Cursor />
      <div className="flex">
        <div className="flex-grow">
          <Header />
          <main className="mt-28">
            {children}
          </main>
        </div>
        <div className="me-5">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
