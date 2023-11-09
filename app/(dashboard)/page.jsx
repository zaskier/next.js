/* eslint-disable react/jsx-no-comment-textnodes */

import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h2>Dashboards</h2>
      <p>
        At E-Corp, we understand that your experience matters. Our Support Dashboard is your go-to
        hub for managing all aspects of your E-Corp products and services. This webpage features
        news that all support employees are required to familiarize themselves with.
      </p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>
      {/* todo add clickable dashboard articles */}
      <div className="card">
        <h3>New E-Corp Divisions added to It helpdesk</h3>
        <p>
          E-Corp has launched E-Coin, a digital solution to the credit card managed by CTO Scott
          Knowles. All escalations are already working according to company standards.
        </p>
      </div>
      <div className="card">
        <h3>New application is now live</h3>
        <p>
          E-Coin IOS and android app is already avaliable for customers. As E Corp forges ahead with
          the launch of E-Coin, it solidifies its position as a trailblazer in the ever-evolving
          landscape of finance and technology. E-Coin is not just a product; it's a testament to E
          Corp's commitment to pushing the boundaries of innovation. As we step into this new era of
          digital finance, E-Coin stands as a symbol of the future, where financial transactions are
          not just transactions but experiences that transcend the conventional norms.
        </p>
      </div>
    </main>
  );
}
