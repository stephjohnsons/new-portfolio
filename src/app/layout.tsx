'use client'

import React, { ReactNode, useEffect } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const docTitle = typeof window !== 'undefined' ? document.title : "";

  useEffect(() => {
    const onBlur = () => {
      document.title = "Come back :(";
    };
  
    const onFocus = () => {
      document.title = docTitle;
    };
  
    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);
  
    return () => {
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
    };
  }, [docTitle]);

  return (
    <div>
      <div className="flex w-screen">
        <div className="basis-4/5">
          <Header />
            <main
              className="mt-28 ms-2"
            >
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
