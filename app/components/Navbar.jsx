import Image from 'next/image';
import Link from 'next/link';
// import React from 'react';
import Logo from 'public/ev_corp_logo.png';
import LogoutButton from './LogoutButton';

export default function Navbar({ user }) {
  return (
    <nav>
      <Image
        src={Logo}
        className="ecorp-logo"
        alt=" E-Corp helpdesk logo"
        width={70}
        quality={70}
        placeholder="blur"
      />{' '}
      <h1>E-Corp helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets" className="mr-auto">
        Tickets
      </Link>
      {user && <span>Hello, {user.email}</span>}
      <LogoutButton />
    </nav>
  );
}
