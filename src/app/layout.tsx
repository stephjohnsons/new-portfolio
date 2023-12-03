'use client'

import React, { ReactNode, useState, useEffect } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Cursor from '@/components/Cursor';
import { AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* <Cursor /> */}
        <div className="flex">
          <div className="basis-4/5">
            <Header />
            <AnimatePresence
                mode='wait'
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
              <main
                className="mt-28 ms-2"
              >
                {children}
              </main>
            </AnimatePresence>
          </div>
          <div className="basis-1/5 me-10">
            <Sidebar />
          </div>
        </div>
    </div>
  );
};

export default Layout;
