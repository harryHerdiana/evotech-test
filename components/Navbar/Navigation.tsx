'use client';
import Image from 'next/image';
import { Navbar } from './Navigation.styled';
import Link from 'next/link';
import Logo from '@/public/Logo.png';

const Navigation: React.FC = () => {
  return (
    <Navbar>
      <Image src={Logo} height={142} width={166} alt='evologo' />
      <Link href='/'>Home</Link>
    </Navbar>
  );
};
export default Navigation;
