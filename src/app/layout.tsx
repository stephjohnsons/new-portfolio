import React, { ReactNode } from 'react';
import Sidebar from '@/components/Sidebar';
import Cursor from '@/components/Cursor';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="flex">
        <main className="flex-grow">{children}</main>
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;
