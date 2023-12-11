import React from 'react';
import FullLogo from '../../public/images/logo/SJT-02.svg';
import Image from 'next/image';
import '../app/globals.css'

const Header: React.FC = () => {
  return (
    <header className="text-white fixed">
      <div className="container mx-auto header-background ps-10 py-8 pe-96 me-60">
        <Image src={FullLogo} alt="Full Logo" className="w-60"/>
      </div>
    </header>
  );
};

export default Header;
