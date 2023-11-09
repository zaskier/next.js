import Navbar from '@/app/components/Navbar';

export const metadata = {
  title: 'E-Corp | Tickets'
};

export default function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
