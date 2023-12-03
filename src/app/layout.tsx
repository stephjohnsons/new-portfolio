'use client'

import React, { ReactNode, useState, useEffect } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Cursor from '@/components/Cursor';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [docTitle, setDocTitle] = useState('');
  useEffect(() => {
    const handleFocus = () => {
        document.title = docTitle;
    };

    const handleBlur = () => {
        document.title = "Come back :(";
    };

    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);

    return () => {
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
    };
  }, [docTitle]);

  return (
    <div>
      <Cursor />
      <div className="flex">
        <div className="basis-4/5">
          <Header />
          <main className="mt-28 ms-2">
            {children}
          </main>
        </div>
        <div className="basis-1/5 me-10">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
