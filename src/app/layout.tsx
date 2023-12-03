'use client'

import React, { ReactNode, useState, useEffect } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Cursor from '@/components/Cursor';
import { motion, AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Cursor />
      <AnimatePresence initial={false}>
        <div className="flex">
          <div className="basis-4/5">
            <Header />
            <motion.main 
              initial="hidden"
              animate="enter"
              className="mt-28 ms-2"
            >
              {children}
            </motion.main>
          </div>
          <div className="basis-1/5 me-10">
            <Sidebar />
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
