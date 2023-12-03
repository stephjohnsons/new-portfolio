import React from 'react';
import FullLogo from '../../public/images/logo/SJT-02.svg';
import S from '../../public/images/logo/SJT-01.svg';
import J from '../../public/images/logo/SJT-06.svg';
import T from '../../public/images/logo/SJT-07.svg';
import tephen from '../../public/images/logo/SJT-03.svg';
import ohnson from '../../public/images/logo/SJT-04.svg';
import seu from '../../public/images/logo/SJT-05.svg';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="text-white p-4">
      <div className="container mx-auto mt-5">
        <Image src={FullLogo} alt="Full Logo" className="w-40"/>
        <div className="flex flex-row">
          <Image src={S} alt="S" className=''/>
          <Image src={tephen} alt="tephen"/>
        </div>
        <div className="flex flex-row">
          <Image src={J} alt="J"/>
          <Image src={ohnson} alt="ohnson"/>
          <Image src={T} alt="T"/>
          <Image src={seu} alt="seu"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
