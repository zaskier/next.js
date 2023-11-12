import React from 'react';
import Link from 'next/link';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import Logo from 'public/ev_corp_logo.png';
import Image from 'next/image';

export default async function AuthLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    redirect('/');
  }
  return (
    <>
      <nav>
        <Image
          src={Logo}
          className="ecorp-logo"
          alt="E sCorp helpdesk logo"
          width={70}
          quality={70}
          placeholder="blur"
        />{' '}
        <h1>E-Corp helpdesk</h1>
        <Link href="/signup">Sign up</Link>
        <Link href="/login">Log in</Link>
      </nav>
      {children}
    </>
  );
}
