import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3x1">There was an problem.</h2>
      <p>We could not found page you were looking for</p>
      <p>
        Go back to all <Link href="/tickets">tickets</Link>.
      </p>
    </main>
  );
}
